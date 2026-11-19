# AWS Data Firehose (CloudFront)

> Send AI crawler visits on a CloudFront distribution to Agent Analytics through Amazon Data Firehose

If your site runs behind Amazon CloudFront, you can send its access logs to ChatFeatured through Amazon Data Firehose. ChatFeatured keeps the requests made by AI crawlers and search bots and shows them in [Agent Analytics](../using-chatfeatured/agent-analytics.md). In ChatFeatured, open **Integrations** and click **AWS Data Firehose** under **Agent analytics**.

CloudFront standard logging (v2) writes each request as JSON to a Firehose stream. A small Lambda function drops static files and 5xx errors and converts the rest, and Firehose delivers the batch to ChatFeatured. Batches ChatFeatured rejects go to an S3 bucket.

> [!WARNING]
>
> Use standard logging (v2) with the JSON output format, not CloudFront real-time logs. Real-time logs go to a Kinesis data stream and are tab-separated, which the Lambda below can't parse.

## Before you start

* Create the Firehose stream and Lambda function in **US East (N. Virginia), us-east-1**. CloudFront only delivers standard logs to Firehose streams in that region.
* Your AWS user needs permission to create the Lambda function and Firehose stream and to set up CloudFront log delivery. See AWS's [permissions for Firehose log delivery](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html#AWS-logs-infrastructure-V2-Firehose).
* Creating an API key needs an Owner or Admin by default.

## Set it up

**1. Create an API key**

On the AWS Data Firehose integration page, click **New API Key**, enter a name and click **Create API Key**. Copy the key from the dialog. Keys start with `aa_`.

Any Agent Analytics key works for every log source, so you can reuse one from **Website > Agent Analytics > Settings**. A new key can take up to a minute to start working.

**2. Create the Lambda function**

In the AWS Lambda console (us-east-1), click **Create function** and choose **Author from scratch**:

* Function name: `chatfeatured-cloudfront-log-processor`
* Runtime: **Python 3.12**
* Architecture: **x86\_64**

Click **Create function**, replace the code with the code below and click **Deploy**. Under **Configuration > General configuration**, raise the timeout from the 3-second default (1 minute is plenty). The function needs no environment variables; your API key goes on the Firehose stream.

```python
import json
import base64
from datetime import datetime

# Extensions to ignore (static assets)
IGNORE_EXT = [
    '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico',
    '.mp4', '.webm', '.mp3', '.wav', '.ogg',
    '.css', '.js', '.mjs', '.json', '.map',
    '.txt', '.xml', '.pdf',
    '.woff', '.woff2', '.ttf', '.eot',
    '.zip', '.rar', '.7z', '.tar', '.gz'
]

def lambda_handler(event, context):
    output_records = []

    for record in event['records']:
        # Decode the CloudFront log record
        payload = base64.b64decode(record['data']).decode('utf-8')
        log_data = json.loads(payload)

        # Extract pathname from cs-uri-stem
        pathname = log_data.get('cs-uri-stem', '')

        # Skip static assets
        if any(pathname.lower().endswith(ext) for ext in IGNORE_EXT):
            output_records.append({
                'recordId': record['recordId'],
                'result': 'Dropped',
                'data': record['data']
            })
            continue

        # Skip 5xx errors
        status = int(log_data.get('sc-status', 0))
        if status >= 500:
            output_records.append({
                'recordId': record['recordId'],
                'result': 'Dropped',
                'data': record['data']
            })
            continue

        # Transform to ChatFeatured schema
        transformed_data = {
            'timestamp': f"{log_data.get('date')}T{log_data.get('time')}Z",
            'host': log_data.get('cs(Host)', ''),
            'method': log_data.get('cs-method', ''),
            'pathname': pathname,
            'query_params': log_data.get('cs-uri-query', ''),
            'ip': log_data.get('c-ip', ''),
            'userAgent': log_data.get('cs(User-Agent)', ''),
            'referer': log_data.get('cs(Referer)', ''),
            'status': status
        }

        # Encode transformed data
        output_data = base64.b64encode(
            json.dumps(transformed_data).encode('utf-8')
        ).decode('utf-8')

        output_records.append({
            'recordId': record['recordId'],
            'result': 'Ok',
            'data': output_data
        })

    return {'records': output_records}
```

**3. Create an S3 bucket for failed batches**

In the S3 console, create a bucket in us-east-1, for example `chatfeatured-cloudfront-logs-backup-<your-account-id>`. Default settings are fine.

**4. Create the Firehose stream**

In the Amazon Data Firehose console (us-east-1), click **Create Firehose stream**:

1. Source: **Direct PUT**. Destination: **HTTP Endpoint**.
2. Stream name: `chatfeatured-cloudfront-analytics`.
3. Turn on data transformation and select the Lambda function from step 2.
4. HTTP endpoint URL: `https://ingest.chatfeatured.com/v1/logs/aws_data_firehose_cloudfront`
5. Authentication: use an access key, and paste your `aa_` key as the **Access key**.
6. Content encoding: **GZIP**.
7. Buffer hints: 1 MB and 60 seconds.
8. Backup settings: back up **failed data only** to the bucket from step 3.
9. Service role: let the console create a new role.

Click **Create Firehose stream** and wait for its status to show **Active**.

**5. Turn on CloudFront standard logging**

1. In the CloudFront console, open your distribution and choose the **Logging** tab.
2. Choose **Add**, then **Amazon Data Firehose**, and select the stream from step 4.
3. Under **Additional settings**, set **Output format** to **JSON**.
4. Under **Field selection**, select at least: `date`, `time`, `c-ip`, `cs-method`, `cs(Host)`, `cs-uri-stem`, `cs-uri-query`, `cs(User-Agent)`, `cs(Referer)`, `sc-status`.
5. Save the delivery.

## Check that it works

A browser visit won't show anything, because ChatFeatured keeps only requests from recognized bots. Request a page with a crawler user agent instead:

```bash
curl -A "GPTBot/1.0" https://d111111abcdef8.cloudfront.net/
```

Use your distribution's domain or your own. Allow several minutes for log delivery and the Firehose buffer; the visit then appears in **Website > Agent Analytics** as a GPTBot request. The stream's **Monitoring** tab in the Firehose console shows whether deliveries are succeeding.

## What gets recorded

ChatFeatured keeps requests from AI crawlers and search engine bots (see [what gets counted](../using-chatfeatured/agent-analytics.md#what-gets-counted)) and discards everything else. The Lambda function also drops 5xx responses and static files, including `.txt` and `.xml`, so `robots.txt`, `llms.txt` and `sitemap.xml` fetches don't appear. Remove `'.txt'` and `'.xml'` from `IGNORE_EXT` to track them.

AWS bills the log delivery, the Firehose stream, the Lambda invocations and S3 storage.

## Troubleshooting

> [accordion] Firehose deliveries fail with 401
>
> `Missing access key` or `Invalid access key`: the stream's access key is missing, mistyped, deactivated, deleted, or less than a minute old. Fix the access key on the stream.

> [accordion] Records fail in the transformation step
>
> Check the Lambda function's logs in CloudWatch. A `JSONDecodeError` means the CloudFront delivery isn't using standard logging with the **JSON** output format. A timeout means the function's timeout is still at 3 seconds.

> [accordion] Deliveries succeed but nothing shows in Agent Analytics
>
> Check that the field selection includes `cs(User-Agent)` and `cs-uri-stem`, then test with the `curl` command above rather than a browser visit.

## Related

* [Agent Analytics](../using-chatfeatured/agent-analytics.md): reading the data
* [CloudFront standard logging (v2)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/standard-logging.html) in the AWS docs


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.

---

This page mirrors [docs.chatfeatured.com/integrations/aws-data-firehose](https://docs.chatfeatured.com/integrations/aws-data-firehose).
