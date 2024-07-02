import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as i,e}from"./app-BDQXVHS9.js";const o={},c=e('<p>Workshop được lấy cảm hứng từ bài viết của anh <em>Nguyen Phong</em> trong group Facebook <em>AWS Study Group</em>.</p><p>KHÔNG BIẾT -&gt; KHÔNG LÀM -&gt; KHÔNG MẮC SAI LẦM</p><p>Gần đây mình được biết có vài vụ gây high cost trên AWS từ bạn bè đồng nghiệp lên tới hàng tỷ đồng gây ảnh hưởng đến uy tín công ty và khách hàng. Có vụ thì lộ access key lên public github repo để hacker chiếm dụng. Có vụ thì sử dụng Cloudwatch Log Subcription Filter thế nào đấy mà mấy vài tỷ trong vài tiếng. Còn có vụ thì setting sai, sử dụng service không hiểu rõ lên tới vài chục triệu trong 3 ngày.</p><p>Đây chỉ là một số ít các vụ việc đến từ bạn bè, đồng nghiệp mình.</p><p>Bản thân vài năm trước đây cũng đã từng Push source khách có access key lên public github repo. Sử dụng high cost resource (lambda provisioned concurrency, ECS) bay màu 700tr trong 1 tháng.</p><p>Nhân đây mình xin chia sẻ một số cách thức cơ bản để bảo vệ tài khoản AWS của bạn, hoặc nếu bạn đang làm việc trên môi trường KH hãy để ý đến những việc sau:</p><ol><li>CHÍNH SÁCH QUẢN LÝ TÀI KHOẢN AWS</li></ol><ul><li>Sử dụng Multi account cho một số lý do sau: <ul><li><strong>Quan điểm về Governance</strong>: Tách biệt rõ ràng giữa production và môi trường khác.</li><li><strong>Quan điểm thanh toán</strong>: Quản lý thanh toán cho từng account.</li><li><strong>Quan điểm operation</strong>: Giảm thiểu phạm vi tác động của những thay đổi và nới lỏng AWS service quota limits.</li></ul></li><li>Tham khảo: Best Practices for Organizational Units with AWS Organizations: https://aws.amazon.com/.../best-practices-for.../</li></ul><ol start="2"><li>HUMAN ACCESS CONTROL</li></ol><ul><li>Setting MFA cho root user, không dùng root user cho công việc hằng ngày trừ những trường hợp setting trên level account.</li><li>IAM user được tạo cho từng user, không sử dụng common IAM user.</li><li>Setting password policy đủ mạnh (Tối thiểu 14 ký tự, bao gồm chữ HOA, thường, số và ký tự đặc biệt).</li><li>Bắt buộc setting thêm MFA.</li><li>Thời hạn change password là 90 ngày.</li><li>Không thể sử dụng lại mật khẩu mới giống với bất kỳ mật khẩu nào trong số bốn mật khẩu gần đây nhất được sử dụng trước đó.</li><li>Ngay sau khi được cấp IAM user, cần change password ở lần đăng nhập đầu tiên.</li><li>Có cơ chế phát hiện và Notification khi root account login (EventBridge + SNS).</li><li>IAM policy cho IAM user / IAM group cần có quyền tối thiểu.</li></ul><ol start="3"><li>PROGRAM ACCESS CONTROL</li></ol><ul><li>Kiểm soát quyền truy cập giữa các tài nguyên AWS.</li><li>Tất cả aws resource đều được bảo vệ bởi AWS IAM policy. Do đó, hãy thiết kế AWS IAM policy phù hợp với <strong>nguyên tắc quyền tối thiểu</strong> (không cấp dư quyền).</li><li>Kiểm soát truy cập dựa trên Organizations SCP.</li><li>Kiểm soát ngăn chặn tạo resource ở những Region không mong muốn (ví dụ chỉ cho phép tạo resource ở 2 Region Tokyo (ap-northeast-1) và N. Virginia(us-east-1)).</li><li>Ngăn chặn việc tạo những resource high cost ngoài phạm vi dự án ví dụ như: Glue, EMR, Redshift...</li><li>Ngăn chặn tạo EC2 hay DB với Instance type ngoài approve list (những instance type đắt tiền).</li><li>Ngăn chặn việc thay đổi setting đến một số service như AWS CloudTrail, AWS Config, Amazon GuardDuty, Budget v.v.</li></ul><ol start="4"><li>SỬ DỤNG ACCESS KEY</li></ol><ul><li>Không sử dụng access key cho root account.</li><li>Sử dụng access key với quyền tối thiểu.</li><li>Sử dụng IAM Role thay cho Access key khi có thể. (ví dụ IAM role cho EC2, IAM cho Lambda v.v).</li><li>Sử dụng access key khác nhau cho từng application.</li><li>Xóa các access key không sử dụng.</li><li>Không lưu access key trong source code.</li><li>Có cơ chế để notification khi leak key lên github (AWS sẽ gửi mail cảnh báo).</li></ul><ol start="5"><li>CONTROLL BUDGET</li></ol><ul><li><p>Setting daily Budget và Monthly budget để nhận cảnh báo bất thường thông qua SNS.</p></li><li><p>Tùy theo kiến trúc dự án của bạn mà hãy cân nhắc thêm đến các yêu tố sau:</p><ul><li>Application security</li><li>Network Security</li><li>Data security</li><li>Device security</li><li>SaaS security</li></ul></li></ul><p>Trên đây là một số lưu ý mình đưa ra, các bạn cảm thấy cần lưu ý thêm những điểm nào hãy cùng chia sẻ nhé!</p><p>HIỂU RÕ -&gt; LÀM -&gt; HẠN CHẾ RỦI RO</p><p>Bây giờ hãy cùng mình tìm hiểu sâu hơn một số điểm đáng chú ý mà anh <em>Nguyen Phong</em> đã đề cập ở bài viết. Nào, cùng bắt đầu thôi!!</p><ul><li>Ngăn chặn người dùng xoá ec2 với lambda (Automated EC2 Control using Lambda and Events), gửi thông báo đến email là thằng nào đã cố xoá.</li></ul>',20),r=[c];function h(a,g){return i(),n("div",null,r)}const u=t(o,[["render",h],["__file","part1.html.vue"]]),p=JSON.parse('{"path":"/posts/AWS/prevent-security-risks/part1.html","title":"1. Giới thiệu","lang":"vi-VN","frontmatter":{"date":"2024-06-26T00:00:00.000Z","title":"1. Giới thiệu","article":false,"prev":false,"next":"/posts/AWS/prevent-security-risks/budget/2-1","lastUpdated":true,"category":["AWS"],"tag":["Security","Organization","IAM","EventBridge","Budget","Guide"],"description":"Workshop được lấy cảm hứng từ bài viết của anh Nguyen Phong trong group Facebook AWS Study Group. KHÔNG BIẾT -> KHÔNG LÀM -> KHÔNG MẮC SAI LẦM Gần đây mình được biết có vài vụ g...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://www.linkedin.com/in/anh-quyen-tran-188394216/personal-blog/en/posts/AWS/prevent-security-risks/part1.html"}],["meta",{"property":"og:url","content":"https://www.linkedin.com/in/anh-quyen-tran-188394216/personal-blog/posts/AWS/prevent-security-risks/part1.html"}],["meta",{"property":"og:site_name","content":"Trần Anh Quyền"}],["meta",{"property":"og:title","content":"1. Giới thiệu"}],["meta",{"property":"og:description","content":"Workshop được lấy cảm hứng từ bài viết của anh Nguyen Phong trong group Facebook AWS Study Group. KHÔNG BIẾT -> KHÔNG LÀM -> KHÔNG MẮC SAI LẦM Gần đây mình được biết có vài vụ g..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"vi-VN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-02T08:40:48.000Z"}],["meta",{"property":"article:author","content":"Tran Anh Quyen"}],["meta",{"property":"article:tag","content":"Security"}],["meta",{"property":"article:tag","content":"Organization"}],["meta",{"property":"article:tag","content":"IAM"}],["meta",{"property":"article:tag","content":"EventBridge"}],["meta",{"property":"article:tag","content":"Budget"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:published_time","content":"2024-06-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-02T08:40:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"1. Giới thiệu\\",\\"description\\":\\"Workshop được lấy cảm hứng từ bài viết của anh Nguyen Phong trong group Facebook AWS Study Group. KHÔNG BIẾT -> KHÔNG LÀM -> KHÔNG MẮC SAI LẦM Gần đây mình được biết có vài vụ g...\\"}"]]},"headers":[],"git":{"createdTime":1719909648000,"updatedTime":1719909648000,"contributors":[{"name":"Pai18","email":"anhquyen18092000@gmail.com","commits":1}]},"readingTime":{"minutes":3.41,"words":1024},"filePathRelative":"posts/AWS/prevent-security-risks/part1.md","localizedDate":"26 tháng 6 năm 2024","excerpt":"<p>Workshop được lấy cảm hứng từ bài viết của anh <em>Nguyen Phong</em> trong group Facebook <em>AWS Study Group</em>.</p>\\n<p>KHÔNG BIẾT -&gt; KHÔNG LÀM -&gt; KHÔNG MẮC SAI LẦM</p>\\n<p>Gần đây mình được biết có vài vụ gây high cost trên AWS từ bạn bè đồng nghiệp lên tới hàng tỷ đồng gây ảnh hưởng đến uy tín công ty và khách hàng. Có vụ thì lộ access key lên public github repo để hacker chiếm dụng. Có vụ thì sử dụng Cloudwatch Log Subcription Filter thế nào đấy mà mấy vài tỷ trong vài tiếng. Còn có vụ thì setting sai, sử dụng service không hiểu rõ lên tới vài chục triệu trong 3 ngày.</p>","autoDesc":true}');export{u as comp,p as data};