---
date: 2024-06-24
title: 3. CloudFront
article: false
prev: /en/posts/AWS/oauth-cognito/part2/2-2
lastUpdated: true
category:
  - AWS
tag:
  - Cognito
  - S3
  - IAM
  - Guide
---

Amazon CloudFront is a content delivery network (CDN) service of Amazon Web Services (AWS). CloudFront delivers content, including data, video, applications, and APIs, to users globally with low latency and high speeds.

### Some highlights of CloudFront:

1. Global distribution: CloudFront has a network of points of presence (Edge Locations) around the world, helping to deliver content quickly to users, no matter where they are.

2. Integration with AWS: CloudFront easily integrates with other AWS services such as Amazon S3, Elastic Load Balancing, and Amazon EC2, helping to manage and deploy content efficiently.

3. Security: CloudFront supports many security features such as SSL/TLS for data encryption, AWS Shield Standard to protect against DDoS attacks, and integration with AWS WAF to protect web applications.

4. High performance: With a powerful cache mechanism, CloudFront reduces the load on origin servers and ensures content is delivered quickly from locations closest to users.

5. Flexibility: CloudFront allows for customized content delivery behavior through features like Lambda@Edge, which performs encryption, authentication, or change requests and responses across Edge Locations.

Within the scope of this workshop, we will not focus on explaining CloudFront in detail. To learn more about CloudFront you can visit [here](https://aws.amazon.com/cloudfront/)

### Create CloudFront for the App Bucket

1. Go to the AWS CloudFront console [here](https://console.aws.amazon.com/cloudfront/), click **Create a CloudFront distribution**.

![](/storage/oauth-cognito/3_1.png)

2. Origin domain, select the app-bucket created in step 2.1.

![](/storage/oauth-cognito/3_2.png)

3. Then click **Use website end point**.

![](/storage/oauth-cognito/3_3.png)

4. Web Application Firewall (WAF), click **Enable security protections**

![](/storage/oauth-cognito/3_4.png)

5. Other parameters are left at default, click **Create distribution**.

![](/storage/oauth-cognito/3_5.png)

6. Created CloudFront successfully.

![](/storage/oauth-cognito/3_6.png)

CloudFront will take a few minutes to _deploy_ (about 10 minutes for me). Once completed, _Last modified_ shows the specific completion time.

![](/storage/oauth-cognito/3_7.png)

Check CloudFront in action.

![](/storage/oauth-cognito/3_8.png)

So CloudFront has successfully redirected to the App Bucket. Next, let's come to the main dish!
