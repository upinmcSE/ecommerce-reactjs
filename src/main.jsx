/**
 * 1: Axios là một thư viện JS được sử dụng để thực hiện các HTTp Request từ trình duyệt hoặc Node.Js Axios rất phổ biến trong 
 * việc tương tác với API vì nó cung cấp các tính năng mạnh mẽ và dễ sử dụng 
 * 
 * 2: Một số tính năng chính của Axios:
 * 
 *  - Gửi yêu cầu HTTP: Axios có thể gửi các loại HTTP request (GET POST ...) tới một máy chủ từ trình duyệt hoặc Node.Js để lấy 
 * dữ liệu hoặc gửi dữ liệu đi
 * 
 *  - Hỗ trợ Promises: Axios hoạt động dựa trên Promise, điều này giúp cho việc xử lý dữ liệu trả về và quản lý lỗi dễ dàng hơn. 
 * 
 *  - Tự động chuyển đổi dữ liệu JSON: Khi bạn gửi hoặc nhận dữ liệu dạng JSON, Axios sẽ tự động chuyển đổi dữ liệu mà không cần
 * bạn phải thao tác thủ công.
 * 
 *  - Quản lý request và response dễ dàng: Bạn có thể cấu hình các headers, thêm các tham số URL, cấu hình thời gian chờ (timeout)
 * và các tính năng khác một cách dễ dàng.
 * 
 *  - Interceptors (Ngắt yêu cầu và phản hồi): Axios hỗ trợ interceptors, cho phép bạn can thiệp vào quá trình trước khi gửi request
 * hoặc sau khi nhận response. Điều này rất hữu ích cho việc xử lý xác thực (auth) hoặc lỗi toàn cục.
 * 
 *  - Hỗ trợ tải tệp: Axios hỗ trợ cả việc tải lên và tải xuống các tệp tin, chẳng hạn như hình ảnh, video hoặc tài liệu.
 */


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
