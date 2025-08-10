import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PlanForm from '../components/Plan/PlanForm';
import PlanSuccessModal from '../components/Plan/PlanSuccessModal';
import { FaRocket, FaChartLine, FaBullseye } from 'react-icons/fa';

const Plan = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handlePlanSubmit = async (formData) => {
    try {
      // TODO: Implement API call to submit form data
      console.log('Form submitted:', formData);
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // TODO: Implement error handling
    }
  };

  const benefits = [
    {
      icon: <FaRocket className="text-4xl text-orange-500" />,
      title: "Strategic Planning",
      description: "Get data-driven media strategies tailored to your goals"
    },
    {
      icon: <FaChartLine className="text-4xl text-orange-500" />,
      title: "Maximum Impact",
      description: "Reach your target audience with precision and efficiency"
    },
    {
      icon: <FaBullseye className="text-4xl text-orange-500" />,
      title: "ROI Focused",
      description: "Optimize your media spend for the best possible returns"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Plan Your Media - Advertising Strategies for Brands | Media Dost</title>
        <meta name="description" content="Plan your media and advertising strategies effectively with MediaDost. Discover how to target your audience and plan your ad campaigns across various platforms including outdoor, retail, radio, and more." />
        <meta name="keywords" content="media planning, media dost, media dost plan your media, advertising strategies, target audience, advertising campaigns, outdoor media, retail media, radio advertising, advertising platforms, ad planning" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Plan Your Media - Advertising Strategies for Brands" />
        <meta property="og:description" content="Discover how to plan your media strategies with MediaDost. Choose the right advertising platforms and reach your target audience with precision across outdoor, retail, radio, and more." />
        <meta property="og:image" content="https://www.mediadost.com/assets/images/plan.jpg" />
        <meta property="og:url" content="https://www.mediadost.com/plan" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content="Plan Your Media - Advertising Strategies for Brands" />
        <meta name="twitter:description" content="Plan your advertising campaigns with MediaDost. Target the right audience with tailored strategies across a variety of advertising platforms." />
        <meta name="twitter:image" content="https://www.mediadost.com/assets/images/plan.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Advertisement",
            "name": "Plan Your Media",
            "description": "MediaDost helps brands plan their media strategies, providing access to a variety of advertising platforms like outdoor, retail, radio, and more. Reach your desired audience effectively through tailored advertising campaigns.",
            "url": "https://www.mediadost.com/plan",
            "publisher": {
              "@type": "Organization",
              "name": "MediaDost"
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-orange-500 to-rose-600 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Plan Your Perfect Campaign
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-orange-100">
                Let us help you create a strategic media plan that delivers results. Share your vision, and we'll make it happen.
              </p>
            </div>
          </div>
          
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute w-64 h-64 rounded-full bg-orange-400 opacity-20 -top-20 -left-20 animate-pulse"></div>
            <div className="absolute w-96 h-96 rounded-full bg-rose-400 opacity-20 -bottom-40 -right-20 animate-pulse delay-1000"></div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fill Campaign Brief</h2>
              <p className="text-lg text-gray-600">
                Tell us about your brand and campaign objectives so we can create an effective plan.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <PlanForm onSubmit={handlePlanSubmit} />
            </div>
          </div>
        </section>

        {showSuccessModal && (
          <PlanSuccessModal 
            onClose={() => setShowSuccessModal(false)} 
          />
        )}
      </main>
    </>
  );
};

export default Plan; 