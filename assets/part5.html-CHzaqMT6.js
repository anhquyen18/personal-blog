import{_ as n,a as t,b as i,c as o,d as a,e as c,f as e,g as s,h as l,i as r,j as h,k as g,l as p,m as d,n as u}from"./5_15-Cy3DpGXs.js";import{_ as y}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as m,o as k,e as f}from"./app-BDQXVHS9.js";const A={},b=f('<p>Ở đây chúng ta sẽ tạo cấu hình Identity Pools và cấp quyền nhất định cho các tài khoản được xác thực qua Cognito API này.</p><h2 id="gioi-thieu-cognito-identity-pools" tabindex="-1"><a class="header-anchor" href="#gioi-thieu-cognito-identity-pools"><span>Giới thiệu Cognito Identity pools.</span></a></h2><p>Amazon Cognito Identity Pools, một phần của Amazon Cognito, cho phép bạn tạo và quản lý danh tính người dùng cho ứng dụng của mình. Với Identity Pools, bạn có thể cấp quyền truy cập tạm thời đến các dịch vụ AWS cho người dùng, bao gồm cả những người dùng đã đăng nhập và những người dùng ẩn danh.</p><p>Các điểm nổi bật của Identity Pools:</p><ol><li><p>Quản lý danh tính: Identity Pools giúp hợp nhất các danh tính từ nhiều nhà cung cấp như Facebook, Google, Amazon, và các nhà cung cấp SAML, hoặc sử dụng hệ thống xác thực của riêng bạn.</p></li><li><p>Truy cập tạm thời: Bạn có thể cấp quyền truy cập tạm thời và hạn chế cho người dùng để sử dụng các dịch vụ AWS như Amazon S3, DynamoDB, hoặc API Gateway.</p></li><li><p>Xác thực ẩn danh: Cho phép người dùng ẩn danh truy cập vào tài nguyên AWS với các quyền hạn chế, sau đó nâng cấp quyền truy cập khi họ đăng nhập.</p></li><li><p>Tích hợp dễ dàng: Identity Pools tích hợp tốt với các dịch vụ AWS khác, giúp bạn dễ dàng thiết lập và quản lý quyền truy cập.</p></li><li><p>Quản lý quyền chi tiết: Sử dụng chính sách IAM để xác định chi tiết quyền truy cập cho từng nhóm người dùng khác nhau dựa trên các thuộc tính danh tính.</p></li></ol><p>Amazon Cognito Identity Pools giúp bạn dễ dàng xác thực người dùng và quản lý quyền truy cập vào tài nguyên AWS, đảm bảo an toàn và linh hoạt trong việc xây dựng các ứng dụng hiện đại.</p><p>Bạn có thể tìm hiểu kĩ hơn về Cognito tại <a href="https://docs.aws.amazon.com/cognito/" target="_blank" rel="noopener noreferrer">đây</a></p><h2 id="tao-identity-pools" tabindex="-1"><a class="header-anchor" href="#tao-identity-pools"><span>Tạo Identity pools</span></a></h2><p>Truy cập giao diện Amazon Cognito tại <a href="https://console.aws.amazon.com/cognito" target="_blank" rel="noopener noreferrer">đây</a></p><ol><li>Trong giao diện Cognito, chọn <strong>Identity pools</strong> sau đó chọn <strong>Create identity pool</strong>.</li></ol><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>Loại user access chọn <strong>Authenticated access</strong></li></ol><ul><li>Authenticated Access: <ul><li>Người dùng phải đăng nhập thông qua OAuth hoặc User pool.</li><li>Người dùng đã xác thực được quyền truy cập chi tiết hơn và có các quyền cụ thể trong cá dịch vụ AWS thông qua IAM Policy.</li><li>Thích hợp cho các ứng dụng cần thông tin chi tiết và an toàn về người dùng, chẳng hạn như lưu trữ hồ sơ người dùng, truy cập dữ liệu cá nhân, hoặc thực hiện các hành động nhạy cảm.</li></ul></li><li>Guest Access. <ul><li>Người dùng không cần phải đăng nhập. Họ có thể truy cập vào tài nguyên mà không cần cung cấp thông tin danh tính. Được quản lí thông qua thông tin tạm thời cung cấp bởi Identity pools.</li><li>Quyền truy cập thường bị giới hạn và được cấu hình để chỉ cho phép những hành động không nhạy cảm hoặc ít quan trọng.</li><li>Thích hợp cho các ứng dụng cần cung cấp quyền truy cập nhanh và đơn giản, chẳng hạn như ứng dụng demo, quyền truy cập nội dung công khai, hoặc trải nghiệm người dùng ban đầu trước khi đăng ký.</li></ul></li></ul><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>Chọn <strong>Google</strong> cho nguồn xác thực. Sau đó <strong>Next</strong>.</li></ol><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>Chọn <strong>Create a new IAM role</strong>.</li></ol><ul><li>AWS sẽ tự động tạo một role có quyền truy cập các dịch vụ AWS cho chúng ta. <ul><li>Role name: <em>Cognito-IDPool-Role</em></li><li>Chọn <strong>Next</strong>.</li></ul></li></ul><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>Nhập <em>Client ID</em> ta có được từ bước tạo Google API.</li></ol><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>Giữ mặc định các thông số khác và chọn <strong>Next</strong>.</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="7"><li>Đặt tên cho <em>Identity pool</em>. Tiếp tục chọn <strong>Next</strong>.</li></ol><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="8"><li>Kiểm tra lại các thông số đúng như mong muốn, chọn <strong>Create Identity pool</strong>.</li></ol><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="9"><li>Tạo thành công Identity Pool.</li></ol><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="10"><li>Đến trang giao diện <a href="https://console.aws.amazon.com/iam" target="_blank" rel="noopener noreferrer">IAM</a> để cấu hình cho Identity pool.</li></ol><p>Tìm đến Role được tạo theo Identity pool.</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="11"><li>Chọn <strong>Add permissions</strong>, chọn <strong>Create inline policy</strong>.</li></ol><figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="12"><li>Cấp quyền hạn cho Identity pool.</li></ol><ul><li>Người dùng được xác thực qua Identity pool sẽ có thể liệt kê và lấy ra các object trong bucket được cung cấp.</li><li>Thay YOUR_PRIVATE_BUCKET_ARN với ARN của private bucket đã được tạo ở bước 2.2.</li><li>Sau đó chọn <strong>Next</strong>, đặt tên Polcity và chọn <strong>Create policy</strong></li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">  &quot;Version&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;2012-10-17&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">  &quot;Statement&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Action&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;s3:ListBucket&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;s3:GetObject&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Resource&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;YOUR_PRIVATE_BUCKET_ARN&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;YOUR_PRIVATE_BUCKET_ARN/*&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Effect&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;Allow&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#E06C75;">      &quot;Sid&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;ReadPrivateBucket&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="13"><li>Thêm quyền hạn thành công.</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Vậy chúng ta đã hoàn tất tạo tất cả các tài nguyên cần thiết cho bài labs. Tiếp theo là tiết mục mọi người đều mong chờ, kiểm tra thử xem trang web của chúng ta có hoạt động đúng như mong muốn hay không.</p>',43),v=[b];function C(q,_){return k(),m("div",null,v)}const P=y(A,[["render",C],["__file","part5.html.vue"]]),E=JSON.parse('{"path":"/posts/AWS/oauth-cognito/part5.html","title":"5. Cognito ID Pools","lang":"vi-VN","frontmatter":{"date":"2024-06-24T00:00:00.000Z","title":"5. Cognito ID Pools","article":false,"lastUpdated":true,"category":["AWS"],"tag":["Cognito","S3","IAM","Guide"],"description":"Ở đây chúng ta sẽ tạo cấu hình Identity Pools và cấp quyền nhất định cho các tài khoản được xác thực qua Cognito API này. Giới thiệu Cognito Identity pools. Amazon Cognito Ident...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://www.linkedin.com/in/anh-quyen-tran-188394216/personal-blog/en/posts/AWS/oauth-cognito/part5.html"}],["meta",{"property":"og:url","content":"https://www.linkedin.com/in/anh-quyen-tran-188394216/personal-blog/posts/AWS/oauth-cognito/part5.html"}],["meta",{"property":"og:site_name","content":"Trần Anh Quyền"}],["meta",{"property":"og:title","content":"5. Cognito ID Pools"}],["meta",{"property":"og:description","content":"Ở đây chúng ta sẽ tạo cấu hình Identity Pools và cấp quyền nhất định cho các tài khoản được xác thực qua Cognito API này. Giới thiệu Cognito Identity pools. Amazon Cognito Ident..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://www.linkedin.com/in/anh-quyen-tran-188394216/personal-blog/storage/oauth-cognito/5_1.png"}],["meta",{"property":"og:locale","content":"vi-VN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-26T02:18:33.000Z"}],["meta",{"property":"article:author","content":"Tran Anh Quyen"}],["meta",{"property":"article:tag","content":"Cognito"}],["meta",{"property":"article:tag","content":"S3"}],["meta",{"property":"article:tag","content":"IAM"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:published_time","content":"2024-06-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-26T02:18:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"5. Cognito ID Pools\\",\\"description\\":\\"Ở đây chúng ta sẽ tạo cấu hình Identity Pools và cấp quyền nhất định cho các tài khoản được xác thực qua Cognito API này. Giới thiệu Cognito Identity pools. Amazon Cognito Ident...\\"}"]]},"headers":[{"level":2,"title":"Giới thiệu Cognito Identity pools.","slug":"gioi-thieu-cognito-identity-pools","link":"#gioi-thieu-cognito-identity-pools","children":[]},{"level":2,"title":"Tạo Identity pools","slug":"tao-identity-pools","link":"#tao-identity-pools","children":[]}],"git":{"createdTime":1719368313000,"updatedTime":1719368313000,"contributors":[{"name":"Pai18","email":"anhquyen18092000@gmail.com","commits":1}]},"readingTime":{"minutes":3.71,"words":1112},"filePathRelative":"posts/AWS/oauth-cognito/part5.md","localizedDate":"24 tháng 6 năm 2024","excerpt":"<p>Ở đây chúng ta sẽ tạo cấu hình Identity Pools và cấp quyền nhất định cho các tài khoản được xác thực qua Cognito API này.</p>\\n<h2>Giới thiệu Cognito Identity pools.</h2>\\n<p>Amazon Cognito Identity Pools, một phần của Amazon Cognito, cho phép bạn tạo và quản lý danh tính người dùng cho ứng dụng của mình. Với Identity Pools, bạn có thể cấp quyền truy cập tạm thời đến các dịch vụ AWS cho người dùng, bao gồm cả những người dùng đã đăng nhập và những người dùng ẩn danh.</p>","autoDesc":true}');export{P as comp,E as data};