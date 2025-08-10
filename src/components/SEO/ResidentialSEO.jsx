import React from 'react';
import { Helmet } from 'react-helmet-async';

const ResidentialSEO = () => {
  return (
    <Helmet>
      {/* Title and Meta Description */}
      <title>Residential Advertising - Ads in Housing Societies & Complexes | Media Dost</title>
      <meta name="description" content="Explore targeted advertising solutions in residential areas. Book ads in housing societies, residential complexes, wall advertisement, gate entrance, playground, parking area and more with MediaDost for better visibility and engagement." />
      <meta name="keywords" content="residential advertising, media dost, housing society ads, residential complex advertising, apartment advertising, ad placements in residential areas, local advertising, residential area media" />
      
      {/* Robots Meta */}
      <meta name="robots" content="index, follow" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Residential Advertising - Ads in Housing Societies & Complexes" />
      <meta property="og:description" content="Discover the best advertising spaces in residential areas, housing societies, and apartments. Book now with MediaDost for a targeted local campaign." />
      <meta property="og:image" content="https://www.mediadost.com/assets/images/residential-advertising.jpg" />
      <meta property="og:url" content="https://www.mediadost.com/residential-advertising" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:title" content="Residential Advertising - Ads in Housing Societies & Complexes" />
      <meta name="twitter:description" content="Explore residential advertising spaces such as apartment complexes and housing societies for your next local campaign. Book with MediaDost." />
      <meta name="twitter:image" content="https://www.mediadost.com/assets/images/residential-advertising.jpg" />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Product",
          "name": "Residential Advertising Space",
          "description": "Advertising solutions in residential areas such as apartment complexes, housing societies, and residential communities.",
          "brand": "MediaDost",
          "offers": {
            "@type": "Offer",
            "url": "https://www.mediadost.com/residential-advertising",
            "priceCurrency": "INR",
            "price": "contact for pricing"
          }
        })}
      </script>
    </Helmet>
  );
};

export default ResidentialSEO; 