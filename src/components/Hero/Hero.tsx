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
    // Preload images
    bannerImages.forEach((src) => {
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
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {bannerImages.map((img, index) => (
            <div 
              key={index}
              className="hero-slide"
              style={{ backgroundImage: `url(${img})` }}
            />
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
          <span className="hero-tagline">Kiến Tạo Di Sản - Khởi Đầu Thịnh Vượng</span>
          <h1>Vạn Xuân Heritage – Đón Đầu Vận Hội Tại "Thủ Phủ Công Nghiệp" Phổ Yên</h1>
          <p>Dự án đất nền & Shophouse đẳng cấp bậc nhất Thái Nguyên, tọa lạc tại tâm điểm vùng kinh tế trọng điểm phía Bắc.</p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Nhận Bảng Giá Gốc</a>
            <a href="#location" className="btn-outline">Vị Trí Kim Cương</a>
          </div>
        </motion.div>
      </div>

      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-num">700ha</span>
          <span className="stat-label">KCN Yên Bình Sát Cạnh</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">100k+</span>
          <span className="stat-label">Chuyên Gia & Kỹ Sư</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">VĐ 5</span>
          <span className="stat-label">Vùng Thủ Đô Kết Nối</span>
        </div>
      </div>
    </section>
  );
});

export default Hero;
