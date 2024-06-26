---
date: 2024-06-24
title: 6. Test the application
article: false
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

Before accessing our application page, we need to provide _key_ for _scipts.js_ and _index.html_ files.

- Edit files.
  - Update _Identity pool ID_.
  - Update _Bucket name_.
  - Update _Google Client ID_.

![](/storage/oauth-cognito/6_1.png)

![](/storage/oauth-cognito/6_2.png)

```js
IdentityPoolId: 'REPLACE_ME_COGNITO_IDENTITY_POOL_ID', // REPLACE WITH YOUR ID POOL
// <=>
IdentityPoolId: 'ap-southeast-1:dfe0ceb8-5b1a-4671-a30c-d8f6f3e91240',


Bucket: 'REPLACE_ME_NAME_OF_PRIVATE_BUCKET', // REPLACE WITH BUCKET NAME OF THE PRIVATE BUCKET
// <=>
Bucket: 'somethings-secrect-aq1809',
```

```html
<div data-client_id="REPLACE_ME_GOOGLE_APP_CLIENT_ID"></div>
<!-- <=> -->
<div data-client_id="964014230663-akaoguhf91mc6t0ub4pgi6d91v03lo7h.apps.googleusercontent.com"></div>
```

- Go to app-bucket, upload the newly updated js and html files.

![](/storage/oauth-cognito/6_3.png)

![](/storage/oauth-cognito/6_4.png)

Completed updating App Bucket

### Testing

- Access the website via the URL provided by CloudFront.

![](/storage/oauth-cognito/6_5.png)

- Log in to the Google account you want to authenticate.

![](/storage/oauth-cognito/6_6.png)

- Yeahhh!!! The images of Chopper have shown up. Our application works without any problems.

![](/storage/oauth-cognito/6_7.png)

- You can open dev console (F12 with MS Edge) to see the application processing logs.

![](/storage/oauth-cognito/6_8.png)

## Final words

So we have successfully completed this lab together. Although it may be a bit simple, it is also interesting enough for us to apply and consolidate the knowledge we have learned, right?

I'm very happy that we can reach the end of the lab together. If you have any problems or obstacles during the implementation process, you can contact me through the information on this blog. We will try together!
