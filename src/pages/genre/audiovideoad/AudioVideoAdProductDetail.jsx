import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Mock data for audio/video advertising
const mockAudioVideoData = {
  25: {
    id: 25,
    title: "Cinema Screen Ad",
    location: "Mumbai",
    full_address: "PVR Cinemas, Juhu, Mumbai",
    type: "Cinema Screen Ad",
    price: 85000,
    lighting: "LED",
    images: ["cinema1.jpg", "cinema2.jpg", "cinema3.jpg", "cinema4.jpg"],
    description:
      "Premium cinema screen advertising before blockbuster movies. Reach captive audience in premium multiplex environment with high-quality video content.",
    features: [
      "Pre-Movie Screen Time",
      "High-Definition Display",
      "Captive Audience Attention",
      "Premium Theater Locations",
      "Multiple Show Screenings",
      "Professional Content Support",
    ],
    specifications: {
      duration: "30/60 Second Videos",
      screenSize: "Large Format Cinema",
      audience: "500+ Per Show",
      demographics: "Movie Enthusiasts",
      environment: "Premium Multiplex",
    },
  },
  26: {
    id: 26,
    title: "LED Video Wall",
    location: "Delhi",
    full_address: "Connaught Place, Delhi",
    type: "LED Video Wall",
    price: 120000,
    lighting: "LED",
    images: ["ledwall1.jpg", "ledwall2.jpg", "ledwall3.jpg", "ledwall4.jpg"],
    description:
      "Massive LED video wall advertising in high-traffic commercial area. Perfect for dynamic video content with excellent visibility and impact.",
    features: [
      "Large LED Display Screen",
      "High Brightness & Clarity",
      "24/7 Display Capability",
      "Dynamic Video Content",
      "Weather Resistant",
      "Real-time Content Updates",
    ],
    specifications: {
      duration: "15/30/60 Second Loops",
      screenSize: "20x10 Feet",
      audience: "100,000+ Daily Views",
      demographics: "Urban Commuters",
      environment: "Outdoor Commercial",
    },
  },
  27: {
    id: 27,
    title: "Digital Billboard",
    location: "Bangalore",
    full_address: "Brigade Road, Bangalore",
    type: "Digital Billboard",
    price: 95000,
    lighting: "LED",
    images: ["digital1.jpg", "digital2.jpg", "digital3.jpg", "digital4.jpg"],
    description:
      "Digital billboard advertising on prime commercial street with rotating video content. High-impact visual advertising for maximum brand exposure.",
    features: [
      "Digital Display Technology",
      "Rotating Content Slots",
      "Prime Location Visibility",
      "Full-Color Video Support",
      "Remote Content Management",
      "Analytics Dashboard",
    ],
    specifications: {
      duration: "10/20/30 Second Slots",
      screenSize: "12x8 Feet",
      audience: "75,000+ Daily Views",
      demographics: "Shopping District Visitors",
      environment: "Commercial Street",
    },
  },
  28: {
    id: 28,
    title: "Mall Video Screen",
    location: "Chennai",
    full_address: "Express Avenue Mall, Chennai",
    type: "Mall Video Screen",
    price: 65000,
    lighting: "LED",
    images: [
      "mallscreen1.jpg",
      "mallscreen2.jpg",
      "mallscreen3.jpg",
      "mallscreen4.jpg",
    ],
    description:
      "Shopping mall video screen advertising in high-footfall areas. Engage shoppers with compelling video content during their leisure time.",
    features: [
      "Shopping Mall Placement",
      "High Footfall Areas",
      "Family Audience Reach",
      "Entertainment Integration",
      "Leisure Time Targeting",
      "Multiple Screen Network",
    ],
    specifications: {
      duration: "20/40 Second Videos",
      screenSize: "8x6 Feet",
      audience: "50,000+ Weekly Visitors",
      demographics: "Shoppers & Families",
      environment: "Indoor Mall",
    },
  },
  29: {
    id: 29,
    title: "Audio Announcement",
    location: "Pune",
    full_address: "FC Road, Pune",
    type: "Audio Announcement",
    price: 25000,
    lighting: "Non Lit",
    images: ["audio1.jpg", "audio2.jpg", "audio3.jpg", "audio4.jpg"],
    description:
      "Strategic audio announcements in busy commercial areas and transport hubs. Cost-effective way to reach large audiences with clear audio messaging.",
    features: [
      "High-Quality Audio System",
      "Strategic Location Placement",
      "Clear Voice Broadcasting",
      "Scheduled Announcements",
      "Multi-Language Support",
      "Background Music Integration",
    ],
    specifications: {
      duration: "15/30 Second Audio",
      coverage: "500 Meter Radius",
      audience: "25,000+ Daily Reach",
      demographics: "Commuters & Pedestrians",
      environment: "Outdoor Public Space",
    },
  },
  30: {
    id: 30,
    title: "Interactive Kiosk",
    location: "Hyderabad",
    full_address: "HITEC City, Hyderabad",
    type: "Interactive Kiosk",
    price: 45000,
    lighting: "LED",
    images: ["kiosk1.jpg", "kiosk2.jpg", "kiosk3.jpg", "kiosk4.jpg"],
    description:
      "Interactive digital kiosk with touchscreen capabilities for engaging customer experiences. Perfect for product demonstrations and information dissemination.",
    features: [
      "Touchscreen Interface",
      "Interactive Content",
      "User Engagement Tracking",
      "Multi-Media Support",
      "Real-time Analytics",
      "Custom Application Support",
    ],
    specifications: {
      duration: "Interactive Sessions",
      screenSize: "32 Inch Touch Display",
      audience: "Tech-Savvy Professionals",
      demographics: "IT Professionals",
      environment: "Corporate Complex",
    },
  },
};

function AudioVideoAdProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState("30");
  const [campaignLength, setCampaignLength] = useState("1");
  const [contentType, setContentType] = useState("video");
  const [startDate, setStartDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = useState(false); // Add map state

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const productData = mockAudioVideoData[id];
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
    const durationMultiplier =
      selectedDuration === "60"
        ? 1.5
        : selectedDuration === "30"
        ? 1
        : selectedDuration === "20"
        ? 0.8
        : 0.6;
    const contentMultiplier =
      contentType === "interactive" ? 1.3 : contentType === "video" ? 1 : 0.7;
    return Math.round(
      product.price *
        durationMultiplier *
        contentMultiplier *
        parseInt(campaignLength)
    );
  };

  const handleBookNow = () => {
    const bookingData = {
      productId: product.id,
      productTitle: product.title,
      duration: selectedDuration,
      campaignLength,
      contentType,
      startDate,
      totalPrice: calculateTotalPrice(),
      type: "audio-video-advertising",
    };
    console.log("Booking audio/video advertising:", bookingData);
    alert(
      "Audio/Video advertising booking initiated! Our creative team will contact you shortly."
    );
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
      campaignLength,
      contentType,
      startDate,
      totalPrice: calculateTotalPrice(),
      type: "audio-video-advertising",
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
          Loading audio/video advertising details...
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Advertising Space Not Found
          </h2>
          <button
            onClick={() => navigate("/audio-video-ad")}
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
          >
            Back to Audio/Video Advertising
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.title} - Audio/Video Advertising | Media Dost</title>
        <meta
          name="description"
          content={`${product.title} in ${product.location}. ${product.description}`}
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate("/audio-video-ad")}
              className="mb-4 text-red-100 hover:text-white transition-colors"
            >
              ← Back to Audio/Video Advertising
            </button>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-red-100 mt-2">
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
                      "https://via.placeholder.com/600x400?text=Audio+Video+Advertising";
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
                        ? "border-red-500"
                        : "border-gray-200"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/150x100?text=AV+Ad";
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-semibold rounded-full bg-red-100 text-red-800">
                    Audio/Video Advertising
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    ₹{product.price.toLocaleString()}/month
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Advertising Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <i className="fas fa-check-circle text-red-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Space Specifications
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
                    Book Audio/Video Advertising
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Content Duration (seconds)
                      </label>
                      <select
                        value={selectedDuration}
                        onChange={(e) => setSelectedDuration(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="15">15 Seconds</option>
                        <option value="20">20 Seconds</option>
                        <option value="30">30 Seconds</option>
                        <option value="60">60 Seconds</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Content Type
                      </label>
                      <select
                        value={contentType}
                        onChange={(e) => setContentType(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="audio">Audio Only</option>
                        <option value="video">Video Content</option>
                        <option value="interactive">
                          Interactive Content (+30%)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Campaign Duration (months)
                      </label>
                      <select
                        value={campaignLength}
                        onChange={(e) => setCampaignLength(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
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
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
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
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">
                          {selectedDuration}s content
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Content Type:</span>
                        <span className="font-medium capitalize">
                          {contentType}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Campaign:</span>
                        <span className="font-medium">
                          {campaignLength} month(s)
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
                        className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
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
                className="text-red-600 hover:text-red-700 flex items-center gap-2"
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
                    <button className="text-red-600 hover:text-red-700 font-medium">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

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
                    "https://via.placeholder.com/800x600?text=Audio+Video+Advertising";
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
    </>
  );
}

export default AudioVideoAdProductDetail;
