import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TransitProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [bookingData, setBookingData] = useState({
    startDate: "",
    duration: "1",
    quantity: 1,
  });

  // Mock product data - in real app, fetch from API based on id
  const mockProducts = {
    19: {
      id: 19,
      name: "Metro Station Digital Display",
      location: "MG Road Metro",
      full_address: "MG Road Metro Station, Bangalore",
      type: "Metro Station",
      price: 35000,
      lighting: "Digital LED",
      width: "20x12",
      height: "12",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
      ],
      description:
        "Premium digital display at high-traffic metro station with 100,000+ daily commuters and excellent brand visibility.",
      features: [
        "Digital LED Display",
        "High Commuter Traffic",
        "Prime Location",
        "24/7 Visibility",
        "Metro Branding",
      ],
      specifications: {
        "Display Size": "20x12 feet",
        Technology: "Full HD LED",
        "Daily Commuters": "100,000+",
        "Peak Hours": "7-10 AM, 5-8 PM",
        Location: "Platform Area",
      },
    },
    20: {
      id: 20,
      name: "Bus Stop Shelter Ad",
      location: "Silk Board",
      full_address: "Silk Board Junction, Bangalore",
      type: "Bus Stop",
      price: 12000,
      lighting: "Illuminated",
      width: "10x6",
      height: "6",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description:
        "Strategic bus stop advertising with high visibility to commuters and vehicular traffic at major junction.",
      features: [
        "Bus Stop Shelter",
        "High Traffic Junction",
        "Illuminated Display",
        "Weather Protected",
        "Commuter Focus",
      ],
      specifications: {
        "Display Size": "10x6 feet",
        Lighting: "LED Illuminated",
        Location: "Major Junction",
        Traffic: "Heavy vehicular",
        Commuters: "5000+ daily",
      },
    },
    21: {
      id: 21,
      name: "Airport Terminal Display",
      location: "Kempegowda Airport",
      full_address: "Kempegowda International Airport, Bangalore",
      type: "Airport Terminal",
      price: 75000,
      lighting: "Digital LED",
      width: "25x15",
      height: "15",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
      ],
      description:
        "Premium airport terminal advertising with high-value audience targeting business travelers and tourists with maximum brand exposure.",
      features: [
        "International Airport",
        "Business Traveler Audience",
        "24/7 Digital Display",
        "Premium Location",
        "High Dwell Time",
      ],
      specifications: {
        "Display Size": "25x15 feet",
        Technology: "4K Digital LED",
        "Daily Passengers": "50,000+",
        "Peak Hours": "5-9 AM, 6-10 PM",
        Location: "Departure/Arrival Hall",
      },
    },
    22: {
      id: 22,
      name: "Railway Station Platform",
      location: "Bangalore City Station",
      full_address: "Krantiveera Sangolli Rayanna Railway Station",
      type: "Railway Station",
      price: 45000,
      lighting: "Illuminated",
      width: "15x10",
      height: "10",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description:
        "Strategic railway station platform advertising targeting long-distance travelers and daily commuters with extended viewing time.",
      features: [
        "Railway Platform",
        "Long Dwell Time",
        "Illuminated Display",
        "Daily Commuters",
        "Tourist Traffic",
      ],
      specifications: {
        "Display Size": "15x10 feet",
        Lighting: "LED Backlit",
        "Daily Passengers": "80,000+",
        "Peak Hours": "6-10 AM, 4-8 PM",
        Location: "Platform 1 & 2",
      },
    },
    23: {
      id: 23,
      name: "Taxi Top Advertisement",
      location: "City Wide",
      full_address: "Bangalore City Taxi Fleet",
      type: "Taxi Top",
      price: 8000,
      lighting: "Non Lit",
      width: "4x2",
      height: "2",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description:
        "Mobile taxi top advertising providing citywide brand visibility with continuous movement through high-traffic areas and business districts.",
      features: [
        "Mobile Advertising",
        "City Wide Coverage",
        "Cost-Effective",
        "High Frequency",
        "Business District Coverage",
      ],
      specifications: {
        "Display Size": "4x2 feet",
        Lighting: "Reflective Material",
        "Fleet Size": "100+ Taxis",
        Coverage: "Entire City",
        "Operating Hours": "24/7",
      },
    },
    24: {
      id: 24,
      name: "Auto Rickshaw Back Panel",
      location: "City Wide",
      full_address: "Bangalore Auto Rickshaw Network",
      type: "Auto Rickshaw",
      price: 3000,
      lighting: "Non Lit",
      width: "3x2",
      height: "2",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description:
        "Affordable auto rickshaw back panel advertising providing widespread local visibility with frequent stops and local area penetration.",
      features: [
        "Local Area Focus",
        "Budget-Friendly",
        "High Frequency",
        "Community Reach",
        "Flexible Coverage",
      ],
      specifications: {
        "Display Size": "3x2 feet",
        Lighting: "Vinyl Graphics",
        "Fleet Size": "500+ Autos",
        Coverage: "Local Areas",
        "Operating Hours": "16 hours daily",
      },
    },
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const productData = mockProducts[id];
      if (productData) {
        setProduct(productData);
        document.title = `${productData.name} - Transit Advertising | Media Dost`;
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  const handleBooking = () => {
    if (!bookingData.startDate) {
      alert("Please select a start date for your campaign");
      return;
    }

    const totalPrice =
      product.price * parseInt(bookingData.duration) * bookingData.quantity;
    alert(`Booking Details:
Product: ${product.name}
Start Date: ${bookingData.startDate}
Duration: ${bookingData.duration} month(s)
Quantity: ${bookingData.quantity}
Total Price: ₹${totalPrice.toLocaleString()}`);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading transit advertising details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The transit advertising option you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/transit")}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Back to Transit Advertising
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl text-red-100">
              {product.full_address}
            </p>
            <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mt-4">
              <i className="fas fa-subway mr-2"></i>
              Premium Transit Location
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-red-200 to-red-300 rounded-lg overflow-hidden">
                <div className="flex items-center justify-center h-80">
                  <svg
                    className="w-24 h-24 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-lg font-medium">
                  <i className="fas fa-subway mr-2"></i>
                  {product.type}
                </div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
                  <i className="fas fa-lightbulb mr-1"></i>
                  {product.lighting}
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-red-200 to-red-300 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity"
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="flex items-center justify-center h-24">
                      <svg
                        className="w-8 h-8 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Price */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-red-600">
                    <i className="fas fa-tag mr-2"></i>₹
                    {product.price.toLocaleString()}
                  </span>
                  <span className="text-gray-600 ml-2">Per Month</span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Starting from</p>
                  <p className="text-lg font-semibold text-gray-900">
                    Minimum 1 Month
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="space-y-8">
            {/* Product Info */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <i className="fas fa-subway text-red-600 mr-2"></i>
                {product.name}
              </h2>
              <p className="text-gray-700 mb-6">
                {product.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                  <div className="bg-red-100 p-2 rounded-full">
                    <i className="fas fa-subway text-red-600"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="font-semibold text-gray-900">
                      {product.type}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="bg-green-100 p-2 rounded-full">
                    <i className="fas fa-ruler-combined text-green-600"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Size</p>
                    <p className="font-semibold text-gray-900">
                      {product.width} ft
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <i className="fas fa-lightbulb text-yellow-600"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Lighting</p>
                    <p className="font-semibold text-gray-900">
                      {product.lighting}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <i className="fas fa-calendar-alt text-red-600 mr-2"></i>
                Book Your Transit Campaign
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Campaign Start Date
                  </label>
                  <input
                    type="date"
                    value={bookingData.startDate}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        startDate: e.target.value,
                      })
                    }
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration (Months)
                  </label>
                  <select
                    value={bookingData.duration}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        duration: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="1">1 Month</option>
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                    <option value="12">12 Months</option>
                  </select>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">
                    Subtotal ({bookingData.duration} month
                    {parseInt(bookingData.duration) > 1 ? "s" : ""})
                  </span>
                  <span className="font-semibold text-gray-900">
                    ₹
                    {(
                      product.price *
                      parseInt(bookingData.duration) *
                      bookingData.quantity
                    ).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600 mt-1">
                  <span>Price per month</span>
                  <span>₹{product.price.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleBooking}
                disabled={!bookingData.startDate}
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <i className="fas fa-bolt mr-2"></i>
                Book Now
              </button>
            </div>

            {/* Location - Keeping existing implementation */}
            <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <i className="fas fa-map-marked-alt text-4xl mb-2"></i>
                  <p>Interactive Map</p>
                  <p className="text-sm">{product.full_address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Specifications */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Features */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check-circle text-red-600 mr-3"></i>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Specifications
            </h3>
            <dl className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <dt className="text-gray-600">{key}:</dt>
                  <dd className="font-medium text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-12 bg-white p-8 rounded-lg border border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Transit Advertising Information
            </h2>

            {/* What is Transit Advertising */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What is Transit Advertising?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Transit advertising is a dynamic form of out-of-home advertising that utilizes various transit media platforms to reach commuters and urban audiences. This includes advertising spaces in metro stations, bus stops, railway platforms, and other transit hubs where large numbers of people gather and move through daily.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-3">
                    <i className="fas fa-users mr-2"></i>
                    Target Audience
                  </h4>
                  <ul className="space-y-2 text-red-800">
                    <li>• Daily Commuters</li>
                    <li>• Business Professionals</li>
                    <li>• Urban Residents</li>
                    <li>• Tourists and Visitors</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-3">
                    <i className="fas fa-chart-line mr-2"></i>
                    Key Benefits
                  </h4>
                  <ul className="space-y-2 text-red-800">
                    <li>• High Frequency Exposure</li>
                    <li>• Captive Audience</li>
                    <li>• Geographic Targeting</li>
                    <li>• Cost-Effective Reach</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Types of Transit Advertising */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Types of Transit Advertising
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-red-500 transition-colors">
                  <div className="text-red-600 mb-3">
                    <i className="fas fa-subway text-3xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Metro Station Displays</h4>
                  <p className="text-gray-600 text-sm">
                    Digital and static displays throughout metro stations, targeting urban commuters.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-red-500 transition-colors">
                  <div className="text-red-600 mb-3">
                    <i className="fas fa-bus text-3xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Bus Stop Shelters</h4>
                  <p className="text-gray-600 text-sm">
                    Illuminated displays at bus stops, reaching waiting passengers and passersby.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-red-500 transition-colors">
                  <div className="text-red-600 mb-3">
                    <i className="fas fa-train text-3xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Railway Platforms</h4>
                  <p className="text-gray-600 text-sm">
                    Large format displays on railway platforms for maximum visibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Transit Advertising */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Transit Advertising?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    <i className="fas fa-bullseye text-red-600 mr-2"></i>
                    Targeted Reach
                  </h4>
                  <p className="text-gray-700 mb-6">
                    Transit advertising allows you to reach specific geographic areas and demographic groups with precision. Target commuters in business districts, shopping areas, or residential zones based on your campaign objectives.
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    <i className="fas fa-clock text-red-600 mr-2"></i>
                    Extended Exposure
                  </h4>
                  <p className="text-gray-700">
                    Benefit from prolonged exposure as commuters spend significant time waiting at stations and stops. This creates multiple opportunities for your message to be seen and remembered.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    <i className="fas fa-chart-bar text-red-600 mr-2"></i>
                    Measurable Impact
                  </h4>
                  <p className="text-gray-700 mb-6">
                    Track your campaign's performance through footfall data, engagement metrics, and conversion tracking. Our analytics help you understand your ROI and optimize future campaigns.
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    <i className="fas fa-money-bill-wave text-red-600 mr-2"></i>
                    Cost-Effective
                  </h4>
                  <p className="text-gray-700">
                    Get excellent value for your advertising budget with competitive CPM rates and high-frequency exposure to your target audience.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Start Your Transit Advertising Campaign?
                </h3>
                <p className="text-lg text-red-100 mb-6">
                  Let us help you create an impactful transit advertising campaign that delivers results.
                </p>
                <button
                  onClick={handleBooking}
                  className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                >
                  <i className="fas fa-rocket mr-2"></i>
                  Start Your Campaign
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <section className="py-16 bg-white mt-12 rounded-lg border border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Transit Advertising?
              </h2>
              <p className="text-gray-700 mb-8">
                Transit advertising offers unparalleled exposure to a diverse and captive audience. 
                With strategic placement in high-traffic transit locations, your brand message reaches 
                commuters during their daily journeys, ensuring maximum visibility and impact.
              </p>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-red-900 mb-4">
                  <i className="fas fa-handshake mr-2"></i>
                  Partner with Media Dost for Transit Success
                </h3>
                <p className="text-red-800">
                  Let us help you create impactful transit advertising campaigns that connect with 
                  your target audience. Our expertise in transit media ensures your message reaches 
                  the right people at the right time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Image Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiNGM0Y0RjYiLz48L3N2Zz4=";
              }}
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TransitProductDetail;
