---
date: 2024-06-24
title: 6. Kiểm thử ứng dụng
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

### Cập nhật App Bucket.

Trước khi truy cập trang ứng dụng của chúng ta, chúng ta cần cung cấp _key_ cho file _scỉpts.js_ và _index.html_

- Chỉnh sửa file.
  - Cập nhật _Identity pool ID_.
  - Cập nhật _Bucket name_.
  - Cập nhật _Google Client ID_.

![](/storage/oauth-cognito/6_1.png)

![](/storage/oauth-cognito/6_2.png)

```js
IdentityPoolId: 'REPLACE_ME_COGNITO_IDENTITY_POOL_ID', // THAY THẾ BẰNG POOL ID CỦA BẠN
// <=>
IdentityPoolId: 'ap-southeast-1:dfe0ceb8-5b1a-4671-a30c-d8f6f3e91240',


Bucket: 'REPLACE_ME_NAME_OF_PRIVATE_BUCKET', // THAY BẰNG BUCKET NAME CỦA PRIVATE BUCKET
// <=>
Bucket: 'somethings-secrect-aq1809',
```

```html
<div data-client_id="REPLACE_ME_GOOGLE_APP_CLIENT_ID"></div>
<!-- <=> -->
<div data-client_id="964014230663-akaoguhf91mc6t0ub4pgi6d91v03lo7h.apps.googleusercontent.com"></div>
```

- Vào app-bucket, tải lên file js và html vừa được cập nhật.

![](/storage/oauth-cognito/6_3.png)

![](/storage/oauth-cognito/6_4.png)

Hoàn thành việc cập nhật App Bucket

### Kiểm thử

- Truy cập trang web thông qua URL được CloudFront cung cấp.

![](/storage/oauth-cognito/6_5.png)

- Đăng nhập tài khoản Google mà bạn muốn xác thực.

![](/storage/oauth-cognito/6_6.png)

- Yeahhh!!! Những hình ảnh của bé Chopper đã hiển thị. Vậy là ứng dụng của chúng ta đã hoạt động mà không gặp trở ngại gì.

![](/storage/oauth-cognito/6_7.png)

- Các bạn có thể mở dev console (F12 với MS Edge) để xem logs quá trình xử lí của ứng dụng.

![](/storage/oauth-cognito/6_8.png)

## Lời kết

Vậy là chúng ta đã cũng nhau thực hiện thành công bài lab này, tuy nó có thể hơi đơn giản nhưng cũng đủ thú vị để chúng ta có thể vận dụng và củng cố lại kiến thức đã học được phải không nào.

Mình rất vui khi chúng ta có thể cùng đi đến cuối bài lab, nếu có vấn đề hay trở ngại trong quá trình thực hiện, bạn có thể liên hệ mình qua các thông tin trên trang blog này. Chúng ta sẽ cùng cố gắng!
