# Đồng bộ giao diện đa thiết bị

## Mục tiêu
Giữ nguyên phong cách cổ phong hiện tại nhưng bảo đảm mọi trang hiển thị cân đối, dễ đọc và không bị che trên máy tính, iPad và điện thoại.

## Thực hiện
- Điều chỉnh khung điều hướng: máy tính dùng thư khố thu gọn; iPad và điện thoại dùng nút mở menu để không chiếm chiều ngang nội dung.
- Cân lại màn hình video mở đầu theo chiều rộng và chiều cao thực tế; tiêu đề, câu dẫn, ấn triện và nút hồi ký luôn nằm trọn trong vùng nhìn thấy.
- Chuẩn hóa khoảng cách, cỡ chữ và chiều rộng phần giới thiệu trên tất cả trang.
- Chuyển các danh sách hồ sơ theo ba mức: hai cột trên màn hình rộng, một cột thoáng trên iPad dọc và điện thoại.
- Tối ưu phần hồi ký, hình ảnh và vật chứng để không quá lớn hoặc quá dày trên màn hình nhỏ.
- Kiểm tra toàn bộ 9 trang ở ba kích thước chuẩn, gồm menu mở/đóng, tràn ngang, chữ bị cắt và các nút thao tác.

## Chi tiết kỹ thuật
- Dời mốc hiển thị thanh thư khố cố định từ `md` lên màn hình lớn; iPad dùng menu phủ như điện thoại.
- Dùng các mốc bố cục nhất quán cho `sm`, `md`, `lg`; thêm giới hạn chiều cao theo `svh` cho phần mở đầu.
- Giữ nguyên nội dung, dữ liệu, màu sắc và font Playfair Display + Be Vietnam Pro.
