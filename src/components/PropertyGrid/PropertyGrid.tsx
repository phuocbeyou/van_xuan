import { motion } from 'framer-motion';
import { useState, memo } from 'react';
import ImageLightbox from '../Lightbox/ImageLightbox';
import './PropertyGrid.css';

const properties = [
  {
    id: 1,
    image: '/images/ha_tang.webp',
    title: 'Hạ Tầng Đồng Bộ',
    type: 'Tổng Quan',
    size: '12.5 ha',
    price: 'Sổ đỏ từng lô'
  },
  {
    id: 2,
    image: '/images/masterplan.webp',
    title: 'Quy Hoạch Chi Tiết 1/500',
    type: 'Mặt Bằng',
    size: 'Toàn khu',
    price: 'Hỗ trợ vay 70%'
  },
  {
    id: 3,
    image: '/images/banner_2.webp',
    title: 'Phối Cảnh Shophouse',
    type: 'Sản Phẩm',
    size: '100m² - 150m²',
    price: 'Giá: Liên hệ'
  }
];

const PropertyGrid = memo(() => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="masterplan" className="section property-grid">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Sản Phẩm Cốt Lõi</span>
          <h2>Phân Lô & Mặt Bằng Tổng Thể</h2>
          <div className="accent-line"></div>
        </div>

        <div className="grid-layout">
          {properties.map((prop, index) => (
            <motion.div 
              key={prop.id}
              className="property-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage({ src: prop.image, alt: prop.title })}
              style={{ cursor: 'zoom-in' }}
            >
              <div className="card-image">
                <img src={prop.image} alt={prop.title} loading="lazy" decoding="async" />
                <span className="property-type">{prop.type}</span>
              </div>
              <div className="card-content">
                <h3>{prop.title}</h3>
                <div className="card-info">
                  <span>Diện tích: <strong>{prop.size}</strong></span>
                  <span className="price">{prop.price}</span>
                </div>
                <button className="btn-text">Xem Chi Tiết &rarr;</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid-cta text-center" style={{ marginTop: '60px' }}>
          <a href="#" className="btn-primary">Tải Sơ Đồ Mặt Bằng Độ Nét Cao</a>
        </div>
      </div>

      <ImageLightbox 
        src={selectedImage?.src || ''} 
        alt={selectedImage?.alt || ''}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
});

export default PropertyGrid;
