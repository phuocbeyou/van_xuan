import { motion } from 'framer-motion';
import { useState, useEffect, memo } from 'react';
import './Hero.css';

const bannerImages = [
  '/images/banner.webp',
  '/images/banner_2.webp',
  '/images/masterplan.webp'
];

const Hero = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Only preload the first two images to reduce initial load lag
    bannerImages.slice(0, 2).forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-slider">
        <motion.div 
          className="hero-slider-inner"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ 
            duration: 0.8, 
            ease: [0.4, 0, 0.2, 1],
            // Use hardware acceleration
            type: "tween"
          }}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform"
          }}
        >
          {bannerImages.map((img, index) => (
            <div key={index} className="hero-slide">
              <img 
                src={img} 
                alt={`Banner ${index + 1}`} 
                loading={index === 0 ? "eager" : "lazy"}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tagline">Kiến tạo di sản - Khởi đầu thịnh vượng</span>
          <h1>Vạn Xuân Heritage – Đón đầu vận hội tại "Thủ phủ công nghiệp" Phổ Yên</h1>
          <p>Dự án đất nền & Shophouse đẳng cấp bậc nhất Thái Nguyên, tọa lạc tại tâm điểm vùng kinh tế trọng điểm phía Bắc.</p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Nhận bảng giá gốc</a>
            <a href="#location" className="btn-outline">Vị trí kim cương</a>
          </div>
        </motion.div>
      </div>

      <div className="hero-stats">
        <div className="stat-promo">
          <span className="promo-text">Mở bán giai đoạn 1, giá chỉ từ <strong>1,6 tỷ/ lô</strong></span>
          <span className="promo-divider">|</span>
          <span className="promo-sub">Sổ đỏ sở hữu lâu dài - Pháp lý minh bạch</span>
        </div>
      </div>
    </section>
  );
});

export default Hero;
