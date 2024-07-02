---
date: 2024-06-24
article: false
title: 4. Service Control Policies
prev: /en/posts/AWS/prevent-security-risks/access-control/3-3
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

### Introduction

Service Control Policies (SCPs) are a feature of AWS Organizations. SCPs allow you to manage and control access to AWS resources centrally across all accounts within an AWS Organizations. SCPs define which actions are allowed or denied for child accounts within your organization.

Features of SCPs:

1. **Centralized Management**: SCPs provide a way to centrally manage access for all child accounts within an AWS organization. This makes it easier to maintain and control security policies across the organization.
2. **Enhanced Security**: SCPs help increase security by ensuring that child accounts can only perform authorized actions. This minimizes the risk of users or applications performing unwanted or dangerous actions.
3. **Regulatory Compliance**: SCPs help organizations comply with internal or external regulations and policies by tightly controlling access permissions and actions that can be taken.
4. **Minimize configuration errors**: By using SCPs, you can minimize the risk of configuration errors due to inadvertent or unclear user access permissions.

How to use SCPs in practice:

- Example SCPs:

1. Prevent EC2 instances termination:

You can create an SCP that allows all actions but denies only the **TermniateInstances** action for all child accounts:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "*",
      "Resource": "*"
    },
    {
      "Effect": "Deny",
      "Action": "ec2:TerminateInstances",
      "Resource": "*"
    }
  ]
}
```

Applying this SCP will prevent any users in the child accounts from terminating EC2 instances.

2. Restrict S3 access:

Suppose you want to limit access to read-only S3 buckets:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:ListBucket"],
      "Resource": "*"
    },
    {
      "Effect": "Deny",
      "Action": ["s3:DeleteObject", "s3:PutObject"],
      "Resource": "*"
    }
  ]
}
```

This SCP will allow read actions but deny write and delete actions.

### SCPs and other policies in AWS

SCPs affect what accounts within an organization can do with AWS services and resources. How SCPs interact with other policy services such as IAM policies and resource-based policies is important to ensure correct security configuration. Below is a description of how SCPs interact with other policy types in AWS.

1. Service Control Policies (SCPs)

   SCPs apply at the organizational level and limit what accounts within the organization can do. SCPs _**don't grant permissions**_, they just limit the permissions that accounts within the organization can use. If an action is denied by the SCP, then whether IAM policies or resource-based policies allow that action, the action is still denied.

2. IAM Policies

   IAM Policies are assigned to users, groups, or roles within an account and manage access to AWS resources. IAM policies grant specific permissions to users or services to perform certain actions on specific resources.

3. Resource-Based Policies

   Resource-Based Policies are policies that are attached directly to AWS resources, such as S3 bucket policies or SNS topic policies. These policies determine who (account or IAM entity) can access resources and what actions they can take.

![](/storage/prevent-security-risks/iam-4_1.png)

- **SCPs và IAM Policies**:

  - **Giới hạn quyền**: SCPs place limits on IAM permissions. If the SCP does not allow an action, the action cannot be performed even if the IAM policy allows it.
  - **Union Policies**: For an action to be performed, both the SCP and IAM policy must allow the action. Actual permissions are the union of SCP and IAM policy permissions.
  - Ex: If SCP only allows s3:ListBucket, but IAM policy allows s3:ListBucket and s3:PutObject, then the user can only do s3:ListBucket.

- **SCPs và Resource-Based Policies**:

  - **Resource-based policies need to comply with SCPs**: Similar to IAM policies, actions defined in resource-based policies must comply with SCPs. If the SCP denies an action, that action cannot be performed even if the resource-based policy allows it.
  - **Comprehensive Control**: SCPs can control access to resources from all accounts within the organization. Resource-based policies only control access to resources from specific accounts or users.
  - For example: If SCP denies s3:PutObject, then no one in the organization can add the object to the bucket, even if the bucket policy allows it.

- **SCPs và AWS Organizations**:
  - **SCPs apply to all accounts**: SCPs apply to all accounts in the AWS Organization, including management accounts. This can be configured to control access and actions across all accounts.

SCPs in AWS Organizations provide an organization-level access control layer, combined with IAM policies and resource-based policies, to manage permission and secure AWS resources. SCPs _**don't grant permissions**_ but only limit permissions, and all actions must be allowed by both the SCP and other policies to be performed.

### Prioritization among policies in SCPs

The principle of applying policy statements in SCPs (Service Control Policies) in AWS Organizations is similar to the way of applying policies in IAM (Identity and Access Management). There are some similarities:

1. **Explicit Deny takes precedence over Allow**: Both SCPs and IAM policies follow this principle. If any policy statement has an Effect of Deny, that action will be immediately rejected, regardless of whether there are other policy statements that allow that action.

2. **Implicit Deny**: If an action is not explicitly allowed by a policy statement, it will be implicitly denied. This means that only actions that are explicitly allowed will be performed.
