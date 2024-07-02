---
date: 2024-06-26
title: 1. Giới thiệu
article: false
prev: false
next: /posts/AWS/prevent-security-risks/budget/2-1
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

Workshop được lấy cảm hứng từ bài viết của anh _Nguyen Phong_ trong group Facebook _AWS Study Group_.

KHÔNG BIẾT -> KHÔNG LÀM -> KHÔNG MẮC SAI LẦM

Gần đây mình được biết có vài vụ gây high cost trên AWS từ bạn bè đồng nghiệp lên tới hàng tỷ đồng gây ảnh hưởng đến uy tín công ty và khách hàng. Có vụ thì lộ access key lên public github repo để hacker chiếm dụng. Có vụ thì sử dụng Cloudwatch Log Subcription Filter thế nào đấy mà mấy vài tỷ trong vài tiếng. Còn có vụ thì setting sai, sử dụng service không hiểu rõ lên tới vài chục triệu trong 3 ngày.

Đây chỉ là một số ít các vụ việc đến từ bạn bè, đồng nghiệp mình.

Bản thân vài năm trước đây cũng đã từng Push source khách có access key lên public github repo. Sử dụng high cost resource (lambda provisioned concurrency, ECS) bay màu 700tr trong 1 tháng.

Nhân đây mình xin chia sẻ một số cách thức cơ bản để bảo vệ tài khoản AWS của bạn, hoặc nếu bạn đang làm việc trên môi trường KH hãy để ý đến những việc sau:

1. CHÍNH SÁCH QUẢN LÝ TÀI KHOẢN AWS

- Sử dụng Multi account cho một số lý do sau:
  - **Quan điểm về Governance**: Tách biệt rõ ràng giữa production và môi trường khác.
  - **Quan điểm thanh toán**: Quản lý thanh toán cho từng account.
  - **Quan điểm operation**: Giảm thiểu phạm vi tác động của những thay đổi và nới lỏng AWS service quota limits.
- Tham khảo: Best Practices for Organizational Units with AWS Organizations:
  https://aws.amazon.com/.../best-practices-for.../

2. HUMAN ACCESS CONTROL

- Setting MFA cho root user, không dùng root user cho công việc hằng ngày trừ những trường hợp setting trên level account.
- IAM user được tạo cho từng user, không sử dụng common IAM user.
- Setting password policy đủ mạnh (Tối thiểu 14 ký tự, bao gồm chữ HOA, thường, số và ký tự đặc biệt).
- Bắt buộc setting thêm MFA.
- Thời hạn change password là 90 ngày.
- Không thể sử dụng lại mật khẩu mới giống với bất kỳ mật khẩu nào trong số bốn mật khẩu gần đây nhất được sử dụng trước đó.
- Ngay sau khi được cấp IAM user, cần change password ở lần đăng nhập đầu tiên.
- Có cơ chế phát hiện và Notification khi root account login (EventBridge + SNS).
- IAM policy cho IAM user / IAM group cần có quyền tối thiểu.

3. PROGRAM ACCESS CONTROL

- Kiểm soát quyền truy cập giữa các tài nguyên AWS.
- Tất cả aws resource đều được bảo vệ bởi AWS IAM policy. Do đó, hãy thiết kế AWS IAM policy phù hợp với **nguyên tắc quyền tối thiểu** (không cấp dư quyền).
- Kiểm soát truy cập dựa trên Organizations SCP.
- Kiểm soát ngăn chặn tạo resource ở những Region không mong muốn (ví dụ chỉ cho phép tạo resource ở 2 Region Tokyo (ap-northeast-1) và N. Virginia(us-east-1)).
- Ngăn chặn việc tạo những resource high cost ngoài phạm vi dự án ví dụ như: Glue, EMR, Redshift...
- Ngăn chặn tạo EC2 hay DB với Instance type ngoài approve list (những instance type đắt tiền).
- Ngăn chặn việc thay đổi setting đến một số service như AWS CloudTrail, AWS Config, Amazon GuardDuty, Budget v.v.

4. SỬ DỤNG ACCESS KEY

- Không sử dụng access key cho root account.
- Sử dụng access key với quyền tối thiểu.
- Sử dụng IAM Role thay cho Access key khi có thể. (ví dụ IAM role cho EC2, IAM cho Lambda v.v).
- Sử dụng access key khác nhau cho từng application.
- Xóa các access key không sử dụng.
- Không lưu access key trong source code.
- Có cơ chế để notification khi leak key lên github (AWS sẽ gửi mail cảnh báo).

5. CONTROLL BUDGET

- Setting daily Budget và Monthly budget để nhận cảnh báo bất thường thông qua SNS.
- Tùy theo kiến trúc dự án của bạn mà hãy cân nhắc thêm đến các yêu tố sau:

  - Application security
  - Network Security
  - Data security
  - Device security
  - SaaS security

Trên đây là một số lưu ý mình đưa ra, các bạn cảm thấy cần lưu ý thêm những điểm nào hãy cùng chia sẻ nhé!

HIỂU RÕ -> LÀM -> HẠN CHẾ RỦI RO

Bây giờ hãy cùng mình tìm hiểu sâu hơn một số điểm đáng chú ý mà anh _Nguyen Phong_ đã đề cập ở bài viết. Nào, cùng bắt đầu thôi!!

- Ngăn chặn người dùng xoá ec2 với lambda (Automated EC2 Control using Lambda and Events), gửi thông báo đến email là thằng nào đã cố xoá.
