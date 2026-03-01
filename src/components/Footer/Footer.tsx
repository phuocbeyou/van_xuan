import Logo from '../Logo/Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            {/* <img src="/images/logo_du_an.png" alt="Vạn Xuân Heritage" className="footer-logo" /> */}
            <p>Tâm Quê 369 là đơn vị phân phối uy tín, chuyên dòng sản phẩm đất nền và Shophouse tại các thủ phủ công nghiệp.</p>
            {/* <div className="social-links">
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Instagram size={18} /></a>
            </div> */}
          </div>

          <div className="footer-links">
            <h4>Dự án đang triển khai</h4>
            <ul>
              <li><a href="#">Vạn Xuân Heritage Phổ Yên</a></li>
              <li><a href="#">Dự án Thái Nguyên</a></li>
              <li><a href="#">Đất nền Bắc Giang</a></li>
              <li><a href="#">Shophouse Hà Nội</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Hỗ trợ khách hàng</h4>
            <ul>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Quy trình giao dịch</a></li>
              <li><a href="#contact">Đăng ký nhận bảng giá</a></li>
              <li><a href="#">Tư vấn trực tuyến 24/7</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-brand-logo">
          <Logo />
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vạn Xuân Heritage. Phân phối bởi Tâm Quê 369 Group.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
