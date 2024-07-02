---
date: 2024-06-24
article: false
title: 4. Service Control Policies
prev: /posts/AWS/prevent-security-risks/access-control/3-3
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

### Giới thiệu

Service Control Policies (SCPs) là một tính năng của AWS Organizations. SCPs cho phép bạn quản lý tập trung và kiểm soát quyền truy cập vào tài nguyên AWS trên tất cả các tài khoản trong một tổ chức AWS Organizations. SCPs giúp bạn xác định các hành động nào được phép hoặc bị từ chối đối với các tài khoản con trong tổ chức của bạn.

Công dụng của SCPs:

1. **Quản lý tập trung**: SCPs cung cấp một cách quản lý quyền truy cập tập trung cho tất cả các tài khoản con trong tổ chức AWS. Điều này giúp dễ dàng duy trì và kiểm soát các chính sách bảo mật trên toàn tổ chức.
2. **Bảo mật tăng cường**: SCPs giúp tăng cường bảo mật bằng cách đảm bảo rằng các tài khoản con chỉ có thể thực hiện các hành động được phép. Điều này giảm thiểu rủi ro từ việc người dùng hoặc ứng dụng thực hiện các hành động không mong muốn hoặc nguy hiểm.
3. **Tuân thủ quy định**: SCPs giúp tổ chức tuân thủ các quy định và chính sách nội bộ hoặc bên ngoài bằng cách kiểm soát chặt chẽ các quyền truy cập và hành động có thể thực hiện.
4. **Giảm thiểu lỗi cấu hình**: Bằng cách sử dụng SCPs, bạn có thể giảm thiểu rủi ro từ các lỗi cấu hình do người dùng vô ý hoặc không hiểu rõ về quyền truy cập.

Cách sử dụng SCPs trong thực tế

- Ví dụ SCPs:

1. Ngăn chặn Terminate EC2 instances:

Bạn có thể tạo SCP cho phép tất cả hành động nhưng từ chối duy nhất hành động **TermniateInstances** đối với tất cả các tài khoản con:

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

Áp dụng SCP này sẽ ngăn chặn mọi người dùng trong các tài khoản con chấm dứt các EC2 instances.

2. Hạn chế quyền truy cập S3:

Giả sử bạn muốn giới hạn quyền truy cập vào các bucket S3 chỉ để đọc (read-only):

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

SCP này sẽ cho phép các hành động đọc nhưng từ chối các hành động ghi và xóa.

### SCPs và các chính sách (Policy) khác trong AWS

SCPs ảnh hưởng đến những gì các tài khoản trong tổ chức có thể làm với các dịch vụ và tài nguyên của AWS. Cách SCPs tương tác với các chính sách dịch vụ khác như IAM policies và resource-based policies rất quan trọng để đảm bảo cấu hình bảo mật chính xác. Dưới đây là một mô tả về cách SCPs tương tác với các loại chính sách khác trong AWS.

1. Service Control Policies (SCPs)

   SCPs áp dụng ở cấp độ tổ chức và giới hạn những gì các tài khoản trong tổ chức có thể làm. SCPs _**không cấp quyền**_, chúng chỉ hạn chế quyền mà các tài khoản trong tổ chức có thể sử dụng. Nếu một hành động bị chặn bởi SCP, thì dù IAM policies hay resource-based policies cho phép hành động đó, hành động vẫn bị chặn.

2. IAM Policies

   IAM Policies được gán cho người dùng, nhóm, hoặc roles trong tài khoản và quản lý quyền truy cập chi tiết đến các tài nguyên AWS. IAM policies cấp quyền cụ thể cho người dùng hoặc dịch vụ để thực hiện các hành động nhất định trên các tài nguyên cụ thể.

3. Resource-Based Policies

   Resource-Based Policies là các chính sách gắn trực tiếp vào tài nguyên AWS, chẳng hạn như S3 bucket policies hay SNS topic policies. Các chính sách này xác định ai (account hoặc IAM entity) có thể truy cập tài nguyên và những hành động nào họ có thể thực hiện.

![](/storage/prevent-security-risks/iam-4_1.png)

- **SCPs và IAM Policies**:

  - **Giới hạn quyền**: SCPs đặt giới hạn trên quyền IAM. Nếu SCP không cho phép một hành động, thì hành động đó không thể thực hiện được ngay cả khi IAM policy cho phép.
  - **Hợp nhất quyền hạn**: Để một hành động được thực hiện, cả SCP và IAM policy đều phải cho phép hành động đó. Quyền thực tế là giao của quyền hạn SCP và IAM policy.
  - VD: Nếu SCP chỉ cho phép s3:ListBucket, nhưng IAM policy cho phép s3:ListBucket và s3:PutObject, thì người dùng chỉ có thể thực hiện s3:ListBucket.

- **SCPs và Resource-Based Policies**:

  - **Resource-based policies cần phải tuân theo SCPs**: Tương tự như IAM policies, các hành động được xác định trong resource-based policies phải tuân theo SCPs. Nếu SCP cấm một hành động, action đó không thể được thực hiện ngay cả khi resource-based policy cho phép.
  - **Kiểm soát toàn diện**: SCPs có thể kiểm soát quyền truy cập vào tài nguyên từ tất cả các tài khoản trong tổ chức. Resource-based policies chỉ kiểm soát quyền truy cập vào tài nguyên từ các tài khoản hoặc người dùng cụ thể.
  - VD: Nếu SCP chặn s3:PutObject, thì không ai trong tổ chức có thể đặt đối tượng vào bucket, ngay cả khi bucket policy cho phép.

- **SCPs và AWS Organizations**:
  - **SCPs áp dụng cho tất cả tài khoản**: SCPs áp dụng cho tất cả các tài khoản trong AWS Organization, bao gồm cả tài khoản quản lý (management account). Điều này có thể được cấu hình để kiểm soát quyền truy cập và hành động trên tất cả các tài khoản.

SCPs trong AWS Organizations cung cấp một lớp kiểm soát quyền truy cập ở cấp độ tổ chức, làm việc cùng với IAM policies và resource-based policies để quản lý quyền truy cập và bảo mật tài nguyên AWS. SCPs _**không cấp quyền**_ mà chỉ giới hạn quyền, và tất cả các hành động phải được phép bởi cả SCP và các chính sách khác để có thể thực hiện được.

### Sự ưu tiên giữa các chính sách trong SCPs

Nguyên tắc áp dụng policy statements trong SCPs (Service Control Policies) trong AWS Organizations tương tự như cách áp dụng các policy trong IAM (Identity and Access Management). Dưới đây là một số điểm tương đồng:

1. **Explicit Deny (Từ chối rõ ràng) ưu tiên hơn Allow (Cho phép)**: Cả SCPs và IAM policies đều tuân theo nguyên tắc này. Nếu bất kỳ policy statement nào có Effect là Deny, hành động đó sẽ bị từ chối ngay lập tức, bất kể có các policy statement khác cho phép hành động đó.

2. **Implicit Deny (Từ chối ngầm định)**: Nếu một hành động không được rõ ràng cho phép bởi một policy statement, nó sẽ bị từ chối ngầm định. Điều này có nghĩa là chỉ các hành động được rõ ràng cho phép mới được thực hiện.
