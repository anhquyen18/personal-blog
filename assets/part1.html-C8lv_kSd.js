import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o,e as i}from"./app-BDQXVHS9.js";const n={},r=i('<p>The workshop was inspired by Mr. <em>Nguyen Phong</em>&#39;s post in the Facebook group <em>AWS Study Group</em>.</p><p>DON&#39;T KNOW -&gt; DON&#39;T DO -&gt; DON&#39;T MAKE MISTAKES</p><p>Recently, I learned that there were a few high cost cases on AWS from friends and colleagues amounting to billions of dong, affecting the reputation of the company and customers. In some cases, the access key was exposed on the public github repo for hackers to take advantage of. In some cases, using Cloudwatch Log Subscription Filter somehow cost several billion in a few hours. There are also cases where the settings were wrong and the service was used without understanding, amounting to tens of millions in 3 days.</p><p>These are just a few cases from my friends and colleagues.</p><p>A few years ago, I also pushed a client source with an access key to the public github repo. Using high cost resource (lambda provisioned concurrency, ECS) costs 700 million in 1 month.</p><p>By the way, I would like to share some basic ways to protect your AWS account, or if you are working in a customer environment, pay attention to the following:</p><ol><li>AWS ACCOUNT MANAGEMENT POLICY</li></ol><ul><li>Use Multi account for the following reasons <ul><li><strong>Perspective on Governance</strong>: Clear separation between production and other environments.</li><li><strong>Payment perspective</strong>: Manage payments for each account.</li><li><strong>Operational perspective</strong>: Minimize the impact of changes and relax AWS service quota limits.</li></ul></li><li>Reference: Best Practices for Organizational Units with AWS Organizations. https://aws.amazon.com/.../best-practices-for.../</li></ul><ol start="2"><li>HUMAN ACCESS CONTROL</li></ol><ul><li>Setting MFA for root user, do not use root user for daily work except in cases of setting on account level.</li><li>IAM users are created for each user, do not use common IAM users.</li><li>Set a strong enough password policy (Minimum 14 characters, including uppercase and lowercase letters, numbers and special characters).</li><li>Additional MFA settings are required.</li><li>The time limit for changing password is 90 days.</li><li>A new password that is the same as any of the four most recent passwords used cannot be reused.</li><li>Immediately after being granted an IAM user, you need to change your password the first time you log in.</li><li>There is a detection and Notification mechanism when root account login (EventBridge + SNS).</li><li>IAM policy for IAM user / IAM group requires minimum permissions.</li></ul><ol start="3"><li>PROGRAM ACCESS CONTROL</li></ol><ul><li>Control access between AWS resources</li><li>All AWS resources are protected by AWS IAM policy. Therefore, your AWS IAM policy should be designed in according to the <strong>principle of least privilege</strong> (do not grant excess permissions).</li><li>Access control based on Organizations SCP.</li><li>Control and prevent resource creation in unwanted Regions (for example, only allow resource creation in 2 Regions Tokyo (ap-northeast-1) and N. Virginia (us-east-1))</li><li>Prevent the creation of high cost resources outside the project scope such as: Glue, EMR, Redshift...</li><li>Prevent creating EC2 or DB with Instance types outside the approval list (expensive instance types).</li><li>Prevent changing settings to some services such as AWS CloudTrail, AWS Config, Amazon GuardDuty, Budget, etc.</li></ul><ol start="4"><li>USE ACCESS KEY</li></ol><ul><li>Do not use access key for root account.</li><li>Use access key with minimal permissions.</li><li>Use IAM Role instead of Access key when possible. (eg IAM role for EC2, IAM for Lambda etc).</li><li>Use different access keys for each application.</li><li>Delete unused access keys.</li><li>Do not save access key in source code.</li><li>There is a mechanism to notify when keys are leaked to github (AWS will send a warning email).</li></ul><ol start="5"><li>CONTROLL BUDGET</li></ol><ul><li><p>Set daily Budget and Monthly budget to receive unusual alerts via SNS.</p></li><li><p>Depending on the architecture of your project, consider the following factors:</p><ul><li>Application security</li><li>Network Security</li><li>Data security</li><li>Device security</li><li>SaaS security</li></ul></li></ul><p>Above are some notes I gave, if you feel you need to pay more attention, please share!</p><p>UNDERSTAND -&gt; DO -&gt; LIMIT RISK</p><p>Now let&#39;s dive deeper into some notable points that Mr. <em>Nguyen Phong</em> mentioned in the post. Let&#39;s get started!!</p>',19),s=[r];function a(l,c){return o(),t("div",null,s)}const h=e(n,[["render",a],["__file","part1.html.vue"]]),d=JSON.parse(`{"path":"/en/posts/AWS/prevent-security-risks/part1.html","title":"1. Introduction","lang":"en-US","frontmatter":{"date":"2024-06-26T00:00:00.000Z","title":"1. Introduction","article":false,"prev":false,"next":"/en/posts/AWS/prevent-security-risks/budget/2-1","lastUpdated":true,"category":["AWS"],"tag":["Security","Organization","IAM","EventBridge","Budget","Guide"],"description":"The workshop was inspired by Mr. Nguyen Phong's post in the Facebook group AWS Study Group. DON'T KNOW -> DON'T DO -> DON'T MAKE MISTAKES Recently, I learned that there were a f...","head":[["link",{"rel":"alternate","hreflang":"vi-vn","href":"https://www.linkedin.com/in/anh-quyen-tran-188394216/personal-blog/posts/AWS/prevent-security-risks/part1.html"}],["meta",{"property":"og:url","content":"https://www.linkedin.com/in/anh-quyen-tran-188394216/personal-blog/en/posts/AWS/prevent-security-risks/part1.html"}],["meta",{"property":"og:site_name","content":"Tran Anh Quyen"}],["meta",{"property":"og:title","content":"1. Introduction"}],["meta",{"property":"og:description","content":"The workshop was inspired by Mr. Nguyen Phong's post in the Facebook group AWS Study Group. DON'T KNOW -> DON'T DO -> DON'T MAKE MISTAKES Recently, I learned that there were a f..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"vi-VN"}],["meta",{"property":"og:updated_time","content":"2024-07-02T08:40:48.000Z"}],["meta",{"property":"article:author","content":"Tran Anh Quyen"}],["meta",{"property":"article:tag","content":"Security"}],["meta",{"property":"article:tag","content":"Organization"}],["meta",{"property":"article:tag","content":"IAM"}],["meta",{"property":"article:tag","content":"EventBridge"}],["meta",{"property":"article:tag","content":"Budget"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:published_time","content":"2024-06-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-02T08:40:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"1. Introduction\\",\\"description\\":\\"The workshop was inspired by Mr. Nguyen Phong's post in the Facebook group AWS Study Group. DON'T KNOW -> DON'T DO -> DON'T MAKE MISTAKES Recently, I learned that there were a f...\\"}"]]},"headers":[],"git":{"createdTime":1719909648000,"updatedTime":1719909648000,"contributors":[{"name":"Pai18","email":"anhquyen18092000@gmail.com","commits":1}]},"readingTime":{"minutes":2.27,"words":680},"filePathRelative":"en/posts/AWS/prevent-security-risks/part1.md","localizedDate":"June 26, 2024","excerpt":"<p>The workshop was inspired by Mr. <em>Nguyen Phong</em>'s post in the Facebook group <em>AWS Study Group</em>.</p>\\n<p>DON'T KNOW -&gt; DON'T DO -&gt; DON'T MAKE MISTAKES</p>\\n<p>Recently, I learned that there were a few high cost cases on AWS from friends and colleagues amounting to billions of dong, affecting the reputation of the company and customers. In some cases, the access key was exposed on the public github repo for hackers to take advantage of. In some cases, using Cloudwatch Log Subscription Filter somehow cost several billion in a few hours. There are also cases where the settings were wrong and the service was used without understanding, amounting to tens of millions in 3 days.</p>","autoDesc":true}`);export{h as comp,d as data};