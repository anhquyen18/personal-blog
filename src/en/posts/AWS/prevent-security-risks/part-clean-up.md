---
date: 2024-06-26
title: 6. Clean up
article: false
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

- Budget:

  - Select Budget _My Monthly Cost Budget_, click **Delete**.

- EC2:

  - Right-click instance **test-ec2**, select **Terminate instance**, click **Terminate**.

- EventBrigde rule:

  - Select **EC2ProtectRule**, click **Delete**, enter _delete_, click **Delete**.

- Lambda:

  - Select **EC2Protect**, click **Action**, select **Delete**, enter _delete_, click **Delete**.

- Role:

  - Search for **EC2ProtectRole**, click **Delete**, enter _EC2ProtectRole_, click **Delete**.

- IAM Policy:

  - Search for **EC2Protect**, click **Delete**, enter _EC2Protect_, click **Delete**.

- User group:

  - Select _DevGroup_, click **Delete**, enter _DevGroup_, click **Delete**.

- User:
  - Select _dev-user-01_, click **Delete**, enter _dev-user-01_, click **Delete user**.
