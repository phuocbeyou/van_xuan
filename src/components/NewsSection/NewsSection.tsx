import { motion } from 'framer-motion';
import { ExternalLink, Newspaper } from 'lucide-react';
import { memo } from 'react';
import './NewsSection.css';

const newsArticles = [
  {
    id: 1,
    source: "Báo Thái Nguyên",
    title: "Điểm mặt 'vùng trũng' đầu tư bất động sản tại thủ phủ công nghiệp phía Bắc",
    summary: "Thái Nguyên đang trở thành điểm đến hấp dẫn nhờ hạ tầng đồng bộ và sự bứt phá của các khu công nghiệp trọng điểm.",
    link: "https://baothainguyen.vn/thong-tin-quang-cao/202602/diem-mat-vung-trung-dau-tu-bat-dong-san-tai-thu-phu-cong-nghiep-phia-bac-8464dac/",
    image: "https://baothainguyen.vn/file/e7837c027f6ecd14017ffa4e5f2a0e34/022026/cong-nghiep-1_20260207185820.jpg?width=1800",
    date: "02/2026"
  },
  {
    id: 2,
    source: "Báo Xây Dựng",
    title: "Bất động sản phía Nam Thái Nguyên: Vùng trũng giá dần sôi động nhờ hạ tầng đồng bộ",
    summary: "Sự phát triển mạnh mẽ của hạ tầng giao thông kết nối vùng đã thúc đẩy thị trường bất động sản phía Nam Thái Nguyên khởi sắc.",
    link: "https://batdongsan.baoxaydung.vn/bat-dong-san-phia-nam-thai-nguyen-vung-trung-gia-dan-soi-dong-nho-ha-tang-dong-bo-192260204091738525.htm",
    image: "https://baogiaothong.mediacdn.vn/603483875699699712/2026/2/3/z5761964000106b5f8ffe3eab0594c694c2f8fc3247791-17701402858702062123138.jpg",
    date: "02/2026"
  },
  {
    id: 3,
    source: "Báo Thái Nguyên",
    title: "Vạn Xuân Heritage – Khai thông thương mại và mang đậm giá trị tinh thần",
    summary: "Dự án không chỉ là nơi an cư lý tưởng mà còn là biểu tượng của sự phồn vinh và phát triển bền vững tại Phổ Yên.",
    link: "https://baothainguyen.vn/thong-tin-quang-cao/thong-tin-nha---dat-thai-nguyen/202602/van-xuan-heritage-khai-thong-thuong-mai-va-mang-dam-gia-tri-tinh-than-07c5b3c/",
    image: "https://baothainguyen.vn/file/e7837c027f6ecd14017ffa4e5f2a0e34/022026/gen-h-van-xuan-heritage-1_20260203114307.jpg?width=1800",
    date: "02/2026"
  }
];

const NewsSection = memo(() => {
  return (
    <section className="section news-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Tin tức thị trường</span>
          <h2>Tiềm năng qua góc nhìn báo chí</h2>
          <div className="accent-line"></div>
        </div>

        <div className="news-grid">
          {newsArticles.map((article, index) => (
            <motion.a 
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="news-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="news-image">
                <img src={article.image} alt={article.title} loading="lazy" />
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-source">
                    <Newspaper size={14} /> {article.source}
                  </span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <div className="read-more">
                  Đọc bài viết <ExternalLink size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
});

export default NewsSection;
