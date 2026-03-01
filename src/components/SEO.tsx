import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({ title, description, keywords, image, url }: SEOProps) => {
  const siteName = "Vạn Xuân Heritage | Tâm Quê 369 Group";
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl = url || "https://vanxuanheritage.vn";
  const defaultImage = "/images/banner.webp";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} /> }
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image || defaultImage} />

      {/* Canonical */}
      <link rel="canonical" href={siteUrl} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateListing",
          "name": "Vạn Xuân Heritage Phổ Yên",
          "description": description,
          "brand": {
            "@type": "Brand",
            "name": "Tâm Quê 369 Group"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Phổ Yên",
            "addressRegion": "Thái Nguyên",
            "addressCountry": "VN"
          }
        })}
      </script>

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
    </Helmet>
  );
};

export default SEO;
