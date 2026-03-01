import { motion } from 'framer-motion';
import { useState, memo } from 'react';
import ImageLightbox from '../Lightbox/ImageLightbox';
import './PropertyGrid.css';

const properties = [
  {
    id: 1,
    image: '/images/ha_tang.webp',
    title: 'Hệ thống tiện ích nội khu',
    description: 'Trạm Y tế, Trường mầm non, Tiểu học Tiên Phong 1, Công viên Lý Nam Đế, Trung tâm thương mại, Chợ Cầu Gồ...',
    type: 'Tiện ích',
    size: '9.98ha ; với 257 lô',
    price: 'Sổ đỏ từng lô'
  },
  {
    id: 2,
    image: '/images/masterplan.webp',
    title: 'Quy hoạch chi tiết 1/500',
    type: 'Mặt bằng',
    size: 'Toàn khu',
    price: ''
  },
  {
    id: 3,
    image: '/images/banner_2.webp',
    title: 'Phối cảnh dự án',
    type: 'Sản phẩm',
    size: '100m² - 150m²',
    price: 'Liên hệ: 0838 585 939'
  }
];

const PropertyGrid = memo(() => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="masterplan" className="section property-grid">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Hệ thống tiện ích</span>
          <h2>Tiện ích nội khu đẳng cấp</h2>
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
                {prop.description && <p className="card-desc">{prop.description}</p>}
                <div className="card-info">
                  <span>Diện tích: <strong>{prop.size}</strong></span>
                  <span className="price">{prop.price}</span>
                </div>
                <button className="btn-text">Xem Chi Tiết &rarr;</button>
              </div>
            </motion.div>
          ))}
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
