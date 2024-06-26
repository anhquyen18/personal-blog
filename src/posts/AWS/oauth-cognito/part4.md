---
date: 2024-06-24
title: 4. GoogleAPI Key
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

Chúng ta sẽ thực hiện đăng ký Google API Key để có thể sử dụng OAuth cho Amazon Cognito.

1. Đăng nhập vào [Google Cloud Platform (GCP)](https://console.cloud.google.com)

Nếu chưa có tài khoản Google bạn, cần đăng ký một tài khoảng để thực hiện bước này. Hướng tại dẫn tạo tài khoản Google [đây](https://support.google.com/accounts/answer/27441?hl=vi)

![](/storage/oauth-cognito/4_1.png)

2. Tạo project làm việc.

- Chọn **Select a project**, sau đó chọn **NEW PROJECT**

![](/storage/oauth-cognito/4_2.png)

![](/storage/oauth-cognito/4_3.png)

- Đặt project name là _aq-lab1809_ (hoặc bất kì tên nào bạn muốn), sau đó chọn **Create**.

![](/storage/oauth-cognito/4_4.png)

3. Tạo API key.

- Vào ô tìm kiếm, ghi vào _API_, chọn **APIs & Services**.

![](/storage/oauth-cognito/4_5.png)

- Chọn **Select a project**, sau đó chuyển qua tab _OAuth consent screen_.

Tại đây chúng ta chọn type _Exteral_, sau đó chọn **Create**.

![](/storage/oauth-cognito/4_6.png)

- Cấu hình thông số.
  - App name: _aq-labs1809_
  - User support email: Email của bạn.
  - Developer contact information: Email của bạn.
  - Để mặc định các thông số còn lại.
  - Sau khi hoàn tất chọn **SAVE AND CONTINUE**.

![](/storage/oauth-cognito/4_7.png)

![](/storage/oauth-cognito/4_8.png)

- Tiếp tục chọn **SAVE AND CONTINUE**.

![](/storage/oauth-cognito/4_9.png)

- Chọn **SAVE AND CONTINUE**.

![](/storage/oauth-cognito/4_10.png)

- Sau khi hoàn tất, kéo xuống chọn **BACK TO DASHBOARD**.

![](/storage/oauth-cognito/4_11.png)

- Chuyển qua tab _Credentials_, chọn **CREATE CREDENTIALS**.

![](/storage/oauth-cognito/4_12.png)

- Chọn _OAuth client ID_.

![](/storage/oauth-cognito/4_13.png)

- Cấu hình _OAuth client ID_.
  - Application type: Chọn _Web application_.
  - Name: _AQServerlessApp_
  - Authorized JavaScript origins: Chọn **+ Add URL**. Chúng ta quay trở lại CloudFront đã tạo từ trước đóm copy Domain name sau đó dán vào URLs 1, của mình là _https://d39p5r2jq0ih57.cloudfront.net_
  - Cuối cùng chọn **CREATE** để hoàn tất.

![](/storage/oauth-cognito/4_14.png)

![](/storage/oauth-cognito/4_15.png)

![](/storage/oauth-cognito/4_16.png)

- Tạo Credentials thành công. Chúng ta sẽ lưu lại _Client ID_ để sử dụng cho các bước sắp tới.

![](/storage/oauth-cognito/4_17.png)
