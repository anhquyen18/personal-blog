---
date: 2024-06-27
# title: Things you should not do as a software engineer
title: Những điều không nên làm khi là kỹ sư phần mềm
article: true
# next: false
# prev: false
lastUpdated: true
category:
  - Career
tag:
  - Advice
---

<!-- more -->

**Không có gì là hoàn hảo**

1. Phát triển phần mềm là một quá trình lặp đi lặp lại: viết code, test, nhận phản hồi, refactor và lặp lại.

   - Phần mềm nên linh hoạt và dễ chỉnh sửa.
   - Tránh viết code quá cứng nhắc và phức tạp. Sự chuyên nghiệp khác với sự hoàn hảo; hãy tập trung vào việc đạt được kết quả tối ưu.

2. Đừng xin thêm thời gian để "refactor code".

   - Tái cấu trúc mã (refactor code) là quá trình tái tổ chức code mà không thay đổi nghiệp vụ.
   - Lập trình viên cần biết rằng phải refactor ngay sau khi triển khai tính năng. Tuy nhiên, chúng ta thường chỉ tập trung vào việc làm tính năng. Điều này làm cho code khó sửa, khó đọc, và bạn sẽ phải xin thêm thời gian để đập đi làm lại.
   - Hãy thêm task refactor vào quá trình phát triển tính năng.

3. Hiểu lầm về "legacy code".

   - Nhiều người nghĩ rằng legacy code là code cũ, nhưng thực tế không phải vậy. Theo Michael Feathers, legacy code là code không có test. Nếu thiếu test, bạn không thể refactor hoặc sửa nó.
   - Ví dụ, một dự án Next.js phiên bản cũ nhưng có test tốt vẫn là code có thể bảo trì tốt, không phải legacy code. Đừng chạy theo các công nghệ chỉ vì chúng mới và hấp dẫn.

4. Mù quáng "best practices".

   - Có rất nhiều best practices trong phát triển phần mềm như clean architecture, nguyên tắc SOLID, DRY, KISS, YAGNI, TDD, BDD, CI/CD, v.v. Chúng được phát minh với ý định tốt, nhưng không nên tuân theo mù quáng.

5. Tự lực cánh sinh

   - Tôi đã thấy nhiều lập trình viên trẻ cố gắng chứng tỏ kỹ năng giải quyết vấn đề của họ. Họ thường gặp khó khăn với các vấn đề đã được giải quyết trước đó. Đừng làm như vậy. Đừng phát minh lại bánh xe.
   - Những người tài giỏi nhất thế giới là những người đứng trên vai người khổng lồ.
   - Khi làm việc trong một nhóm, bạn sẽ nhận ra rằng có thể học hỏi rất nhiều từ đồng nghiệp có kinh nghiệm hơn. Họ là những "người khổng lồ" của bạn. Hãy học hỏi từ họ và đừng lãng phí thời gian.

6. Mất tự nhận thức khi vào trạng thái "flow"

   - Bạn đã bao giờ trải qua trạng thái "flow" chưa? Đó là khi bạn hoàn toàn đắm chìm vào công việc, cảm thấy tràn đầy năng lượng và tập trung. Là một lập trình viên, trạng thái "flow" khiến code như tự viết ra.
   - Nhưng hãy cẩn thận – bạn có thể đang "work hard not work smart". Tôi thường thấy mình làm quá phức tạp mọi thứ khi ở trong "flow". Ngay cả Robert C. Martin, tác giả của “Clean Code”, cũng đã cảm nhận mất năng suất khi ở trong trạng thái này.
   - Để chủ động phá vỡ trạng thái "flow", tôi khuyến nghị sử dụng kỹ thuật Pomodoro. Đây là một phương pháp quản lý thời gian, bạn làm việc trong 25 phút và nghỉ 5 phút. Nó giúp duy trì sự tập trung và tránh vô thức.

7. **Không vận động cơ thể**.

   - Làm kỹ sư phần mềm đòi hỏi ngồi trước máy tính hàng giờ, gõ phím và nhìn màn hình. Khi ở trong trạng thái "flow", chúng ta dễ quên đi sức khỏe. Nhưng hãy nhớ, sức khỏe là quan trọng nhất. Bộ não không thể hoạt động tốt nếu cơ thể không khỏe mạnh.
   - Hãy cố gắng vận động mỗi 30 phút. Đứng dậy, duỗi cơ thể, đi lại và uống nước.

8. Quên mất niềm vui khi trở thành lập trình viên.

   - Khi mới bắt đầu lập trình, tôi rất hào hứng giải quyết vấn đề, làm ra phần mềm hữu ích và học hỏi mỗi ngày.
     Nhưng theo thời gian, tôi bắt đầu quên mất niềm vui đó, tập trung vào "clean code", theo đuổi "best practices" và giải quyết "hard problems". Tôi không còn viết code cho riêng mình vì quá bận rộn với công việc. Sự sáng tạo của tôi đã đi đâu?
   - Hãy dành thời gian cho các dự án cá nhân (pet project), học hỏi điều mới và làm những điều thú vị. Tại nơi làm việc, hãy thảo luận với đồng nghiệp về công nghệ mới, dù không sử dụng trong dự án. Điều này giúp duy trì động lực và cảm hứng.

9. Là "coder" chứ không phải kỹ sư phần mềm.

   - Có sự khác biệt giữa "coder" và kỹ sư phần mềm. "Coder" chỉ viết code, trong khi kỹ sư phần mềm là người giải quyết vấn đề bằng code. Có hai lý do chính bạn không nên chỉ là một coder:
     "Coder" sẽ bị thay thế bởi AI trong tương lai (thực tế đang xảy ra).
   - Mọi người quan tâm đến cách bạn giải quyết vấn đề, không phải code của bạn.
     Hãy là người giải quyết vấn đề, hiểu vấn đề, tìm giải pháp tốt nhất và thực hiện bằng code. Đó là công việc của một kỹ sư phần mềm.

Nguyễn Nam Long - J2TEAM Community
