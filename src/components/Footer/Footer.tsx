import { Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            {/* <img src="/images/logo_du_an.png" alt="Vạn Xuân Heritage" className="footer-logo" /> */}
            <p>Tâm Quê 369 Group - Đơn vị phân phối bất động sản uy tín hàng đầu, chuyên dòng sản phẩm đất nền và Shophouse tại các thủ phủ công nghiệp.</p>
            <div className="social-links">
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Instagram size={18} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Dự Án Đang Triển Khai</h4>
            <ul>
              <li><a href="#">Vạn Xuân Heritage Phổ Yên</a></li>
              <li><a href="#">Dự án Thái Nguyên</a></li>
              <li><a href="#">Đất nền Bắc Giang</a></li>
              <li><a href="#">Shophouse Hà Nội</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Hỗ Trợ Khách Hàng</h4>
            <ul>
              <li><a href="#">Chính Sách Bảo Mật</a></li>
              <li><a href="#">Quy Trình Giao Dịch</a></li>
              <li><a href="#">Đăng ký Nhận Bảng Giá</a></li>
              <li><a href="#">Tư Vấn Trực Tuyến 24/7</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-logos">
          <img src="/images/logo_du_an.png" alt="Vạn Xuân Heritage" />
          <img src="/images/logo_369_group.png" alt="Tâm Quê 369 Group" />
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vạn Xuân Heritage. Phân phối bởi Tâm Quê 369 Group.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
