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

Ở đây chúng ta sẽ tạo cấu hình Identity Pools và cấp quyền nhất định cho các tài khoản được xác thực qua Cognito API này.

## Giới thiệu Cognito Identity pools.

Amazon Cognito Identity Pools, một phần của Amazon Cognito, cho phép bạn tạo và quản lý danh tính người dùng cho ứng dụng của mình. Với Identity Pools, bạn có thể cấp quyền truy cập tạm thời đến các dịch vụ AWS cho người dùng, bao gồm cả những người dùng đã đăng nhập và những người dùng ẩn danh.

Các điểm nổi bật của Identity Pools:

1. Quản lý danh tính: Identity Pools giúp hợp nhất các danh tính từ nhiều nhà cung cấp như Facebook, Google, Amazon, và các nhà cung cấp SAML, hoặc sử dụng hệ thống xác thực của riêng bạn.

2. Truy cập tạm thời: Bạn có thể cấp quyền truy cập tạm thời và hạn chế cho người dùng để sử dụng các dịch vụ AWS như Amazon S3, DynamoDB, hoặc API Gateway.

3. Xác thực ẩn danh: Cho phép người dùng ẩn danh truy cập vào tài nguyên AWS với các quyền hạn chế, sau đó nâng cấp quyền truy cập khi họ đăng nhập.

4. Tích hợp dễ dàng: Identity Pools tích hợp tốt với các dịch vụ AWS khác, giúp bạn dễ dàng thiết lập và quản lý quyền truy cập.

5. Quản lý quyền chi tiết: Sử dụng chính sách IAM để xác định chi tiết quyền truy cập cho từng nhóm người dùng khác nhau dựa trên các thuộc tính danh tính.

Amazon Cognito Identity Pools giúp bạn dễ dàng xác thực người dùng và quản lý quyền truy cập vào tài nguyên AWS, đảm bảo an toàn và linh hoạt trong việc xây dựng các ứng dụng hiện đại.

Bạn có thể tìm hiểu kĩ hơn về Cognito tại [đây](https://docs.aws.amazon.com/cognito/)

## Tạo Identity pools

Truy cập giao diện Amazon Cognito tại [đây](https://console.aws.amazon.com/cognito)

1. Trong giao diện Cognito, chọn **Identity pools** sau đó chọn **Create identity pool**.

![](/storage/oauth-cognito/5_1.png)

2. Loại user access chọn **Authenticated access**

- Authenticated Access:
  - Người dùng phải đăng nhập thông qua OAuth hoặc User pool.
  - Người dùng đã xác thực được quyền truy cập chi tiết hơn và có các quyền cụ thể trong cá dịch vụ AWS thông qua IAM Policy.
  - Thích hợp cho các ứng dụng cần thông tin chi tiết và an toàn về người dùng, chẳng hạn như lưu trữ hồ sơ người dùng, truy cập dữ liệu cá nhân, hoặc thực hiện các hành động nhạy cảm.
- Guest Access.
  - Người dùng không cần phải đăng nhập. Họ có thể truy cập vào tài nguyên mà không cần cung cấp thông tin danh tính. Được quản lí thông qua thông tin tạm thời cung cấp bởi Identity pools.
  - Quyền truy cập thường bị giới hạn và được cấu hình để chỉ cho phép những hành động không nhạy cảm hoặc ít quan trọng.
  - Thích hợp cho các ứng dụng cần cung cấp quyền truy cập nhanh và đơn giản, chẳng hạn như ứng dụng demo, quyền truy cập nội dung công khai, hoặc trải nghiệm người dùng ban đầu trước khi đăng ký.

![](/storage/oauth-cognito/5_2.png)

3. Chọn **Google** cho nguồn xác thực. Sau đó **Next**.

![](/storage/oauth-cognito/5_3.png)

4. Chọn **Create a new IAM role**.

- AWS sẽ tự động tạo một role có quyền truy cập các dịch vụ AWS cho chúng ta.
  - Role name: _Cognito-IDPool-Role_
  - Chọn **Next**.

![](/storage/oauth-cognito/5_4.png)

5. Nhập _Client ID_ ta có được từ bước tạo Google API.

![](/storage/oauth-cognito/5_5.png)

6. Giữ mặc định các thông số khác và chọn **Next**.

![](/storage/oauth-cognito/5_6.png)

7. Đặt tên cho _Identity pool_. Tiếp tục chọn **Next**.

![](/storage/oauth-cognito/5_7.png)

8. Kiểm tra lại các thông số đúng như mong muốn, chọn **Create Identity pool**.

![](/storage/oauth-cognito/5_8.png)

9. Tạo thành công Identity Pool.

![](/storage/oauth-cognito/5_9.png)

10. Đến trang giao diện [IAM](https://console.aws.amazon.com/iam) để cấu hình cho Identity pool.

Tìm đến Role được tạo theo Identity pool.

![](/storage/oauth-cognito/5_10.png)

11. Chọn **Add permissions**, chọn **Create inline policy**.

![](/storage/oauth-cognito/5_11.png)

12. Cấp quyền hạn cho Identity pool.

- Người dùng được xác thực qua Identity pool sẽ có thể liệt kê và lấy ra các object trong bucket được cung cấp.
- Thay YOUR_PRIVATE_BUCKET_ARN với ARN của private bucket đã được tạo ở bước 2.2.
- Sau đó chọn **Next**, đặt tên Polcity và chọn **Create policy**

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

13. Thêm quyền hạn thành công.

![](/storage/oauth-cognito/5_15.png)

Vậy chúng ta đã hoàn tất tạo tất cả các tài nguyên cần thiết cho bài labs. Tiếp theo là tiết mục mọi người đều mong chờ, kiểm tra thử xem trang web của chúng ta có hoạt động đúng như mong muốn hay không.
