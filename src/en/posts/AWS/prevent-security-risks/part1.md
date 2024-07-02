---
date: 2024-06-26
title: 1. Introduction
article: false
prev: false
next: /en/posts/AWS/prevent-security-risks/budget/2-1
lastUpdated: true
category:
  - AWS
tag:
  - Security
  - Organization
  - IAM
  - EventBridge
  - Budget
  - Guide
---

The workshop was inspired by Mr. _Nguyen Phong_'s post in the Facebook group _AWS Study Group_.

DON'T KNOW -> DON'T DO -> DON'T MAKE MISTAKES

Recently, I learned that there were a few high cost cases on AWS from friends and colleagues amounting to billions of dong, affecting the reputation of the company and customers. In some cases, the access key was exposed on the public github repo for hackers to take advantage of. In some cases, using Cloudwatch Log Subscription Filter somehow cost several billion in a few hours. There are also cases where the settings were wrong and the service was used without understanding, amounting to tens of millions in 3 days.

These are just a few cases from my friends and colleagues.

A few years ago, I also pushed a client source with an access key to the public github repo. Using high cost resource (lambda provisioned concurrency, ECS) costs 700 million in 1 month.

By the way, I would like to share some basic ways to protect your AWS account, or if you are working in a customer environment, pay attention to the following:

1. AWS ACCOUNT MANAGEMENT POLICY

- Use Multi account for the following reasons
  - **Perspective on Governance**: Clear separation between production and other environments.
  - **Payment perspective**: Manage payments for each account.
  - **Operational perspective**: Minimize the impact of changes and relax AWS service quota limits.
- Reference: Best Practices for Organizational Units with AWS Organizations.
  https://aws.amazon.com/.../best-practices-for.../

2. HUMAN ACCESS CONTROL

- Setting MFA for root user, do not use root user for daily work except in cases of setting on account level.
- IAM users are created for each user, do not use common IAM users.
- Set a strong enough password policy (Minimum 14 characters, including uppercase and lowercase letters, numbers and special characters).
- Additional MFA settings are required.
- The time limit for changing password is 90 days.
- A new password that is the same as any of the four most recent passwords used cannot be reused.
- Immediately after being granted an IAM user, you need to change your password the first time you log in.
- There is a detection and Notification mechanism when root account login (EventBridge + SNS).
- IAM policy for IAM user / IAM group requires minimum permissions.

3. PROGRAM ACCESS CONTROL

- Control access between AWS resources
- All AWS resources are protected by AWS IAM policy. Therefore, your AWS IAM policy should be designed in according to the **principle of least privilege** (do not grant excess permissions).
- Access control based on Organizations SCP.
- Control and prevent resource creation in unwanted Regions (for example, only allow resource creation in 2 Regions Tokyo (ap-northeast-1) and N. Virginia (us-east-1))
- Prevent the creation of high cost resources outside the project scope such as: Glue, EMR, Redshift...
- Prevent creating EC2 or DB with Instance types outside the approval list (expensive instance types).
- Prevent changing settings to some services such as AWS CloudTrail, AWS Config, Amazon GuardDuty, Budget, etc.

4. USE ACCESS KEY

- Do not use access key for root account.
- Use access key with minimal permissions.
- Use IAM Role instead of Access key when possible. (eg IAM role for EC2, IAM for Lambda etc).
- Use different access keys for each application.
- Delete unused access keys.
- Do not save access key in source code.
- There is a mechanism to notify when keys are leaked to github (AWS will send a warning email).

5. CONTROLL BUDGET

- Set daily Budget and Monthly budget to receive unusual alerts via SNS.
- Depending on the architecture of your project, consider the following factors:

  - Application security
  - Network Security
  - Data security
  - Device security
  - SaaS security

Above are some notes I gave, if you feel you need to pay more attention, please share!

UNDERSTAND -> DO -> LIMIT RISK

Now let's dive deeper into some notable points that Mr. _Nguyen Phong_ mentioned in the post. Let's get started!!
