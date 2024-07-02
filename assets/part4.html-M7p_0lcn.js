import{_ as n}from"./iam-4_1-CMJthmQJ.js";import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as i,e as c}from"./app-BDQXVHS9.js";const o={},a=c(`<h3 id="gioi-thieu" tabindex="-1"><a class="header-anchor" href="#gioi-thieu"><span>Giới thiệu</span></a></h3><p>Service Control Policies (SCPs) là một tính năng của AWS Organizations. SCPs cho phép bạn quản lý tập trung và kiểm soát quyền truy cập vào tài nguyên AWS trên tất cả các tài khoản trong một tổ chức AWS Organizations. SCPs giúp bạn xác định các hành động nào được phép hoặc bị từ chối đối với các tài khoản con trong tổ chức của bạn.</p><p>Công dụng của SCPs:</p><ol><li><strong>Quản lý tập trung</strong>: SCPs cung cấp một cách quản lý quyền truy cập tập trung cho tất cả các tài khoản con trong tổ chức AWS. Điều này giúp dễ dàng duy trì và kiểm soát các chính sách bảo mật trên toàn tổ chức.</li><li><strong>Bảo mật tăng cường</strong>: SCPs giúp tăng cường bảo mật bằng cách đảm bảo rằng các tài khoản con chỉ có thể thực hiện các hành động được phép. Điều này giảm thiểu rủi ro từ việc người dùng hoặc ứng dụng thực hiện các hành động không mong muốn hoặc nguy hiểm.</li><li><strong>Tuân thủ quy định</strong>: SCPs giúp tổ chức tuân thủ các quy định và chính sách nội bộ hoặc bên ngoài bằng cách kiểm soát chặt chẽ các quyền truy cập và hành động có thể thực hiện.</li><li><strong>Giảm thiểu lỗi cấu hình</strong>: Bằng cách sử dụng SCPs, bạn có thể giảm thiểu rủi ro từ các lỗi cấu hình do người dùng vô ý hoặc không hiểu rõ về quyền truy cập.</li></ol><p>Cách sử dụng SCPs trong thực tế</p><ul><li>Ví dụ SCPs:</li></ul><ol><li>Ngăn chặn Terminate EC2 instances:</li></ol><p>Bạn có thể tạo SCP cho phép tất cả hành động nhưng từ chối duy nhất hành động <strong>TermniateInstances</strong> đối với tất cả các tài khoản con:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">  &quot;Version&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;2012-10-17&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">  &quot;Statement&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Effect&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;Allow&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;*&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Resource&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Effect&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;Deny&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;ec2:TerminateInstances&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Resource&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Áp dụng SCP này sẽ ngăn chặn mọi người dùng trong các tài khoản con chấm dứt các EC2 instances.</p><ol start="2"><li>Hạn chế quyền truy cập S3:</li></ol><p>Giả sử bạn muốn giới hạn quyền truy cập vào các bucket S3 chỉ để đọc (read-only):</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">  &quot;Version&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;2012-10-17&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">  &quot;Statement&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Effect&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;Allow&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;s3:GetObject&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;s3:ListBucket&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Resource&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Effect&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;Deny&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;s3:DeleteObject&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;s3:PutObject&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Resource&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SCP này sẽ cho phép các hành động đọc nhưng từ chối các hành động ghi và xóa.</p><h3 id="scps-va-cac-chinh-sach-policy-khac-trong-aws" tabindex="-1"><a class="header-anchor" href="#scps-va-cac-chinh-sach-policy-khac-trong-aws"><span>SCPs và các chính sách (Policy) khác trong AWS</span></a></h3><p>SCPs ảnh hưởng đến những gì các tài khoản trong tổ chức có thể làm với các dịch vụ và tài nguyên của AWS. Cách SCPs tương tác với các chính sách dịch vụ khác như IAM policies và resource-based policies rất quan trọng để đảm bảo cấu hình bảo mật chính xác. Dưới đây là một mô tả về cách SCPs tương tác với các loại chính sách khác trong AWS.</p><ol><li><p>Service Control Policies (SCPs)</p><p>SCPs áp dụng ở cấp độ tổ chức và giới hạn những gì các tài khoản trong tổ chức có thể làm. SCPs <em><strong>không cấp quyền</strong></em>, chúng chỉ hạn chế quyền mà các tài khoản trong tổ chức có thể sử dụng. Nếu một hành động bị chặn bởi SCP, thì dù IAM policies hay resource-based policies cho phép hành động đó, hành động vẫn bị chặn.</p></li><li><p>IAM Policies</p><p>IAM Policies được gán cho người dùng, nhóm, hoặc roles trong tài khoản và quản lý quyền truy cập chi tiết đến các tài nguyên AWS. IAM policies cấp quyền cụ thể cho người dùng hoặc dịch vụ để thực hiện các hành động nhất định trên các tài nguyên cụ thể.</p></li><li><p>Resource-Based Policies</p><p>Resource-Based Policies là các chính sách gắn trực tiếp vào tài nguyên AWS, chẳng hạn như S3 bucket policies hay SNS topic policies. Các chính sách này xác định ai (account hoặc IAM entity) có thể truy cập tài nguyên và những hành động nào họ có thể thực hiện.</p></li></ol><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p><strong>SCPs và IAM Policies</strong>:</p><ul><li><strong>Giới hạn quyền</strong>: SCPs đặt giới hạn trên quyền IAM. Nếu SCP không cho phép một hành động, thì hành động đó không thể thực hiện được ngay cả khi IAM policy cho phép.</li><li><strong>Hợp nhất quyền hạn</strong>: Để một hành động được thực hiện, cả SCP và IAM policy đều phải cho phép hành động đó. Quyền thực tế là giao của quyền hạn SCP và IAM policy.</li><li>VD: Nếu SCP chỉ cho phép s3:ListBucket, nhưng IAM policy cho phép s3:ListBucket và s3:PutObject, thì người dùng chỉ có thể thực hiện s3:ListBucket.</li></ul></li><li><p><strong>SCPs và Resource-Based Policies</strong>:</p><ul><li><strong>Resource-based policies cần phải tuân theo SCPs</strong>: Tương tự như IAM policies, các hành động được xác định trong resource-based policies phải tuân theo SCPs. Nếu SCP cấm một hành động, action đó không thể được thực hiện ngay cả khi resource-based policy cho phép.</li><li><strong>Kiểm soát toàn diện</strong>: SCPs có thể kiểm soát quyền truy cập vào tài nguyên từ tất cả các tài khoản trong tổ chức. Resource-based policies chỉ kiểm soát quyền truy cập vào tài nguyên từ các tài khoản hoặc người dùng cụ thể.</li><li>VD: Nếu SCP chặn s3:PutObject, thì không ai trong tổ chức có thể đặt đối tượng vào bucket, ngay cả khi bucket policy cho phép.</li></ul></li><li><p><strong>SCPs và AWS Organizations</strong>:</p><ul><li><strong>SCPs áp dụng cho tất cả tài khoản</strong>: SCPs áp dụng cho tất cả các tài khoản trong AWS Organization, bao gồm cả tài khoản quản lý (management account). Điều này có thể được cấu hình để kiểm soát quyền truy cập và hành động trên tất cả các tài khoản.</li></ul></li></ul><p>SCPs trong AWS Organizations cung cấp một lớp kiểm soát quyền truy cập ở cấp độ tổ chức, làm việc cùng với IAM policies và resource-based policies để quản lý quyền truy cập và bảo mật tài nguyên AWS. SCPs <em><strong>không cấp quyền</strong></em> mà chỉ giới hạn quyền, và tất cả các hành động phải được phép bởi cả SCP và các chính sách khác để có thể thực hiện được.</p><h3 id="su-uu-tien-giua-cac-chinh-sach-trong-scps" tabindex="-1"><a class="header-anchor" href="#su-uu-tien-giua-cac-chinh-sach-trong-scps"><span>Sự ưu tiên giữa các chính sách trong SCPs</span></a></h3><p>Nguyên tắc áp dụng policy statements trong SCPs (Service Control Policies) trong AWS Organizations tương tự như cách áp dụng các policy trong IAM (Identity and Access Management). Dưới đây là một số điểm tương đồng:</p><ol><li><p><strong>Explicit Deny (Từ chối rõ ràng) ưu tiên hơn Allow (Cho phép)</strong>: Cả SCPs và IAM policies đều tuân theo nguyên tắc này. Nếu bất kỳ policy statement nào có Effect là Deny, hành động đó sẽ bị từ chối ngay lập tức, bất kể có các policy statement khác cho phép hành động đó.</p></li><li><p><strong>Implicit Deny (Từ chối ngầm định)</strong>: Nếu một hành động không được rõ ràng cho phép bởi một policy statement, nó sẽ bị từ chối ngầm định. Điều này có nghĩa là chỉ các hành động được rõ ràng cho phép mới được thực hiện.</p></li></ol>',23),e=[a];function l(h,r){return i(),t("div",null,e)}const d=s(o,[["render",l],["__file","part4.html.vue"]]),k=JSON.parse('{"path":"/posts/AWS/prevent-security-risks/part4.html","title":"4. Service Control Policies","lang":"vi-VN","frontmatter":{"date":"2024-06-24T00:00:00.000Z","article":false,"title":"4. Service Control Policies","prev":"/posts/AWS/prevent-security-risks/access-control/3-3","lastUpdated":true,"category":["AWS"],"tag":["Security","Organization","IAM","EventBridge","Budget","Guide"],"description":"Giới thiệu Service Control Policies (SCPs) là một tính năng của AWS Organizations. SCPs cho phép bạn quản lý tập trung và kiểm soát quyền truy cập vào tài nguyên AWS trên tất cả...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://www.linkedin.com/in/anh-quyen-tran-188394216/personal-blog/en/posts/AWS/prevent-security-risks/part4.html"}],["meta",{"property":"og:url","content":"https://www.linkedin.com/in/anh-quyen-tran-188394216/personal-blog/posts/AWS/prevent-security-risks/part4.html"}],["meta",{"property":"og:site_name","content":"Trần Anh Quyền"}],["meta",{"property":"og:title","content":"4. Service Control Policies"}],["meta",{"property":"og:description","content":"Giới thiệu Service Control Policies (SCPs) là một tính năng của AWS Organizations. SCPs cho phép bạn quản lý tập trung và kiểm soát quyền truy cập vào tài nguyên AWS trên tất cả..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://www.linkedin.com/in/anh-quyen-tran-188394216/personal-blog/storage/prevent-security-risks/iam-4_1.png"}],["meta",{"property":"og:locale","content":"vi-VN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-02T08:40:48.000Z"}],["meta",{"property":"article:author","content":"Tran Anh Quyen"}],["meta",{"property":"article:tag","content":"Security"}],["meta",{"property":"article:tag","content":"Organization"}],["meta",{"property":"article:tag","content":"IAM"}],["meta",{"property":"article:tag","content":"EventBridge"}],["meta",{"property":"article:tag","content":"Budget"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:published_time","content":"2024-06-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-02T08:40:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"4. Service Control Policies\\",\\"description\\":\\"Giới thiệu Service Control Policies (SCPs) là một tính năng của AWS Organizations. SCPs cho phép bạn quản lý tập trung và kiểm soát quyền truy cập vào tài nguyên AWS trên tất cả...\\"}"]]},"headers":[{"level":3,"title":"Giới thiệu","slug":"gioi-thieu","link":"#gioi-thieu","children":[]},{"level":3,"title":"SCPs và các chính sách (Policy) khác trong AWS","slug":"scps-va-cac-chinh-sach-policy-khac-trong-aws","link":"#scps-va-cac-chinh-sach-policy-khac-trong-aws","children":[]},{"level":3,"title":"Sự ưu tiên giữa các chính sách trong SCPs","slug":"su-uu-tien-giua-cac-chinh-sach-trong-scps","link":"#su-uu-tien-giua-cac-chinh-sach-trong-scps","children":[]}],"git":{"createdTime":1719909648000,"updatedTime":1719909648000,"contributors":[{"name":"Pai18","email":"anhquyen18092000@gmail.com","commits":1}]},"readingTime":{"minutes":5.2,"words":1561},"filePathRelative":"posts/AWS/prevent-security-risks/part4.md","localizedDate":"24 tháng 6 năm 2024","excerpt":"<h3>Giới thiệu</h3>\\n<p>Service Control Policies (SCPs) là một tính năng của AWS Organizations. SCPs cho phép bạn quản lý tập trung và kiểm soát quyền truy cập vào tài nguyên AWS trên tất cả các tài khoản trong một tổ chức AWS Organizations. SCPs giúp bạn xác định các hành động nào được phép hoặc bị từ chối đối với các tài khoản con trong tổ chức của bạn.</p>","autoDesc":true}');export{d as comp,k as data};
