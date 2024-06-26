---
date: 2024-06-24
title: 5. Cognito ID Pools
article: false
# next: /posts/AWS/oauth-cognito/part2/
lastUpdated: true
category:
  - AWS
tag:
  - Cognito
  - S3
  - IAM
  - Guide
---

In this step, we will create an Identity Pools configuration and grant permissions to accounts authenticated via this Cognito API.

## Cognito Identity pools introduction.

Identity pools is a part of Amazon Cognito, allows you to create and manage user identities for your applications. With Identity pools, you can grant temporary access to AWS services to users, including logged in users and anonymous users.

Identity Pools highlights:

1. Identity management: Identity pools help consolidate identities from multiple providers such as Facebook, Google, Amazon, and SAML providers, or use your own authentication system.

2. Temporary access: You can grant temporary and limited access to users to use AWS services such as Amazon S3, DynamoDB, or API Gateway.

3. Anonymous authentication: Allow anonymous users to access AWS resources with limited permissions, then escalate the access when they logged in.

4. Easy integration: Identity pools integrates well with other AWS services, making it easy to set up and manage access.

5. Granular permission management: Use IAM policies to define granular access rights for different groups of users based on identity attributes.

Amazon Cognito Identity pools makes it easy to authenticate users and manage access to AWS resources, ensuring security and flexibility in building modern applications.

You can learn more about Cognito in [here](https://docs.aws.amazon.com/cognito/)

## Tạo Identity pools

Access the Amazon Cognito console [here](https://console.aws.amazon.com/cognito)

1. In the Cognito console, select **Identity pools** then click **Create identity pool**.

![](/storage/oauth-cognito/5_1.png)

2. Loại user access chọn **Authenticated access**

- Authenticated Access:
  - Users must log in via OAuth or User pool.
  - Authenticated users have more granular access and specific permissions in AWS services through IAM Policy.
  - Suitable for applications that need detailed and secure information about users, such as storing user profiles, accessing personal data, or performing sensitive actions.
- Guest Access.
  - Users do not need to log in. They can access resources without providing identifying information. Managed through temporary information provided by Identity pools.
  - Access is often limited and configured to allow only non-sensitive or less important actions.
  - Suitable for apps that need to provide quick and simple access, such as demo apps, access to public content, or initial user experience before registration.

![](/storage/oauth-cognito/5_2.png)

3. Select **Google** for Authenticated identity sources. Then **Next**.

![](/storage/oauth-cognito/5_3.png)

4. Chọn **Create a new IAM role**.

- AWS will automatically create a role for us with access to AWS services.
  - Role name: _Cognito-IDPool-Role_
  - Click **Next**.

![](/storage/oauth-cognito/5_4.png)

5. Enter the _Client ID_ we got from the Google API creation step.

![](/storage/oauth-cognito/5_5.png)

6. Keep other parameters as default and click **Next**.

![](/storage/oauth-cognito/5_6.png)

7. Enter the _Identity pool_. Continue clicking **Next**.

![](/storage/oauth-cognito/5_7.png)

8. Review the parameters are as expected, click **Create Identity pool**.

![](/storage/oauth-cognito/5_8.png)

9. Created Identity pool successfully.

![](/storage/oauth-cognito/5_9.png)

10. Go to the [IAM](https://console.aws.amazon.com/iam) console to configure the Identity pool.

Find the Role which was created with Identity pool.

![](/storage/oauth-cognito/5_10.png)

11. Click **Add permissions**, click **Create inline policy**.

![](/storage/oauth-cognito/5_11.png)

12. Grant permissions to the Identity pool.

- Users authenticated through the Identity pool will be able to list and retrieve objects in the provided bucket.
- Replace YOUR_PRIVATE_BUCKET_ARN with the ARN of the private bucket created in step 2.2.
- Then click **Next**, enter Polcity name and click **Create policy**.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": ["s3:ListBucket", "s3:GetObject"],
      "Resource": ["YOUR_PRIVATE_BUCKET_ARN", "YOUR_PRIVATE_BUCKET_ARN/*"],
      "Effect": "Allow",
      "Sid": "ReadPrivateBucket"
    }
  ]
}
```

![](/storage/oauth-cognito/5_12.png)

![](/storage/oauth-cognito/5_13.png)

![](/storage/oauth-cognito/5_14.png)

13. Added permissions successfully.

![](/storage/oauth-cognito/5_15.png)

So we have finished creating all the necessary resources for the labs. Next is the performance everyone has been waiting for, testing to see if our website works as expected.
