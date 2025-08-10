import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Mock data for digital PR services
const mockDigitalPRData = {
  31: {
    id: 31,
    title: "Influencer Campaign",
    location: "Mumbai",
    full_address: "Bandra Kurla Complex, Mumbai",
    type: "Influencer Campaign",
    price: 75000,
    lighting: "Non Lit",
    images: [
      "influencer1.jpg",
      "influencer2.jpg",
      "influencer3.jpg",
      "influencer4.jpg",
    ],
    description:
      "Strategic influencer marketing campaigns to amplify your brand reach through authentic partnerships with top-tier content creators and social media personalities.",
    features: [
      "Influencer Research & Vetting",
      "Campaign Strategy Development",
      "Content Creation Oversight",
      "Performance Tracking",
      "Brand Collaboration Management",
      "ROI Analysis & Reporting",
    ],
    specifications: {
      duration: "Per Campaign",
      reach: "500K - 2M followers",
      platforms: "Instagram, YouTube, Twitter",
      deliverables: "Posts, Stories, Reels",
      reporting: "Real-time Analytics",
    },
  },
  32: {
    id: 32,
    title: "Social Media PR",
    location: "Delhi",
    full_address: "Connaught Place, Delhi",
    type: "Social Media PR",
    price: 50000,
    lighting: "Non Lit",
    images: [
      "socialmedia1.jpg",
      "socialmedia2.jpg",
      "socialmedia3.jpg",
      "socialmedia4.jpg",
    ],
    description:
      "Comprehensive social media public relations strategy to build brand reputation, manage online presence, and engage with your target audience effectively.",
    features: [
      "Social Media Strategy",
      "Content Calendar Planning",
      "Community Management",
      "Crisis Communication",
      "Brand Monitoring",
      "Engagement Analytics",
    ],
    specifications: {
      duration: "Monthly Package",
      platforms: "All Major Social Platforms",
      posting: "Daily Content",
      monitoring: "24/7 Brand Monitoring",
      reporting: "Weekly PR Reports",
    },
  },
  33: {
    id: 33,
    title: "Press Release",
    location: "Bangalore",
    full_address: "Koramangala, Bangalore",
    type: "Press Release",
    price: 25000,
    lighting: "Non Lit",
    images: ["press1.jpg", "press2.jpg", "press3.jpg", "press4.jpg"],
    description:
      "Professional press release creation and distribution to major media outlets, journalists, and online platforms to maximize brand visibility and credibility.",
    features: [
      "Press Release Writing",
      "Media List Development",
      "Distribution to Major Outlets",
      "Follow-up with Journalists",
      "Coverage Tracking",
      "Media Monitoring",
    ],
    specifications: {
      duration: "Per Release",
      reach: "500+ Media Outlets",
      platforms: "Print, Digital, Broadcast",
      deliverables: "Press Release + Distribution",
      reporting: "Coverage Analysis Report",
    },
  },
  34: {
    id: 34,
    title: "Content Marketing",
    location: "Chennai",
    full_address: "T. Nagar, Chennai",
    type: "Content Marketing",
    price: 40000,
    lighting: "Non Lit",
    images: ["content1.jpg", "content2.jpg", "content3.jpg", "content4.jpg"],
    description:
      "Strategic content marketing campaigns with high-quality articles, blogs, and multimedia content to establish thought leadership and drive engagement.",
    features: [
      "Content Strategy Development",
      "Blog Writing & Publishing",
      "SEO-Optimized Content",
      "Multimedia Content Creation",
      "Content Distribution",
      "Performance Analytics",
    ],
    specifications: {
      duration: "Monthly Package",
      deliverables: "8-12 Content Pieces",
      platforms: "Website, Social Media, Guest Posts",
      optimization: "SEO & Social Optimized",
      reporting: "Monthly Content Performance",
    },
  },
  35: {
    id: 35,
    title: "Brand Reputation",
    location: "Pune",
    full_address: "Hinjewadi, Pune",
    type: "Brand Reputation",
    price: 60000,
    lighting: "Non Lit",
    images: [
      "reputation1.jpg",
      "reputation2.jpg",
      "reputation3.jpg",
      "reputation4.jpg",
    ],
    description:
      "Comprehensive brand reputation management to monitor, protect, and enhance your brand image across all digital platforms and traditional media.",
    features: [
      "Online Reputation Monitoring",
      "Review Management",
      "Negative Content Suppression",
      "Positive Content Amplification",
      "Crisis Response Planning",
      "Reputation Score Tracking",
    ],
    specifications: {
      duration: "Monthly Service",
      monitoring: "24/7 Brand Monitoring",
      platforms: "All Major Platforms",
      response: "Real-time Crisis Response",
      reporting: "Weekly Reputation Reports",
    },
  },
  36: {
    id: 36,
    title: "Crisis Management",
    location: "Hyderabad",
    full_address: "HITEC City, Hyderabad",
    type: "Crisis Management",
    price: 85000,
    lighting: "Non Lit",
    images: ["crisis1.jpg", "crisis2.jpg", "crisis3.jpg", "crisis4.jpg"],
    description:
      "Emergency crisis management and communication strategies to protect your brand during challenging situations and restore public confidence.",
    features: [
      "Crisis Response Strategy",
      "Emergency Communication Plan",
      "Media Relations Management",
      "Stakeholder Communication",
      "Damage Control Measures",
      "Recovery Strategy Implementation",
    ],
    specifications: {
      duration: "Emergency Response",
      availability: "24/7 Crisis Response",
      response: "Immediate Action Plan",
      platforms: "All Media Channels",
      reporting: "Real-time Crisis Updates",
    },
  },
};

function DigitalPRProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("basic");
  const [campaignObjective, setCampaignObjective] = useState("");
  const [startDate, setStartDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = useState(false); // Add map state

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const productData = mockDigitalPRData[id];
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

  const packageMultipliers = {
    basic: 1,
    premium: 1.5,
    enterprise: 2.5,
  };

  const calculateTotalPrice = () => {
    if (!product) return 0;
    return Math.round(product.price * packageMultipliers[selectedPackage]);
  };

  const handleBookNow = () => {
    const bookingData = {
      productId: product.id,
      productTitle: product.title,
      package: selectedPackage,
      objective: campaignObjective,
      startDate,
      totalPrice: calculateTotalPrice(),
      type: "digital-pr",
    };
    console.log("Booking digital PR service:", bookingData);
    alert("PR campaign booking initiated! Our team will contact you shortly.");
  };

  const handleAddToCart = () => {
    if (!startDate || !campaignObjective) {
      alert("Please fill in all required fields");
      return;
    }

    const cartItem = {
      productId: product.id,
      productTitle: product.title,
      package: selectedPackage,
      objective: campaignObjective,
      startDate,
      totalPrice: calculateTotalPrice(),
      type: "digital-pr",
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
        <div className="text-lg">Loading digital PR service details...</div>
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
            onClick={() => navigate("/digital-pr")}
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
          >
            Back to Digital PR
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.title} - Digital PR Services | Media Dost</title>
        <meta
          name="description"
          content={`${product.title} in ${product.location}. ${product.description}`}
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate("/digital-pr")}
              className="mb-4 text-indigo-100 hover:text-white transition-colors"
            >
              ← Back to Digital PR Services
            </button>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-indigo-100 mt-2">
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
                      "https://via.placeholder.com/600x400?text=Digital+PR+Service";
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
                        ? "border-indigo-500"
                        : "border-gray-200"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/150x100?text=PR+Service";
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-semibold rounded-full bg-indigo-100 text-indigo-800">
                    Digital PR Service
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    ₹{product.price.toLocaleString()}/campaign
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
                        <i className="fas fa-check-circle text-indigo-500 mr-2"></i>
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
                    Book This PR Service
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Campaign Package
                      </label>
                      <select
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="basic">Basic Package</option>
                        <option value="premium">Premium Package (+50%)</option>
                        <option value="enterprise">
                          Enterprise Package (+150%)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Campaign Objective
                      </label>
                      <select
                        value={campaignObjective}
                        onChange={(e) => setCampaignObjective(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="">Select Objective</option>
                        <option value="brand-awareness">Brand Awareness</option>
                        <option value="reputation-management">
                          Reputation Management
                        </option>
                        <option value="product-launch">Product Launch</option>
                        <option value="crisis-management">
                          Crisis Management
                        </option>
                        <option value="thought-leadership">
                          Thought Leadership
                        </option>
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
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Base Rate:</span>
                        <span className="font-medium">
                          ₹{product.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Package:</span>
                        <span className="font-medium capitalize">
                          {selectedPackage}
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
                        className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
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

          {/* Location Map */}
          <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Location</h3>
              <button
                onClick={handleMapView}
                className="text-indigo-600 hover:text-indigo-700 flex items-center gap-2"
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
                    <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

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
                    "https://via.placeholder.com/800x600?text=Digital+PR+Service";
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

export default DigitalPRProductDetail;
