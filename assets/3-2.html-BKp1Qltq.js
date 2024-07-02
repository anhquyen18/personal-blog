import{_ as n,a as i,b as t,c as s,d as a,e as c,f as o,g as l,h as e,i as r,j as h,k as p,l as g,m as u,n as d,o as m,p as y,q as k,r as v}from"./iam-2_19-BR5lff1T.js";import{_ as C}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as B,o as f,e as q}from"./app-BDQXVHS9.js";const A={},b=q('<h3 id="gioi-thieu" tabindex="-1"><a class="header-anchor" href="#gioi-thieu"><span>Giới thiệu</span></a></h3><p>IAM Policy (Chính sách IAM) trong AWS là các tài liệu JSON định nghĩa các quyền truy cập và hạn chế truy cập cho người dùng, nhóm và vai trò trong AWS. Các chính sách này quy định những hành động nào được phép hoặc không được phép thực hiện trên các tài nguyên AWS cụ thể.</p><ul><li><p>IAM Policy là công cụ quan trọng để quản lý bảo mật và kiểm soát quyền truy cập trong AWS. Các chính sách này xác định:</p><ul><li>Ai (user, user group, role) có thể thực hiện hành động.</li><li>Cái gì (các hành động API của AWS) mà họ có thể thực hiện.</li><li>Trên đâu (các tài nguyên AWS cụ thể) mà các hành động đó có thể được thực hiện.</li><li>Khi nào và Điều kiện nào (các điều kiện cụ thể) áp dụng cho hành động.</li></ul></li><li><p>Các loại IAM Policy:</p><ul><li><strong>Managed Policies</strong>: Chính sách được quản lý bởi AWS hoặc do bạn tạo và quản lý. <ul><li>AWS Managed Policies: Được tạo và quản lý bởi AWS, cập nhật tự động khi có các tính năng mới hoặc thay đổi trong dịch vụ AWS.</li><li>Customer Managed Policies: Được tạo và quản lý bởi bạn. Cho phép tùy chỉnh chi tiết quyền truy cập.</li></ul></li><li><strong>Inline Policies</strong>: Chính sách được gắn trực tiếp vào một người dùng, nhóm hoặc vai trò. Các chính sách này không thể được tái sử dụng và phải được quản lý từng cái riêng lẻ. Không khuyến khích sử dụng trừ khi có mục đích rõ ràng.</li></ul></li><li><p>Một số lưu ý khi sử dụng IAM Policy</p></li></ul><ol><li><p>Nguyên tắc quyền hạn tối thiểu (Principle of Least Privilege):</p><ul><li>Chỉ cấp những quyền tối thiểu cần thiết để thực hiện công việc.</li><li>Tránh gán quyền quá rộng, chẳng hạn như &quot;*&quot; cho tất cả các hành động hoặc tài nguyên.</li></ul></li><li><p>Sử dụng AWS Managed Policies nếu có thể:</p><ul><li>Sử dụng các chính sách được quản lý bởi AWS để đảm bảo bạn luôn có các quyền cập nhật và bảo mật nhất.</li></ul></li><li><p>Kiểm tra và cập nhật chính sách định kỳ:</p><ul><li>Đảm bảo các chính sách luôn phù hợp với các yêu cầu công việc hiện tại và không có quyền không cần thiết.</li></ul></li><li><p>Sử dụng điều kiện (Conditions):</p><ul><li>Sử dụng các điều kiện trong chính sách để kiểm soát chi tiết quyền truy cập dựa trên các thuộc tính như địa chỉ IP, thời gian, MFA, v.v.</li></ul></li><li><p>Giám sát và ghi nhật ký:</p><ul><li>Sử dụng AWS CloudTrail và AWS Config để giám sát và ghi nhật ký các hoạt động và thay đổi liên quan đến IAM.</li></ul></li></ol><h3 id="tao-customer-managed-policy" tabindex="-1"><a class="header-anchor" href="#tao-customer-managed-policy"><span>Tạo Customer managed Policy</span></a></h3><p>Chúng ta sẽ tạo một Policy mà gán vào user group <em>DevGroup</em>. Và tiến hành thử nghiệm tương tác với tài nguyên AWS với Policy và Người dùng chúng ta đã tạo.</p><p>Tạo policy chỉ được tạo EC2 ở khu vực <em>Singapore (ap-southeast-1)</em>, và chỉ được tạo những instance có type bắt đầu bằng <em>t2.</em> để tránh việc tạo những instance quá mức cần thiết dẫn đến phí phải thanh toán cho dịch vụ quá cao.</p><ol><li>Ở giao diện <a href="https://console.aws.amazon.com/iam" target="_blank" rel="noopener noreferrer">AWS IAM</a>, chọn <strong>Policies</strong>, chọn <strong>Create policy</strong>.</li></ol><figure><img src="'+n+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>Chọn <strong>JSON</strong>. Thêm code vào Policy editor.</li></ol><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">  &quot;Version&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;2012-10-17&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">  &quot;Statement&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Effect&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;Allow&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;ec2:RunInstances&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;ec2:CreateTags&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Resource&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;*&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Condition&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">        &quot;StringEquals&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">          &quot;aws:RequestedRegion&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;ap-southeast-1&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Effect&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;Deny&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;ec2:RunInstances&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Resource&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;arn:aws:ec2:*:*:instance/*&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Condition&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">        &quot;StringNotLike&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">          &quot;ec2:InstanceType&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;t2.*&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Effect&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;Allow&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;ec2:Describe*&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Resource&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Statement 1: Chúng ta cần tạo tag cùng với ec2.</p><ul><li>Effect: Allow – Cho phép hành động.</li><li>Action: ec2:RunInstances, ec2:CreateTags – Chỉ cho phép chạy instances của EC2 và tạo tag.</li><li>Resource: * – Áp dụng cho tất cả các tài nguyên.</li><li>Condition: <ul><li>StringEquals – Sử dụng điều kiện để giới hạn chỉ được thực hiện ở khu vực ap-southeast-1 (Singapore).</li></ul></li></ul></li><li><p>Statement 2:</p><ul><li>Effect: Deny – Từ chối hành động.</li><li>Action: ec2:RunInstances.</li><li>Resource: arn:aws:ec2:ap-southeast-1::instance/* – Giới hạn tài nguyên áp dụng là các instances.</li><li>Condition: StringNotLike: Giới hạn chỉ cho phép các loại instance bắt đầu bằng t2.</li></ul></li><li><p>Statement 3:</p><ul><li>Effect: Allow – Cho phép các hành động.</li><li>Action: Cho phép một số mô tả (describe) để người dùng có thể xem các thông tin cần thiết để tạo EC2 instances, bao gồm các vùng, hình ảnh, key pairs, security group, subnets, và VPCs.</li><li>Resource: * – Áp dụng cho tất cả các tài nguyên.</li></ul></li></ul><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>Kéo xuống và chọn <strong>Next</strong>.</li></ol><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>Nhập tên Policy <em>OurAccessControl</em>.</li></ol><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>Xem khả năng quyền hạn của code json chúng ta vừa thêm vào, sau đó chọn <strong>Create policy</strong>.</li></ol><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>Tạo Policy thành công.</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="gan-policy-vao-group-user" tabindex="-1"><a class="header-anchor" href="#gan-policy-vao-group-user"><span>Gắn Policy vào group user</span></a></h3><ul><li><p>Chúng ta sẽ gắn vào group thay vì trực tiếp vào user vì các lí do sau:</p><ul><li><strong>Dễ dàng quản lý và bảo trì</strong>: Khi các policies được gán cho nhóm, bạn chỉ cần cập nhật nhóm đó khi cần thay đổi quyền. Tất cả các user thuộc nhóm đó sẽ tự động nhận được các quyền cập nhật mà không cần cấu hình từng user một.</li><li><strong>Tính nhất quán</strong>: Đảm bảo rằng tất cả các user trong cùng một nhóm có các quyền nhất quán. Điều này giúp tránh nhầm lẫn và lỗi khi cấu hình quyền cho các user cá nhân.</li><li><strong>Tiết kiệm thời gian</strong>: Gán các policies vào nhóm giúp giảm thiểu thời gian cần thiết để quản lý quyền truy cập. Bạn chỉ cần gán user vào nhóm thay vì thiết lập các quyền cho từng user riêng lẻ.</li><li><strong>Khả năng mở rộng</strong>: Khi tổ chức của bạn phát triển, bạn có thể dễ dàng thêm user vào các nhóm có sẵn mà không cần phải cấu hình lại quyền cho từng user mới.</li><li><strong>Tăng cường bảo mật</strong>: Quản lý các policies thông qua nhóm giúp dễ dàng kiểm soát và theo dõi các quyền truy cập hơn. Điều này giúp đảm bảo rằng các quyền được quản lý một cách có hệ thống và tuân thủ các chính sách bảo mật của tổ chức.</li><li><strong>Phân quyền và trách nhiệm</strong>: Cho phép các quản trị viên phân quyền quản lý các nhóm khác nhau cho các bộ phận hoặc nhóm công việc khác nhau, tạo ra sự phân chia rõ ràng về trách nhiệm quản lý quyền truy cập.</li></ul></li></ul><ol><li>Ở giao diện IAM, chọn <em>User groups</em>, chọn <em>DevGroup</em>.</li></ol><p>AWS cảnh báo chúng ta chưa định nghĩa policy nào cho group.</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>Chuyển sang tab <strong>Permissions</strong>, chọn <strong>Add permissions</strong>, chọn <strong>Attach policies</strong>.</li></ol><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>Tìm kiếm Policy chúng ta đã tạo, chọn policiy sau đó chọn <strong>Attach policies</strong>.</li></ol><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>Thêm policy thành công.</li></ol><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="kiem-tra-kha-nang-truy-cap-ec2-cua-user" tabindex="-1"><a class="header-anchor" href="#kiem-tra-kha-nang-truy-cap-ec2-cua-user"><span>Kiểm tra khả năng truy cập EC2 của user.</span></a></h3><p>Đăng nhập vào tài khoản đã tạo, sau đó truy cập vào giao diện <a href="https://console.aws.amazon.com/ec2" target="_blank" rel="noopener noreferrer">EC2</a>, chúng ta sẽ thử tạo instance ở khu vực N. Virginia.</p><ol><li>Ở giao diện EC2, chọn <strong>Launch instances</strong>.</li></ol><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li><p>Set up EC2.</p><ul><li>Name and tags: <em>test-ec2</em>.</li><li>Instance type: <em>t2.micro</em>.</li><li>Key pair: <em>Proceed without a key pair</em>.</li><li>Network settings: Chọn <strong>Select existing security group</strong>, chọn <strong>default</strong>.</li><li>Mọi tham số còn lại để mặc định.</li><li>Chọn <strong>Launch instance</strong></li></ul></li></ol><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>Không thể tạo EC2.</li></ol><p>Thông báo thể hiện lỗi, chúng ta không thể tạo được tài nguyên EC2 trên khu vực <em>us-east-1 (N. Virginia)</em>. Chọn <strong>Cancle</strong>.</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>Chuyển vùng sang Singapore và chọn <strong>Launch instance</strong>.</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li><p>Set up EC2.</p><ul><li>Name and tags: <em>test-ec2</em>.</li><li>Instance type: <em>t3.nano</em>.</li><li>Key pair: <em>Proceed without a key pair</em>.</li><li>Network settings: Chọn <strong>Select existing security group</strong>, chọn <strong>default</strong>.</li><li>Mọi tham số còn lại để mặc định.</li><li>Chọn <strong>Launch instance</strong></li></ul></li></ol><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>Chúng ta gặp lỗi tương tự ở bước trước.</li></ol><p>Do chúng ta đã chọn instance type <em>t3.nano</em>, loại nằm ngoài điều kiện policy.</p><p>Chọn <strong>Edit instance config</strong>.</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="7"><li>Chọn lại instance type <em>t2.micro</em> hoặc type t2 khác tuỳ bạn, sau đó chọn <strong>Launch instance</strong>.</li></ol><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="8"><li>Tạo instance thành công. Chúng ta sẽ sử dụng instance này cho ví dụ tiếp theo.</li></ol><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Vậy là chúng ta đã học được cách hạn chế tài nguyên EC2 được tạo bởi user, các bạn có thể thay EC2 bằng những tài nguyên khác của AWS sao cho phù hợp với thực tế.</p>',55),E=[b];function S(_,F){return f(),B("div",null,E)}const I=C(A,[["render",S],["__file","3-2.html.vue"]]),M=JSON.parse('{"path":"/posts/AWS/prevent-security-risks/access-control/3-2.html","title":"3.2 Khám phá IAM Policy","lang":"vi-VN","frontmatter":{"date":"2024-06-24T00:00:00.000Z","article":false,"title":"3.2 Khám phá IAM Policy","lastUpdated":true,"category":["AWS"],"tag":["Security","Organization","IAM","EventBridge","Budget","Guide"],"description":"Giới thiệu IAM Policy (Chính sách IAM) trong AWS là các tài liệu JSON định nghĩa các quyền truy cập và hạn chế truy cập cho người dùng, nhóm và vai trò trong AWS. Các chính sách...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://www.linkedin.com/in/anh-quyen-tran-188394216/personal-blog/en/posts/AWS/prevent-security-risks/access-control/3-2.html"}],["meta",{"property":"og:url","content":"https://www.linkedin.com/in/anh-quyen-tran-188394216/personal-blog/posts/AWS/prevent-security-risks/access-control/3-2.html"}],["meta",{"property":"og:site_name","content":"Trần Anh Quyền"}],["meta",{"property":"og:title","content":"3.2 Khám phá IAM Policy"}],["meta",{"property":"og:description","content":"Giới thiệu IAM Policy (Chính sách IAM) trong AWS là các tài liệu JSON định nghĩa các quyền truy cập và hạn chế truy cập cho người dùng, nhóm và vai trò trong AWS. Các chính sách..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://www.linkedin.com/in/anh-quyen-tran-188394216/personal-blog/storage/prevent-security-risks/iam-2_1.png"}],["meta",{"property":"og:locale","content":"vi-VN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-02T08:40:48.000Z"}],["meta",{"property":"article:author","content":"Tran Anh Quyen"}],["meta",{"property":"article:tag","content":"Security"}],["meta",{"property":"article:tag","content":"Organization"}],["meta",{"property":"article:tag","content":"IAM"}],["meta",{"property":"article:tag","content":"EventBridge"}],["meta",{"property":"article:tag","content":"Budget"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:published_time","content":"2024-06-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-02T08:40:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"3.2 Khám phá IAM Policy\\",\\"description\\":\\"Giới thiệu IAM Policy (Chính sách IAM) trong AWS là các tài liệu JSON định nghĩa các quyền truy cập và hạn chế truy cập cho người dùng, nhóm và vai trò trong AWS. Các chính sách...\\"}"]]},"headers":[{"level":3,"title":"Giới thiệu","slug":"gioi-thieu","link":"#gioi-thieu","children":[]},{"level":3,"title":"Tạo Customer managed Policy","slug":"tao-customer-managed-policy","link":"#tao-customer-managed-policy","children":[]},{"level":3,"title":"Gắn Policy vào group user","slug":"gan-policy-vao-group-user","link":"#gan-policy-vao-group-user","children":[]},{"level":3,"title":"Kiểm tra khả năng truy cập EC2 của user.","slug":"kiem-tra-kha-nang-truy-cap-ec2-cua-user","link":"#kiem-tra-kha-nang-truy-cap-ec2-cua-user","children":[]}],"git":{"createdTime":1719909648000,"updatedTime":1719909648000,"contributors":[{"name":"Pai18","email":"anhquyen18092000@gmail.com","commits":1}]},"readingTime":{"minutes":6.35,"words":1905},"filePathRelative":"posts/AWS/prevent-security-risks/access-control/3-2.md","localizedDate":"24 tháng 6 năm 2024","excerpt":"<h3>Giới thiệu</h3>\\n<p>IAM Policy (Chính sách IAM) trong AWS là các tài liệu JSON định nghĩa các quyền truy cập và hạn chế truy cập cho người dùng, nhóm và vai trò trong AWS. Các chính sách này quy định những hành động nào được phép hoặc không được phép thực hiện trên các tài nguyên AWS cụ thể.</p>\\n","autoDesc":true}');export{I as comp,M as data};