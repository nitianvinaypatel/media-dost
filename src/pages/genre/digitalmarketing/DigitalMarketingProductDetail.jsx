import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Mock data for digital marketing services
const mockDigitalMarketingData = {
  49: {
    id: 49,
    title: "Google Ads Campaign",
    location: "Mumbai",
    full_address: "Andheri East, Mumbai",
    type: "Google Ads Campaign",
    price: 35000,
    lighting: "Non Lit",
    images: [
      "googleads1.jpg",
      "googleads2.jpg",
      "googleads3.jpg",
      "googleads4.jpg",
    ],
    description:
      "Comprehensive Google Ads campaign management with keyword optimization, ad copy creation, and performance tracking. Reach your target audience effectively with strategic search engine marketing.",
    features: [
      "Keyword Research & Analysis",
      "Ad Copy Creation & Testing",
      "Campaign Setup & Optimization",
      "Performance Tracking & Reports",
      "Competitor Analysis",
      "ROI Optimization",
    ],
    specifications: {
      duration: "Monthly Campaign",
      targeting: "Location & Demographics",
      platforms: "Google Search & Display",
      reporting: "Weekly Reports",
      support: "24/7 Account Management",
    },
  },
  50: {
    id: 50,
    title: "Facebook Marketing",
    location: "Delhi",
    full_address: "Connaught Place, Delhi",
    type: "Facebook Marketing",
    price: 28000,
    lighting: "Non Lit",
    images: [
      "facebook1.jpg",
      "facebook2.jpg",
      "facebook3.jpg",
      "facebook4.jpg",
    ],
    description:
      "Strategic Facebook marketing campaigns to boost brand awareness, engagement, and conversions through targeted social media advertising.",
    features: [
      "Page Setup & Optimization",
      "Content Strategy & Creation",
      "Audience Targeting",
      "Ad Campaign Management",
      "Community Management",
      "Analytics & Insights",
    ],
    specifications: {
      duration: "Monthly Package",
      targeting: "Interest & Behavior Based",
      platforms: "Facebook & Instagram",
      reporting: "Bi-weekly Reports",
      support: "Business Hours Support",
    },
  },
  51: {
    id: 51,
    title: "SEO Services",
    location: "Bangalore",
    full_address: "Koramangala, Bangalore",
    type: "SEO Services",
    price: 45000,
    lighting: "Non Lit",
    images: ["seo1.jpg", "seo2.jpg", "seo3.jpg", "seo4.jpg"],
    description:
      "Complete SEO optimization services to improve your website ranking, increase organic traffic, and enhance online visibility through proven strategies.",
    features: [
      "Website SEO Audit",
      "Keyword Research & Strategy",
      "On-page Optimization",
      "Link Building",
      "Content Optimization",
      "Monthly Performance Reports",
    ],
    specifications: {
      duration: "Monthly Service",
      targeting: "Search Engine Rankings",
      platforms: "Google, Bing, Yahoo",
      reporting: "Monthly SEO Reports",
      support: "Dedicated SEO Manager",
    },
  },
  52: {
    id: 52,
    title: "Instagram Marketing",
    location: "Chennai",
    full_address: "T. Nagar, Chennai",
    type: "Instagram Marketing",
    price: 22000,
    lighting: "Non Lit",
    images: [
      "instagram1.jpg",
      "instagram2.jpg",
      "instagram3.jpg",
      "instagram4.jpg",
    ],
    description:
      "Creative Instagram marketing campaigns with engaging content, story strategies, and influencer partnerships to grow your brand presence.",
    features: [
      "Content Creation & Curation",
      "Instagram Stories Strategy",
      "Hashtag Research",
      "Influencer Partnerships",
      "Instagram Shopping Setup",
      "Analytics & Growth Tracking",
    ],
    specifications: {
      duration: "Monthly Campaign",
      targeting: "Visual Content Marketing",
      platforms: "Instagram",
      reporting: "Weekly Performance Reports",
      support: "Creative Team Support",
    },
  },
  53: {
    id: 53,
    title: "Email Marketing",
    location: "Pune",
    full_address: "Hinjewadi, Pune",
    type: "Email Marketing",
    price: 15000,
    lighting: "Non Lit",
    images: ["email1.jpg", "email2.jpg", "email3.jpg", "email4.jpg"],
    description:
      "Professional email marketing campaigns with automated sequences, personalized content, and detailed analytics to nurture leads and drive conversions.",
    features: [
      "Email Campaign Design",
      "List Segmentation",
      "Automated Email Sequences",
      "A/B Testing",
      "Personalization Strategies",
      "Detailed Analytics",
    ],
    specifications: {
      duration: "Monthly Service",
      targeting: "Customer Segmentation",
      platforms: "Mailchimp, Constant Contact",
      reporting: "Campaign Performance Reports",
      support: "Email Marketing Specialist",
    },
  },
  54: {
    id: 54,
    title: "YouTube Ads",
    location: "Hyderabad",
    full_address: "HITEC City, Hyderabad",
    type: "YouTube Ads",
    price: 32000,
    lighting: "Non Lit",
    images: ["youtube1.jpg", "youtube2.jpg", "youtube3.jpg", "youtube4.jpg"],
    description:
      "Engaging YouTube advertising campaigns with video content creation, audience targeting, and optimization for maximum reach and engagement.",
    features: [
      "Video Ad Creation",
      "Audience Targeting",
      "Campaign Optimization",
      "Performance Tracking",
      "Content Strategy",
      "ROI Analysis",
    ],
    specifications: {
      duration: "Monthly Campaign",
      targeting: "Video Content Marketing",
      platforms: "YouTube, Google Video Partners",
      reporting: "Weekly Video Analytics",
      support: "Video Marketing Team",
    },
  },
};

function DigitalMarketingProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState("1");
  const [startDate, setStartDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = useState(false); // Add map state

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const productData = mockDigitalMarketingData[id];
      if (productData) {
        setProduct(productData);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsImageModalOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  const calculateTotalPrice = () => {
    if (!product) return 0;
    return product.price * parseInt(selectedDuration);
  };

  const handleBookNow = () => {
    const bookingData = {
      productId: product.id,
      productTitle: product.title,
      duration: selectedDuration,
      startDate,
      totalPrice: calculateTotalPrice(),
      type: "digital-marketing",
    };
    console.log("Booking digital marketing service:", bookingData);
    alert("Service booking initiated! Our team will contact you shortly.");
  };

  const handleAddToCart = () => {
    if (!startDate) {
      alert("Please select a start date");
      return;
    }

    const cartItem = {
      productId: product.id,
      productTitle: product.title,
      duration: selectedDuration,
      startDate,
      totalPrice: calculateTotalPrice(),
      type: "digital-marketing",
    };

    console.log("Adding to cart:", cartItem);
    alert("Added to cart successfully!");
  };

  const handleMapView = () => {
    setShowMap(true);
  };

  const closeMap = () => {
    setShowMap(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">
          Loading digital marketing service details...
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h2>
          <button
            onClick={() => navigate("/digital-marketing")}
            className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700"
          >
            Back to Digital Marketing
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.title} - Digital Marketing Services | Media Dost</title>
        <meta
          name="description"
          content={`${product.title} in ${product.location}. ${product.description}`}
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate("/digital-marketing")}
              className="mb-4 text-orange-100 hover:text-white transition-colors"
            >
              ← Back to Digital Marketing Services
            </button>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-orange-100 mt-2">
              <i className="fas fa-map-marker-alt mr-2"></i>
              {product.full_address}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Images Section */}
            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`/images/${product.images[currentImageIndex]}`}
                  alt={product.title}
                  className="w-full h-96 object-cover cursor-pointer"
                  onClick={() => handleImageClick(currentImageIndex)}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600x400?text=Digital+Marketing+Service";
                  }}
                />
              </div>
              <div className="grid grid-cols-4 gap-2 mt-4">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={`/images/${image}`}
                    alt={`${product.title} ${index + 1}`}
                    className={`w-full h-20 object-cover rounded cursor-pointer border-2 ${
                      currentImageIndex === index
                        ? "border-orange-500"
                        : "border-gray-200"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/150x100?text=Service";
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-semibold rounded-full bg-orange-100 text-orange-800">
                    Digital Marketing Service
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    ₹{product.price.toLocaleString()}/month
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Service Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Service Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <i className="fas fa-check-circle text-orange-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Service Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div key={key} className="border rounded-lg p-3">
                          <div className="text-sm text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                          <div className="font-medium text-gray-900">
                            {value}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Booking Form */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Book This Service
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Campaign Duration (months)
                      </label>
                      <select
                        value={selectedDuration}
                        onChange={(e) => setSelectedDuration(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="1">1 Month</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="12">12 Months</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Campaign Start Date
                      </label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Monthly Rate:</span>
                        <span className="font-medium">
                          ₹{product.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">
                          {selectedDuration} month(s)
                        </span>
                      </div>
                      <div className="border-t pt-2 flex justify-between items-center">
                        <span className="text-lg font-semibold">
                          Total Cost:
                        </span>
                        <span className="text-xl font-bold text-green-600">
                          ₹{calculateTotalPrice().toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Location Map */}
                    <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">Location</h3>
                        <button
                          onClick={handleMapView}
                          className="text-orange-600 hover:text-orange-700 flex items-center gap-2"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          View Full Map
                        </button>
                      </div>
                      <div 
                        className="bg-gray-200 h-64 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer" 
                        onClick={handleMapView}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                        <div className="text-center text-gray-600 relative z-10">
                          <svg
                            className="w-12 h-12 mx-auto mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <p className="font-medium mb-1">Click to View Map</p>
                          <p className="text-sm">{product.full_address}</p>
                        </div>
                      </div>
                    </div>

                    {/* Map Modal */}
                    {showMap && (
                      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
                          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900">Location Map</h3>
                              <p className="text-gray-600 text-sm mt-1">{product.full_address}</p>
                            </div>
                            <button
                              onClick={closeMap}
                              className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="h-[60vh] bg-gray-100 relative">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                              <div className="text-center">
                                <svg
                                  className="w-16 h-16 mx-auto mb-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                <p className="text-lg font-medium">Map View</p>
                                <p className="text-sm mt-2">Location: {product.location}</p>
                                <p className="text-sm mt-1">{product.full_address}</p>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                  Satellite View
                                </button>
                                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                    />
                                  </svg>
                                  Street View
                                </button>
                              </div>
                              <button className="text-orange-600 hover:text-orange-700 font-medium">
                                Get Directions
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Modify the booking buttons to include Add to Cart */}
                    <div className="flex space-x-4 mt-4">
                      <button
                        onClick={handleAddToCart}
                        className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                      >
                        <i className="fas fa-shopping-cart mr-2"></i>
                        Add to Cart
                      </button>
                      <button
                        onClick={handleBookNow}
                        className="flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                      >
                        <i className="fas fa-bolt mr-2"></i>
                        Book Now
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {isImageModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={`/images/${product.images[currentImageIndex]}`}
                alt={product.title}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=Digital+Marketing+Service";
                }}
              />
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              >
                ×
              </button>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl hover:text-gray-300"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DigitalMarketingProductDetail;
