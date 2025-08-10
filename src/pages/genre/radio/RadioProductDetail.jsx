import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Mock data for radio advertising
const mockRadioData = {
  55: {
    id: 55,
    title: "Prime Time Spot",
    location: "Mumbai",
    full_address: "Radio City 91.1 FM, Mumbai",
    type: "Prime Time Spot",
    price: 85000,
    lighting: "Non Lit",
    images: ["radio1.jpg", "radio2.jpg", "radio3.jpg", "radio4.jpg"],
    description:
      "Premium prime time radio advertising slot during peak listening hours. Reach maximum audience with high-impact audio content across Mumbai's most popular FM station.",
    features: [
      "Peak Listening Hours (6-10 AM, 6-9 PM)",
      "Maximum Audience Reach",
      "Professional Ad Production",
      "Real-time Analytics",
      "Brand Integration Options",
      "Repeat Broadcast Scheduling",
    ],
    specifications: {
      duration: "30/60 Second Spots",
      frequency: "Multiple Daily Plays",
      audience: "2.5M+ Listeners",
      demographics: "25-45 Age Group",
      language: "Hindi/English Mix",
    },
  },
  56: {
    id: 56,
    title: "Morning Show",
    location: "Delhi",
    full_address: "Red FM 93.5, Delhi",
    type: "Morning Show",
    price: 65000,
    lighting: "Non Lit",
    images: ["morning1.jpg", "morning2.jpg", "morning3.jpg", "morning4.jpg"],
    description:
      "Strategic morning show advertising during commute hours when listeners are most engaged. Perfect for brand awareness and daily reach campaigns.",
    features: [
      "Morning Drive Time (7-10 AM)",
      "High Engagement Rate",
      "Live Mentions Available",
      "Traffic Update Integration",
      "Weather Sponsorship Options",
      "Social Media Integration",
    ],
    specifications: {
      duration: "15/30 Second Spots",
      frequency: "Hourly Broadcasts",
      audience: "1.8M+ Listeners",
      demographics: "Working Professionals",
      language: "Hindi Primarily",
    },
  },
  57: {
    id: 57,
    title: "Drive Time",
    location: "Bangalore",
    full_address: "Radio Mirchi 98.3, Bangalore",
    type: "Drive Time",
    price: 75000,
    lighting: "Non Lit",
    images: ["drive1.jpg", "drive2.jpg", "drive3.jpg", "drive4.jpg"],
    description:
      "High-impact drive time advertising when commuters and office-goers are tuned in. Ideal for brand building and product promotions.",
    features: [
      "Evening Drive Time (5-8 PM)",
      "Captive Audience",
      "Traffic Report Sponsorship",
      "Interactive Show Integration",
      "Contest Participation",
      "Mobile App Promotion",
    ],
    specifications: {
      duration: "20/40 Second Spots",
      frequency: "Peak Hour Rotation",
      audience: "2.1M+ Listeners",
      demographics: "Urban Professionals",
      language: "English/Hindi/Kannada",
    },
  },
  58: {
    id: 58,
    title: "Weekend Special",
    location: "Chennai",
    full_address: "Big FM 92.7, Chennai",
    type: "Weekend Special",
    price: 45000,
    lighting: "Non Lit",
    images: ["weekend1.jpg", "weekend2.jpg", "weekend3.jpg", "weekend4.jpg"],
    description:
      "Relaxed weekend programming with lifestyle and entertainment content. Perfect for leisure brands and weekend activity promotions.",
    features: [
      "Weekend Programming (Sat-Sun)",
      "Lifestyle Content Integration",
      "Music Show Sponsorship",
      "Event Promotion Platform",
      "Leisure Activity Focus",
      "Family Audience Targeting",
    ],
    specifications: {
      duration: "30/60 Second Spots",
      frequency: "Weekend Rotation",
      audience: "1.5M+ Listeners",
      demographics: "Family Audience",
      language: "Tamil/English",
    },
  },
  59: {
    id: 59,
    title: "Evening Show",
    location: "Pune",
    full_address: "Fever FM 104, Pune",
    type: "Evening Show",
    price: 55000,
    lighting: "Non Lit",
    images: ["evening1.jpg", "evening2.jpg", "evening3.jpg", "evening4.jpg"],
    description:
      "Popular evening show with music, entertainment, and listener interaction. Great for youth-oriented brands and entertainment promotions.",
    features: [
      "Evening Entertainment (7-10 PM)",
      "Young Adult Audience",
      "Music Chart Integration",
      "Listener Call-in Segments",
      "Social Media Promotion",
      "Event Announcements",
    ],
    specifications: {
      duration: "15/30/45 Second Spots",
      frequency: "Show Integration",
      audience: "1.3M+ Listeners",
      demographics: "18-35 Age Group",
      language: "Hindi/Marathi Mix",
    },
  },
  60: {
    id: 60,
    title: "Late Night",
    location: "Hyderabad",
    full_address: "Radio One 95 FM, Hyderabad",
    type: "Late Night",
    price: 35000,
    lighting: "Non Lit",
    images: ["night1.jpg", "night2.jpg", "night3.jpg", "night4.jpg"],
    description:
      "Late night programming for night owls and shift workers. Cost-effective advertising with dedicated niche audience engagement.",
    features: [
      "Late Night Hours (10 PM - 2 AM)",
      "Niche Audience Targeting",
      "Cost-Effective Rates",
      "Night Shift Worker Reach",
      "Specialized Content Integration",
      "Minimal Competition",
    ],
    specifications: {
      duration: "30/60 Second Spots",
      frequency: "Limited Competition",
      audience: "800K+ Listeners",
      demographics: "Night Workers, Students",
      language: "Telugu/English",
    },
  },
};

const RadioProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState("30");
  const [campaignLength, setCampaignLength] = useState("1");
  const [startDate, setStartDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const productData = mockRadioData[id];
      if (productData) {
        setProduct(productData);
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
    const durationMultiplier =
      selectedDuration === "60"
        ? 1.5
        : selectedDuration === "45"
        ? 1.25
        : selectedDuration === "30"
        ? 1
        : 0.75;
    return Math.round(
      product.price * durationMultiplier * parseInt(campaignLength)
    );
  };

  const handleBookNow = () => {
    if (!startDate) {
      alert("Please select a start date");
      return;
    }

    const bookingData = {
      productId: product.id,
      productTitle: product.title,
      duration: selectedDuration,
      campaignLength,
      startDate,
      totalPrice: calculateTotalPrice(),
      type: "radio-advertising",
    };
    console.log("Booking radio advertising:", bookingData);
    alert(
      "Radio advertising booking initiated! Our team will contact you shortly."
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
      startDate,
      totalPrice: calculateTotalPrice(),
      type: "radio-advertising",
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading radio advertising details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Radio Slot Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The radio advertising slot you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/radio")}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Back to Radio Advertising
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.title} - Radio Advertising | Media Dost</title>
        <meta
          name="description"
          content={`${product.title} on ${product.full_address}. ${product.description}`}
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate("/radio")}
              className="mb-4 text-teal-100 hover:text-white transition-colors"
            >
              ← Back to Radio Advertising
            </button>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-teal-100 mt-2">
              <i className="fas fa-radio mr-2"></i>
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
                      "https://via.placeholder.com/600x400?text=Radio+Advertising";
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
                        ? "border-teal-500"
                        : "border-gray-200"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/150x100?text=Radio";
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-semibold rounded-full bg-teal-100 text-teal-800">
                    Radio Advertising
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    ₹{product.price.toLocaleString()}/spot
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
                        <i className="fas fa-check-circle text-teal-500 mr-2"></i>
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
                    Book Radio Advertising
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Spot Duration (seconds)
                      </label>
                      <select
                        value={selectedDuration}
                        onChange={(e) => setSelectedDuration(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="15">15 Seconds</option>
                        <option value="30">30 Seconds</option>
                        <option value="45">45 Seconds</option>
                        <option value="60">60 Seconds</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Campaign Duration (weeks)
                      </label>
                      <select
                        value={campaignLength}
                        onChange={(e) => setCampaignLength(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="1">1 Week</option>
                        <option value="2">2 Weeks</option>
                        <option value="4">1 Month</option>
                        <option value="8">2 Months</option>
                        <option value="12">3 Months</option>
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
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                          {selectedDuration}s spot
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Campaign:</span>
                        <span className="font-medium">
                          {campaignLength} week(s)
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
                        className="flex-1 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
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
                className="text-teal-600 hover:text-teal-700 flex items-center gap-2"
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
        </div>
      </div>

      {/* Detailed Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understanding Radio Advertising
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-6">
                  Radio advertising remains one of the most effective ways to reach audiences during their daily routines. It offers intimate engagement through audio storytelling and reaches listeners during key moments of their day.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
                  <li>High frequency and repetition</li>
                  <li>Targeted local audience reach</li>
                  <li>Cost-effective advertising medium</li>
                  <li>Quick production turnaround</li>
                  <li>Flexibility in scheduling and content</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Target Audience</h3>
                <p className="text-gray-600 mb-6">
                  Radio advertising effectively reaches:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
                  <li>Morning and evening commuters</li>
                  <li>Working professionals</li>
                  <li>Local community members</li>
                  <li>Specific demographic segments</li>
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
                    <p className="text-gray-600">15, 30, 45, 60 seconds</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Format</h4>
                    <p className="text-gray-600">Digital Audio</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Frequency</h4>
                    <p className="text-gray-600">Multiple slots per day</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Coverage</h4>
                    <p className="text-gray-600">City-wide broadcast</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Production Guidelines
              </h3>
              <div className="prose prose-lg">
                <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
                  <li>Professional voice-over talent</li>
                  <li>Clear script and message</li>
                  <li>High-quality audio production</li>
                  <li>Background music and sound effects</li>
                  <li>Call-to-action inclusion</li>
                </ul>
              </div>

              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-teal-900 mb-4">
                  Additional Services
                </h3>
                <ul className="space-y-3 text-teal-800">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Script writing assistance
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Voice talent selection
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Professional audio production
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Campaign performance analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Be Heard?</h3>
              <p className="text-lg text-teal-100 mb-6">
                Let us help you create an engaging radio campaign that resonates with your audience.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors font-medium"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBookNow}
                  className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-400 transition-colors font-medium"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <button className="text-teal-600 hover:text-teal-700 font-medium">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                  "https://via.placeholder.com/800x600?text=Radio+Advertising";
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
    </>
  );
};

export default RadioProductDetail;
