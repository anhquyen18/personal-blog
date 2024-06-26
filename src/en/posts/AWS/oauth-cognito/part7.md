---
date: 2024-06-24
title: 7. Clean up
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

Most of the services used in this lab are free as long as your AWS Account is within the AWS _Free Tier_ plan. But to be neat and avoid incurring costs later, we clean up the services we have created.

- Cognito Identity pool:

  - Select the Identity pool of the lab then click **Delete**.
  - Confirm deletion, enter Identity pool name and click **Delete**.

- IAM Role:

  - Find the Role created in the ID pool (Cognito_IDPool_Role).
  - Select role and click **Delete**, enter the role name to confirm then click **Delete**.

- 2 S3 Bucket:

  - Select the bucket you want to delete, click **Empty**, enter _permanently delete_ to confirm then click **Empty**.
  - Click **Exit**, select the bucket you want to delete, click **Delete**, enter the bucket name to confirm then click **Delete bucket**.
  - The remaining bucket is processed similarly.

- CloudFront:

  - Select CloudFront of the lab, click **Disable**.
  - When the status is _Disabled_, we select and _Delete_ CloudFront.

- Google API:

  - Select the Project you want to delete, click **Delete**.

  ![](/storage/oauth-cognito/7_1.png)

  - Enter Project ID, then click **SHUT DOWN ANYWAY**

  ![](/storage/oauth-cognito/7_2.png)

  - Project will be deleted in the near future.

  ![](/storage/oauth-cognito/7_3.png)

### See you at the next workshops!!
