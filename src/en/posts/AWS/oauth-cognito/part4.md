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

We will register for a Google API Key to be able to use OAuth for Amazon Cognito.

1. Sign in to [Google Cloud Platform (GCP)](https://console.cloud.google.com)

If you do not have a Google account, you need to register for an account to perform this step. Instructions for creating a Google account in [here](https://support.google.com/accounts/answer/27441?hl=en)

![](/storage/oauth-cognito/4_1.png)

2. Create a project.

- Chọn **Select a project**, sau đó chọn **NEW PROJECT**

![](/storage/oauth-cognito/4_2.png)

![](/storage/oauth-cognito/4_3.png)

- Enter the project name _aq-lab1809_ (or any name you want), then click **Create**.

![](/storage/oauth-cognito/4_4.png)

3. Genernate API key.

- In the search box, enter _API_, then select **APIs & Services**.

![](/storage/oauth-cognito/4_5.png)

- Click **Select a project**, then switch to the _OAuth consent screen_ tab.

Here we select _Exteral_ type, then click **Create**.

![](/storage/oauth-cognito/4_6.png)

- Parameter configuration.
  - App name: _aq-labs1809_
  - User support email: Your email.
  - Developer contact information: Your email.
  - Leave the remaining parameters as default.
  - After completing, click **SAVE AND CONTINUE**.

![](/storage/oauth-cognito/4_7.png)

![](/storage/oauth-cognito/4_8.png)

- Continue click **SAVE AND CONTINUE**.

![](/storage/oauth-cognito/4_9.png)

- Click **SAVE AND CONTINUE**.

![](/storage/oauth-cognito/4_10.png)

- Once completed, scroll down and click **BACK TO DASHBOARD**.

![](/storage/oauth-cognito/4_11.png)

- Switch to the _Credentials_ tab, click **CREATE CREDENTIALS**.

![](/storage/oauth-cognito/4_12.png)

- Select _OAuth client ID_.

![](/storage/oauth-cognito/4_13.png)

- Configure _OAuth client ID_.
  - Application type: Select _Web application_.
  - Name: _AQServerlessApp_
  - Authorized JavaScript origins: Click **+ Add URL**. We go back to the CloudFront we created earlier, copy the Domain name and then paste it into URLs 1, mine is _https://d39p5r2jq0ih57.cloudfront.net_
  - Finally, click **CREATE** to complete.

![](/storage/oauth-cognito/4_14.png)

![](/storage/oauth-cognito/4_15.png)

![](/storage/oauth-cognito/4_16.png)

- Created Credentials successfully. We will save _Client ID_ for use in the upcoming steps.

![](/storage/oauth-cognito/4_17.png)
