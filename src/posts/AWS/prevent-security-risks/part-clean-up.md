---
date: 2024-06-26
title: 5. Dọn dẹp
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

  - Chọn Budget _My Monthly Cost Budget_, chọn **Delete**.

- EC2:

  - Chuột phải chọn instance **test-ec2**, chọn **Terminate instance**, chọn **Terminate**.

- EventBrigde rule:

  - Chọn **EC2ProtectRule**, chọn **Delete**, nhập _delete_, chọn **Delete**.

- Lambda:

  - Chọn **EC2Protect**, chọn **Action**, chọn **Delete**, nhập _delete_, chọn **Delete**.

- Role:

  - Tìm và chọn **EC2ProtectRole**, chọn **Delete**, nhập _EC2ProtectRole_, chọn **Delete**.

- IAM Policy:

  - Tìm và chọn **EC2Protect**, chọn **Delete**, nhập _EC2Protect_, chọn **Delete**.

- IAM Policy:

  - Chọn **DevGroup**, chọn **Delete**, nhập _DevGroup_, chọn **Delete**.

- IAM Policy:
  - Chọn **dev-user-01**, chọn **Delete**, nhập _dev-user-01_, chọn **Delete user**.
