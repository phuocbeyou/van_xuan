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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const payload = {
        fullName: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message
      };

      const API_URL = 'https://script.google.com/macros/s/AKfycbyZcl_yF06lgNJucY6vJROqppt0KiIBCmAM2us37J9ZgwVIiWrOMn0VV9hjhV44WyVW/exec';
      
      // Use no-cors mode for Google Apps Script to bypass preflight issues 
      // when the endpoint doesn't support full CORS
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      alert('Cảm ơn bạn đã đăng ký! Chuyên viên từ Tâm Quê 369 sẽ liên hệ với bạn trong thời gian sớm nhất.');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Có lỗi xảy ra, vui lòng thử lại sau hoặc liên hệ Hotline.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="subtitle">Ưu đãi đặc biệt</span>
            <h2>Chính sách bán hàng & Quà tặng</h2>
            <p>Đăng ký ngay hôm nay để nhận thông tin bộ tài liệu dự án và các chính sách ưu đãi độc quyền từ chủ đầu tư.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Zap size={20} /></div>
                <div>
                  <h4>Chiết khấu thanh toán</h4>
                  <p>Ưu đãi lên tới 5% khi thanh toán sớm 95% giá trị sản phẩm.</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Heart size={20} /></div>
                <div>
                  <h4>Hỗ trợ tài chính</h4>
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
              <button 
                type="submit" 
                className="btn-primary full-width" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Đang gửi yêu cầu...' : 'Gửi yêu cầu'} {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
