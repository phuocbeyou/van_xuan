import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Location from './components/Location/Location';
import PropertyGrid from './components/PropertyGrid/PropertyGrid';
import NewsSection from './components/NewsSection/NewsSection';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { useEffect } from 'react';
import './styles/main.css';

const PRELOAD_IMAGES = [
  '/images/logo_du_an.png',
  '/images/banner.webp',
  '/images/banner_2.webp',
  // masterplan.webp is too large (20MB) to preload without blocking, let it load lazily
  '/images/vi_tri_dac_dia.webp',
  '/images/ha_tang.webp',
  '/images/logo_369_group.png'
];

function App() {
  useEffect(() => {
    // Force preload all critical images into browser cache
    PRELOAD_IMAGES.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <HelmetProvider>
      <div className="app">
        <SEO 
          title="Vạn Xuân Heritage Phổ Yên - Đất nền & Shophouse giá gốc"
          description="Vạn Xuân Heritage Phổ Yên Thái Nguyên - Đất nền, Shophouse giá tốt nhất từ chủ đầu tư. Vị trí vàng thủ phủ công nghiệp Samsung, đón đầu quy hoạch Vành đai 5."
          keywords="vạn xuân heritage, phổ yên, thái nguyên, đất nền phổ yên, shophouse tam que 369, đầu tư bất động sản thái nguyên"
        />
        
        <Header />
        
        <main>
          <Hero />
          <Features />
          <Location />
          <PropertyGrid />
          <NewsSection />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
}

export default App;
