import { useState } from 'react';
import { Send, Zap, Heart, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã đăng ký! Chuyên viên từ Tâm Quê 369 Group sẽ liên hệ với bạn trong vòng 5 phút.');
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="subtitle">Ưu Đãi Đặc Biệt</span>
            <h2>Chính Sách Bán Hàng & Quà Tặng</h2>
            <p>Đăng ký ngay hôm nay để nhận thông tin bộ tài liệu dự án và các chính sách ưu đãi độc quyền từ chủ đầu tư.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Zap size={20} /></div>
                <div>
                  <h4>Chiết Khấu Thanh Toán</h4>
                  <p>Ưu đãi lên tới 5% khi thanh toán sớm 95% giá trị sản phẩm.</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Heart size={20} /></div>
                <div>
                  <h4>Hỗ Trợ Tài Chính</h4>
                  <p>Hỗ trợ lãi suất 0% trong vòng 12 tháng từ các ngân hàng đối tác.</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Tâm Quê 369 Group</h4>
                  <p>Đơn vị phân phối uy tín hàng đầu miền Bắc.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Họ và Tên</label>
                <input 
                  type="text" 
                  placeholder="Nguyễn Văn A" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Số Điện Thoại</label>
                  <input 
                    type="tel" 
                    placeholder="09xxx" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Email (Không bắt buộc)</label>
                  <input 
                    type="email" 
                    placeholder="example@gmail.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Lời nhắn</label>
                <textarea 
                  rows={4} 
                  placeholder="Tôi muốn nhận báo giá căn 2 phòng ngủ..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="btn-primary full-width">
                Gửi Yêu Cầu <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
