import { motion } from 'framer-motion';
import { Plane, Truck, Building2 } from 'lucide-react';
import { useState, memo } from 'react';
import ImageLightbox from '../Lightbox/ImageLightbox';
import './Location.css';

const Location = memo(() => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const imageUrl = "/images/vi_tri_dac_dia.webp";

  return (
    <section id="location" className="section location">
      <div className="container">
        <div className="location-wrapper">
          <div className="location-content">
            <span className="subtitle">Vị trí kim cương</span>
            <h2>Tâm điểm kết nối hạ tầng</h2>
            <p>Vạn Xuân Heritage nằm tại Phổ Yên - Thái Nguyên, kết nối hoàn chỉnh qua Cao tốc Hà Nội – Thái Nguyên, Quốc lộ 3 và đường Vành đai 5 vùng Thủ đô.</p>
            
            <div className="location-points">
              <div className="location-point">
                <Truck className="point-icon" />
                <div>
                  <h4>Kết nối vùng</h4>
                  <p>Sát cạnh KCN Yên Bình (700ha), KCN Điềm Thụy (361ha), KCN Nam Phổ Yên.</p>
                </div>
              </div>
              <div className="location-point">
                <Plane className="point-icon" />
                <div>
                  <h4>Giao thông</h4>
                  <p>Chỉ mât 5 phút tới KCN Samsung, nút giao Yên Bình và chỉ mất 20 phút lái xe về tới Hà Nội.</p>
                </div>
              </div>
              <div className="location-point">
                <Building2 className="point-icon" />
                <div>
                  <h4>Hạ tầng</h4>
                  <p>Kết nối trực tiếp Cao tốc Hà Nội - Thái Nguyên và Vành đai 5 vùng Thủ đô.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="location-image" onClick={() => setIsLightboxOpen(true)} style={{ cursor: 'zoom-in' }}>
            <motion.img 
              src={imageUrl} 
              alt="Vị trí Vạn Xuân Heritage"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <ImageLightbox 
        src={imageUrl} 
        alt="Vị trí Vạn Xuân Heritage"
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </section>
  );
});

export default Location;
