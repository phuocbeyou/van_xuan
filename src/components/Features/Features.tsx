import { motion } from 'framer-motion';
import { Shield, MapPin, Zap, Heart } from 'lucide-react';
import { memo } from 'react';
import './Features.css';

const featuresList = [
  {
    icon: <MapPin size={32} />,
    title: "Cửa Ngõ Thủ Đô",
    description: "Tiếp giáp Hà Nội, trung tâm kinh tế vùng Trung du miền núi Bắc Bộ với hạ tầng giao thông đồng bộ."
  },
  {
    icon: <Zap size={32} />,
    title: "Nam Châm Hút FDI",
    description: "Phổ Yên luôn nằm trong top đầu cả nước về thu hút vốn đầu tư nước ngoài (FDI)."
  },
  {
    icon: <Shield size={32} />,
    title: "Thủ Phủ Samsung",
    description: "Nơi đặt nhà máy SEVT tạo động lực kinh tế khổng lồ và nhu cầu nhà ở thực từ hàng trăm nghìn chuyên gia."
  },
  {
    icon: <Heart size={32} />,
    title: "Vùng Tiềm Năng",
    description: "Dư địa tăng giá cực lớn khi Phổ Yên chính thức lên thành phố loại II và hạ tầng Vành đai 5 hoàn thiện."
  }
];

const Features = memo(() => {
  return (
    <section id="about" className="section features">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Tiềm Năng Dự Án</span>
          <h2>Tại Sao Nên Đầu Tư Phổ Yên?</h2>
          <div className="accent-line"></div>
        </div>

        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-card"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Features;
