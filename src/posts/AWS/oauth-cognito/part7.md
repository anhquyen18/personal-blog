---
date: 2024-06-24
title: 7. Dọn dẹp tài nguyên
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

Hầu hết các dịch vụ sử dụng trong bài lab này đều không tính phí nếu AWS Account của bạn còn trong thời gian gói _Free Tier_ của AWS. Nhưng để gọn gàng và tránh phát sinh những chi phí về sau ta cùng dọn dẹp những dịch vụ đã tạo.

- Cognito Identity pool:

  - Chọn Identity pool của bài lab sau đó nhấn **Delete**.
  - Xác nhận xoá, nhập tên ID pool và nhấn **Delete**.

- IAM Role:

  - Tìm đến Role đã tạo trong quá trình tạo ID pool (Cognito_IDPool_Role).
  - Chọn và nhấn **Delete**, nhập tên role để xác nhận sau đó nhấn **Delete**.

- 2 S3 Bucket:

  - Chọn bucket muốn xoá, nhấn **Empty**, nhập _permanently delete_ để xác nhận sau đó nhấn **Empty**.
  - Exit, chọn lại bucket muốn xoá, nhấn **Delete**, nhập bucket name để xác nhận sau đó nhấn **Delete bucket**.
  - Bucket còn lại được tiến hành tương tự.

- CloudFront:

  - Chọn CloudFront của bài lab, chọn **Disable**.
  - Khi status đã _Disabled_, chúng ta chọn và _Delete_ CloudFront.

- Google API:

  - Chọn Project muốn xoá, nhấn **Delete**.

  ![](/storage/oauth-cognito/7_1.png)

  - Nhập _Project ID_, sau đó nhấn **SHUT DOWN ANYWAY**

  ![](/storage/oauth-cognito/7_2.png)

  - Project sẽ được xoá trong thời gian tới.

  ![](/storage/oauth-cognito/7_3.png)

### Hẹn gặp lại bạn ở các workshop tiếp theo!!
