---
date: 2024-06-24
title: 3. CloudFront
# shortTitle: 1. Giới thiệu
article: false
prev: /posts/AWS/oauth-cognito/part2/2-2
lastUpdated: true
category:
  - AWS
tag:
  - Cognito
  - S3
  - IAM
  - Guide
---

Amazon CloudFront là một dịch vụ mạng phân phối nội dung (Content Delivery Network - CDN) của Amazon Web Services (AWS). CloudFront cung cấp nội dung, bao gồm dữ liệu, video, ứng dụng, và API, tới người dùng trên toàn cầu với độ trễ thấp và tốc độ cao.

### Một số điểm nổi bật của CloudFront:

1. Phân phối toàn cầu: CloudFront có mạng lưới các điểm hiện diện (Edge Locations) trên khắp thế giới, giúp phân phối nội dung nhanh chóng tới người dùng, bất kể họ ở đâu.

2. Tích hợp với AWS: CloudFront dễ dàng tích hợp với các dịch vụ AWS khác như Amazon S3, Elastic Load Balancing, và Amazon EC2, giúp quản lý và triển khai nội dung hiệu quả.

3. Bảo mật: CloudFront hỗ trợ nhiều tính năng bảo mật như SSL/TLS để mã hóa dữ liệu, AWS Shield Standard để bảo vệ chống lại các cuộc tấn công DDoS, và tích hợp với AWS WAF để bảo vệ ứng dụng web.

4. Hiệu suất cao: Với cơ chế cache mạnh mẽ, CloudFront giảm tải cho các máy chủ gốc và đảm bảo nội dung được cung cấp nhanh chóng từ các vị trí gần người dùng nhất.

5. Tính linh hoạt: CloudFront cho phép tùy chỉnh hành vi phân phối nội dung thông qua các tính năng như Lambda@Edge, giúp thực hiện các thao tác mã hoá, xác thực, hoặc thay đổi yêu cầu và phản hồi trên các Edge Locations.

Trong phạm vi workshop này chúng ta sẽ không tập trung giải thích chi tiết về CloudFront. Để tìm hiểu thêm về CloudFront bạn có thể truy cập tại [đây](https://aws.amazon.com/cloudfront/)

### Tạo CloudFront cho App Bucket

1. Truy cập vào giao diện AWS CloudFront tại [đây](https://console.aws.amazon.com/cloudfront/), chọn **Create a CloudFront distribution**.

![](/storage/oauth-cognito/3_1.png)

2. Origin domain, chọn app-bucket đã tạo ở bước 2.1.

![](/storage/oauth-cognito/3_2.png)

3. Sau đó chọn **Use website end point**.

![](/storage/oauth-cognito/3_3.png)

4. Web Application Firewall (WAF), chọn **Enable security protections**

![](/storage/oauth-cognito/3_4.png)

5. Các thông số còn lại để mặc định, chọn **Create distribution**.

![](/storage/oauth-cognito/3_5.png)

6. Tạo CloudFront thành công.

![](/storage/oauth-cognito/3_6.png)

CloudFront sẽ mất một vài phút để _deploy_ (mình khoảng 10p). Khi hoàn tất, ở _Last modified_ hiện thời gian hoàn thành cụ thể.

![](/storage/oauth-cognito/3_7.png)

Kiểm tra hoạt động của CloudFront.

![](/storage/oauth-cognito/3_8.png)

Vậy là CloudFront đã chuyển hướng đến App Bucket thành công. Tiếp theo chúng ta cùng đến với món chính nào!
