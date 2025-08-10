import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Mock data for television advertising
const mockTelevisionData = {
  61: {
    id: 61,
    title: "Prime Time Ad",
    location: "Mumbai",
    full_address: "Colors TV, Mumbai",
    type: "Prime Time Ad",
    price: 250000,
    lighting: "LED",
    images: [
      "primetime1.jpg",
      "primetime2.jpg",
      "primetime3.jpg",
      "primetime4.jpg",
    ],
    description:
      "Premium television advertising slot during prime time hours (8-11 PM) on leading entertainment channels. Maximum reach and audience engagement for your brand.",
    features: [
      "Prime Time Slot (8-11 PM)",
      "High TRP Shows",
      "Multiple Channel Options",
      "Professional Ad Production",
      "Audience Analytics",
      "Brand Recall Tracking",
    ],
    specifications: {
      duration: "30 Second Spot",
      timing: "Prime Time (8-11 PM)",
      channels: "Entertainment & News",
      reach: "10M+ Viewers",
      frequency: "Daily Slots Available",
    },
  },
  62: {
    id: 62,
    title: "Morning Slot",
    location: "Delhi",
    full_address: "Star Plus, Delhi",
    type: "Morning Slot",
    price: 125000,
    lighting: "LED",
    images: [
      "morning_tv1.jpg",
      "morning_tv2.jpg",
      "morning_tv3.jpg",
      "morning_tv4.jpg",
    ],
    description:
      "Strategic morning television advertising slots targeting housewives and early viewers. Perfect for household products and lifestyle brands.",
    features: [
      "Morning Time Slot (9 AM-12 PM)",
      "Targeted Demographics",
      "Cost-Effective Rates",
      "Serial Program Integration",
      "Viewer Analytics",
      "Campaign Optimization",
    ],
    specifications: {
      duration: "30 Second Spot",
      timing: "Morning (9 AM-12 PM)",
      channels: "Entertainment",
      reach: "5M+ Viewers",
      frequency: "Daily/Weekly Options",
    },
  },
  63: {
    id: 63,
    title: "Evening News Slot",
    location: "Bangalore",
    full_address: "NDTV, Bangalore",
    type: "Evening News Slot",
    price: 180000,
    lighting: "LED",
    images: [
      "evening_news1.jpg",
      "evening_news2.jpg",
      "evening_news3.jpg",
      "evening_news4.jpg",
    ],
    description:
      "High-impact evening news slot advertising during prime news hours. Ideal for reaching informed viewers and decision makers with your brand message.",
    features: [
      "Evening News Slot (6-9 PM)",
      "Professional Audience",
      "Current Affairs Integration",
      "Breaking News Opportunities",
      "Expert Analysis Shows",
      "Viewer Engagement Metrics",
    ],
    specifications: {
      duration: "30 Second Spot",
      timing: "Evening News (6-9 PM)",
      channels: "News & Current Affairs",
      reach: "8M+ Viewers",
      frequency: "Hourly Slots Available",
    },
  },
  64: {
    id: 64,
    title: "Sports Channel Ad",
    location: "Kolkata",
    full_address: "Star Sports, Kolkata",
    type: "Sports Channel Ad",
    price: 300000,
    lighting: "LED",
    images: [
      "sports_ad1.jpg",
      "sports_ad2.jpg",
      "sports_ad3.jpg",
      "sports_ad4.jpg",
    ],
    description:
      "Premium sports channel advertising during live matches and sports shows. Maximum engagement with passionate sports fans and active audiences.",
    features: [
      "Live Match Coverage",
      "Sports Event Integration",
      "Male Demographic Focus",
      "High Energy Content",
      "Tournament Sponsorships",
      "Interactive Ad Options",
    ],
    specifications: {
      duration: "30 Second Spot",
      timing: "Sports Prime Time",
      channels: "Sports & Recreation",
      reach: "12M+ Viewers",
      frequency: "Match-based Scheduling",
    },
  },
  65: {
    id: 65,
    title: "Kids Channel Spot",
    location: "Chennai",
    full_address: "Cartoon Network, Chennai",
    type: "Kids Channel Spot",
    price: 95000,
    lighting: "LED",
    images: ["kids_tv1.jpg", "kids_tv2.jpg", "kids_tv3.jpg", "kids_tv4.jpg"],
    description:
      "Engaging kids channel advertising spots during popular cartoon shows and educational programs. Perfect for toys, snacks, and family-oriented brands.",
    features: [
      "Children's Programming",
      "Animated Content Integration",
      "Family-Friendly Slots",
      "Educational Show Placement",
      "Weekend Special Programming",
      "Parent-Child Viewing Time",
    ],
    specifications: {
      duration: "20 Second Spot",
      timing: "Kids Prime Time (4-8 PM)",
      channels: "Children's Entertainment",
      reach: "6M+ Young Viewers",
      frequency: "Cartoon Block Scheduling",
    },
  },
  66: {
    id: 66,
    title: "Late Night Show",
    location: "Hyderabad",
    full_address: "Comedy Central, Hyderabad",
    type: "Late Night Show",
    price: 75000,
    lighting: "LED",
    images: [
      "late_night1.jpg",
      "late_night2.jpg",
      "late_night3.jpg",
      "late_night4.jpg",
    ],
    description:
      "Cost-effective late night television advertising during comedy shows and talk shows. Great for reaching young adults and night owl audiences.",
    features: [
      "Late Night Programming (11 PM-2 AM)",
      "Comedy Show Integration",
      "Young Adult Demographics",
      "Budget-Friendly Rates",
      "Talk Show Placements",
      "Night Entertainment Content",
    ],
    specifications: {
      duration: "30 Second Spot",
      timing: "Late Night (11 PM-2 AM)",
      channels: "Comedy & Entertainment",
      reach: "3M+ Night Viewers",
      frequency: "Nightly Programming",
    },
  },
};

const TelevisionProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedSpots, setSelectedSpots] = useState("1");
  const [campaignDuration, setCampaignDuration] = useState("7");
  const [startDate, setStartDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const productData = mockTelevisionData[id];
      if (productData) {
        setProduct(productData);
        // Set SEO meta tags
        document.title = `${productData.title} Television Advertising - ${productData.location} | Media Dost`;
        document
          .querySelector('meta[name="description"]')
          ?.setAttribute(
            "content",
            `Enhance your brand visibility with ${productData.type.toLowerCase()} television advertising in ${
              productData.full_address
            }. High-visibility TV placements at prime time slots.`
          );
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setShowImageModal(true);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  const calculateTotalPrice = () => {
    if (!product) return 0;
    return product.price * parseInt(selectedSpots) * parseInt(campaignDuration);
  };

  const handleBookNow = () => {
    if (!startDate) {
      alert("Please select a start date");
      return;
    }

    const bookingData = {
      productId: product.id,
      productTitle: product.title,
      spots: selectedSpots,
      duration: campaignDuration,
      startDate,
      totalPrice: calculateTotalPrice(),
      type: "television",
    };
    console.log("Booking TV advertisement:", bookingData);
    alert(
      "TV advertisement booking initiated! Our team will contact you shortly."
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
      spots: selectedSpots,
      duration: campaignDuration,
      startDate,
      totalPrice: calculateTotalPrice(),
      type: "television",
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Loading television advertisement details...
          </p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Advertisement Slot Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The television advertising slot you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/television")}
            className="bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition-colors"
          >
            Back to Television Advertising
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.title} - Television Advertising | Media Dost</title>
        <meta
          name="description"
          content={`${product.title} on ${product.full_address}. ${product.description}`}
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-500 to-violet-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate("/television")}
              className="mb-4 text-violet-100 hover:text-white transition-colors"
            >
              ← Back to Television Advertising
            </button>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-violet-100 mt-2">
              <i className="fas fa-tv mr-2"></i>
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
                      "https://via.placeholder.com/600x400?text=TV+Commercial";
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
                        ? "border-violet-500"
                        : "border-gray-200"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/150x100?text=TV";
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-semibold rounded-full bg-violet-100 text-violet-800">
                    TV Commercial
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    ₹{product.price.toLocaleString()}/spot
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Advertisement Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Advertisement Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <i className="fas fa-check-circle text-violet-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Slot Specifications
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
                    Book TV Advertisement
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Spots per Day
                      </label>
                      <select
                        value={selectedSpots}
                        onChange={(e) => setSelectedSpots(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                      >
                        <option value="1">1 Spot</option>
                        <option value="2">2 Spots</option>
                        <option value="3">3 Spots</option>
                        <option value="5">5 Spots</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Campaign Duration (days)
                      </label>
                      <select
                        value={campaignDuration}
                        onChange={(e) => setCampaignDuration(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                      >
                        <option value="7">1 Week</option>
                        <option value="15">15 Days</option>
                        <option value="30">1 Month</option>
                        <option value="90">3 Months</option>
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
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Rate per Spot:</span>
                        <span className="font-medium">
                          ₹{product.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Spots per Day:</span>
                        <span className="font-medium">{selectedSpots}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">
                          {campaignDuration} days
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
                        className="flex-1 bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors font-medium"
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
                className="text-violet-600 hover:text-violet-700 flex items-center gap-2"
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
                    <button className="text-violet-600 hover:text-violet-700 font-medium">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Detailed Information Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Understanding Television Advertising
                </h2>
                <div className="prose prose-lg">
                  <p className="text-gray-600 mb-6">
                    Television advertising remains one of the most powerful mediums for brand storytelling, combining sight, sound, and motion to create memorable impressions on viewers. It offers unparalleled reach and impact in building brand awareness and credibility.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                  <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
                    <li>Mass audience reach</li>
                    <li>High-impact visual storytelling</li>
                    <li>Brand credibility enhancement</li>
                    <li>Targeted time slot selection</li>
                    <li>Multi-sensory engagement</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Target Audience</h3>
                  <p className="text-gray-600 mb-6">
                    Television advertising effectively reaches:
                  </p>
                  <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
                    <li>Prime time viewers</li>
                    <li>Specific demographic groups</li>
                    <li>Family audiences</li>
                    <li>Event-based viewers</li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Technical Specifications
                </h3>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">Duration Options</h4>
                      <p className="text-gray-600">10, 15, 30, 60 seconds</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Format</h4>
                      <p className="text-gray-600">HD Video (1080p)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Frequency</h4>
                      <p className="text-gray-600">Multiple slots per day</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Coverage</h4>
                      <p className="text-gray-600">National/Regional</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Production Guidelines
                </h3>
                <div className="prose prose-lg">
                  <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
                    <li>High-definition video production</li>
                    <li>Professional sound recording</li>
                    <li>Broadcast-standard formatting</li>
                    <li>Engaging visual storytelling</li>
                    <li>Clear call-to-action</li>
                  </ul>
                </div>

                <div className="bg-violet-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-violet-900 mb-4">
                    Additional Services
                  </h3>
                  <ul className="space-y-3 text-violet-800">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Commercial production
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Script development
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Talent casting
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Viewership analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-12 bg-gradient-to-r from-violet-600 to-violet-700 rounded-lg p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Be on TV?</h3>
                <p className="text-lg text-violet-100 mb-6">
                  Let us help you create a compelling television campaign that captures your audience's attention.
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="bg-white text-violet-600 px-6 py-3 rounded-lg hover:bg-violet-50 transition-colors font-medium"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBookNow}
                    className="bg-violet-500 text-white px-6 py-3 rounded-lg hover:bg-violet-400 transition-colors font-medium"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {showImageModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={`/images/${product.images[selectedImage]}`}
                alt={product.title}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=TV+Commercial";
                }}
              />
              <button
                onClick={() => setShowImageModal(false)}
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
};

export default TelevisionProductDetail;
