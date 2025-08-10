import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Mock data for residential advertising with real Indian cities
const mockProducts = {
  1: {
    id: 1,
    name: "Premium Residential Parking Area Branding Package",
    location: "Mumbai",
    full_address: "Hiranandani Gardens, Powai, Mumbai, Maharashtra",
    type: "Parking Area",
    price: 75,
    lighting: "LED",
    width: "Various Sizes",
    height: "Various",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    description: "Comprehensive parking area branding solution in premium residential complex. Package includes pillar wraps, floor graphics, wall branding, and hanging banners. Perfect for maximizing brand exposure in high-footfall residential parking spaces with guaranteed daily visibility to residents and visitors.",
    features: [
      "Multiple Branding Elements",
      "High Dwell Time Location",
      "24/7 LED Illumination",
      "Weather-Resistant Materials",
      "Premium Resident Exposure",
      "Strategic Entry/Exit Placement",
      "Floor Graphics Integration",
      "Pillar Wrap Options",
      "Interactive QR Elements",
      "Regular Maintenance"
    ],
    specifications: {
      "Pillar Wraps": "6x4 feet per pillar",
      "Floor Graphics": "Custom sizes available",
      "Wall Displays": "10x8 feet sections",
      "Hanging Banners": "8x3 feet",
      "Material": "Weather-proof Vinyl & Anti-skid Floor Graphics",
      "Lighting": "LED & Ambient",
      "Duration": "Minimum 90 days",
      "Daily Traffic": "500+ vehicles",
      "Visibility Hours": "24/7",
      "Maintenance": "Bi-weekly cleaning"
    },
    branding_options: {
      "Entry/Exit Points": "LED-lit displays at entry and exit",
      "Parking Pillars": "Wrapped advertising on support pillars",
      "Floor Space": "Anti-skid graphics on walking paths",
      "Wall Spaces": "Large format wall displays",
      "Ceiling Elements": "Hanging banners at key points"
    },
    target_audience: {
      "Primary": "Resident vehicle owners",
      "Secondary": "Visitors and guests",
      "Demographics": "High-income urban families",
      "Exposure Time": "Average 5-10 minutes per visit"
    },
    key_benefits: [
      "Captive audience in high-dwell time area",
      "Multiple touchpoints throughout parking space",
      "Premium resident demographic targeting",
      "24/7 brand visibility",
      "Weather-protected advertising space",
      "Flexible creative options",
      "High impact visual presence",
      "Long-term brand exposure",
      "Cost-effective compared to traditional billboards",
      "Regular maintenance included"
    ],
    design_guidelines: {
      "Visual Elements": "High contrast designs for better visibility",
      "Message Style": "Clear, concise messaging for quick comprehension",
      "Branding Size": "Large logos and text for distance viewing",
      "Color Scheme": "Bold colors with good contrast",
      "Interactive Elements": "QR codes for digital engagement"
    },
    state: "Maharashtra",
    success_stories: [
      {
        "brand": "Luxury Car Launch",
        "campaign": "3-month parking area takeover",
        "results": "28% increase in brand awareness"
      },
      {
        "brand": "Premium Real Estate",
        "campaign": "6-month resident targeting",
        "results": "15 direct property enquiries"
      }
    ]
  },
  2: {
    id: 2,
    name: "Wall Advertisement Space",
    location: "Delhi",
    full_address: "DLF Phase 3, Gurgaon, Delhi NCR",
    type: "Wall Advertisement",
    price: 75,
    lighting: "Back Lit",
    width: "15x10",
    height: "10",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    description: "Strategic wall advertising space in premium residential complex with excellent visibility. Ideal for brand awareness and long-term advertising campaigns.",
    features: [
      "Back Lit Display",
      "Premium Complex",
      "High Visibility",
      "Long Term Display",
      "Professional Installation"
    ],
    specifications: {
      "Display Size": "15x10 feet",
      "Lighting": "Back Lit",
      "Material": "Vinyl with Frame",
      "Duration": "Minimum 30 days",
      "Audience": "Residential community"
    },
    state: "Delhi"
  },
  3: {
    id: 3,
    name: "Notice Board Advertisement",
    location: "Bangalore",
    full_address: "Prestige Shantiniketan, Whitefield, Bangalore",
    type: "Notice Board",
    price: 75,
    lighting: "Non Lit",
    width: "4x3",
    height: "3",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    description: "Community notice board advertising with high resident engagement and trust. Perfect for local businesses and community announcements.",
    features: [
      "High Engagement",
      "Community Focus",
      "Cost Effective",
      "Regular Updates",
      "Trusted Medium"
    ],
    specifications: {
      "Display Size": "4x3 feet",
      "Lighting": "Non Lit",
      "Material": "Digital Print",
      "Duration": "15-30 days",
      "Audience": "Local residents"
    },
    state: "Karnataka"
  },
  4: {
    id: 4,
    name: "Gate and Entrance Branding",
    location: "Hyderabad",
    full_address: "Aparna Sarovar, Gachibowli, Hyderabad",
    type: "Gate and Entrance Branding",
    price: 85,
    lighting: "Front Lit",
    width: "20x5",
    height: "5",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    description: "Prime entrance and gate branding opportunity at luxury residential complex. High impact advertising space visible to all residents and visitors.",
    features: [
      "Premium Entrance Location",
      "High Visibility",
      "Front Lit Display",
      "Customizable Design",
      "24/7 Exposure"
    ],
    specifications: {
      "Display Size": "20x5 feet",
      "Lighting": "Front Lit",
      "Material": "Premium Vinyl",
      "Duration": "Minimum 60 days",
      "Traffic": "2000+ daily views"
    },
    state: "Telangana"
  },
  5: {
    id: 5,
    name: "Flyer Distribution Package",
    location: "Chennai",
    full_address: "Mantri Synergy, OMR, Chennai",
    type: "Flyer Distribution",
    price: 65,
    lighting: "Not Applicable",
    width: "8.3x11.7",
    height: "11.7",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    description: "Direct marketing through flyer distribution in premium residential complex. Reach residents directly with your marketing materials.",
    features: [
      "Targeted Distribution",
      "Door-to-Door Service",
      "Professional Staff",
      "Tracking Reports",
      "Flexible Scheduling"
    ],
    specifications: {
      "Flyer Size": "A4 Standard",
      "Distribution Type": "Door-to-Door",
      "Coverage": "100% Units",
      "Duration": "1-7 days",
      "Reach": "1500+ households"
    },
    state: "Tamil Nadu"
  },
  6: {
    id: 6,
    name: "Playground and Garden Area Display",
    location: "Pune",
    full_address: "Blue Ridge Township, Hinjewadi, Pune",
    type: "Playground and Garden Area Ads",
    price: 80,
    lighting: "Solar LED",
    width: "12x6",
    height: "6",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    description: "Strategic advertising placement in residential playground and garden areas. Perfect for family-oriented brands and products.",
    features: [
      "Family Environment",
      "High Dwell Time",
      "Solar Powered",
      "Weather Protected",
      "Green Initiative"
    ],
    specifications: {
      "Display Size": "12x6 feet",
      "Lighting": "Solar LED",
      "Material": "Eco-friendly Vinyl",
      "Duration": "Monthly",
      "Audience": "Families & Children"
    },
    state: "Maharashtra"
  },
  7: {
    id: 7,
    name: "Elevator Display Advertising",
    location: "Kolkata",
    full_address: "South City Residency, Prince Anwar Shah Road, Kolkata",
    type: "Elevator Display",
    price: 70,
    lighting: "LED",
    width: "3x2",
    height: "2",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    description: "Captive audience advertising through elevator displays. High-impact digital screens in premium residential towers.",
    features: [
      "Digital Display",
      "Captive Audience",
      "Multiple Locations",
      "Dynamic Content",
      "High Frequency"
    ],
    specifications: {
      "Screen Size": "3x2 feet",
      "Display Type": "Digital LED",
      "Resolution": "4K",
      "Duration": "Weekly/Monthly",
      "Views": "5000+ daily"
    },
    state: "West Bengal"
  },
  8: {
    id: 8,
    name: "Community Center Advertising",
    location: "Ahmedabad",
    full_address: "Safal Parisar, Prahlad Nagar, Ahmedabad",
    type: "Community Center",
    price: 90,
    lighting: "Ambient",
    width: "8x4",
    height: "4",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    description: "Premium advertising space in residential community center. Target residents during social gatherings and community events.",
    features: [
      "Social Hub Location",
      "Event Integration",
      "High Engagement",
      "Premium Audience",
      "Flexible Display"
    ],
    specifications: {
      "Display Size": "8x4 feet",
      "Location": "Main Hall",
      "Material": "Premium Print",
      "Duration": "Event-based/Monthly",
      "Footfall": "300+ daily"
    },
    state: "Gujarat"
  },
  9: {
    id: 9,
    name: "Mailbox Area Advertisement",
    location: "Noida",
    full_address: "ATS One Hamlet, Sector 104, Noida",
    type: "Mailbox Area",
    price: 60,
    lighting: "LED",
    width: "6x4",
    height: "4",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    description: "Strategic advertising placement in residential mailbox areas. Guaranteed daily visibility to all residents.",
    features: [
      "Daily Exposure",
      "Guaranteed Views",
      "LED Illumination",
      "Premium Location",
      "High Traffic Area"
    ],
    specifications: {
      "Display Size": "6x4 feet",
      "Lighting": "LED",
      "Material": "High-grade Vinyl",
      "Duration": "Monthly",
      "Reach": "All residents"
    },
    state: "Uttar Pradesh"
  },
  10: {
    id: 10,
    name: "Gym and Fitness Center Display",
    location: "Gurgaon",
    full_address: "M3M Golfestate, Sector 65, Gurgaon",
    type: "Fitness Center",
    price: 85,
    lighting: "LED",
    width: "10x5",
    height: "5",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    description: "Premium advertising space in residential gym and fitness center. Target health-conscious residents during their workout sessions.",
    features: [
      "Health-focused Audience",
      "Premium Environment",
      "Extended Exposure",
      "Digital Integration",
      "Lifestyle Setting"
    ],
    specifications: {
      "Display Size": "10x5 feet",
      "Display Type": "LED Screen",
      "Material": "Digital Display",
      "Duration": "Quarterly",
      "Audience": "Fitness enthusiasts"
    },
    state: "Haryana"
  }
};

const ResidentialProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [bookingData, setBookingData] = useState({
    startDate: "",
    duration: "1",
    quantity: 1,
  });

  useEffect(() => {
    const foundProduct = mockProducts[id];
    if (foundProduct) {
      setProduct(foundProduct);
      document.title = `${foundProduct.name} - Residential Advertising | Media Dost`;
    }
  }, [id]);

  const handleBooking = () => {
    const totalPrice = product.price * parseInt(bookingData.duration) * bookingData.quantity;
    alert(`Booking Details:
Product: ${product.name}
Location: ${product.location}, ${product.state}
Start Date: ${bookingData.startDate}
Duration: ${bookingData.duration} month(s)
Quantity: ${bookingData.quantity}
Total Price: ₹${totalPrice.toLocaleString()}`);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleMapView = () => {
    setShowMap(true);
  };

  const closeMap = () => {
    setShowMap(false);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate("/residential")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Back to Residential Ads
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/residential")}
              className="flex items-center text-green-600 hover:text-green-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Residential Ads
            </button>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-green-600 transition-colors">
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-green-600 transition-colors">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative">
              <div
                className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-green-200 to-green-300 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                <div className="flex items-center justify-center h-80">
                  <svg
                    className="w-24 h-24 text-green-500"
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
                <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-lg font-medium">
                  <i className="fas fa-building mr-2"></i>
                  {product.type}
                </div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
                  <i className="fas fa-lightbulb mr-1"></i>
                  {product.lighting}
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-green-200 to-green-300 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="flex items-center justify-center h-24">
                    <svg
                      className="w-8 h-8 text-green-500"
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

            {/* Price */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-green-600">
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
                <i className="fas fa-building text-green-600 mr-2"></i>
                {product.type} - {product.full_address}
              </h2>
              <p className="text-gray-700 mb-6">
                Premium {product.type.toLowerCase()} advertising at{" "}
                <strong>{product.full_address}</strong> is a powerful way to
                showcase your brand. Located in prime residential locations,{" "}
                {product.type.toLowerCase()} ensures maximum visibility and
                brand impact for your residential advertising campaigns.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="bg-green-100 p-2 rounded-full">
                    <i className="fas fa-bullhorn text-green-600"></i>
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
                      {product.width} X {product.height} ft
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="bg-green-100 p-2 rounded-full">
                    <i className="fas fa-lightbulb text-green-600"></i>
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
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Book This Space
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration (months)
                  </label>
                  <select
                    value={bookingData.duration}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        duration: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="1">1 Month</option>
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                    <option value="12">12 Months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() =>
                        setBookingData({
                          ...bookingData,
                          quantity: Math.max(1, bookingData.quantity - 1),
                        })
                      }
                      className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    </button>
                    <span className="font-semibold text-lg w-12 text-center">
                      {bookingData.quantity}
                    </span>
                    <button
                      onClick={() =>
                        setBookingData({
                          ...bookingData,
                          quantity: bookingData.quantity + 1,
                        })
                      }
                      className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Cost:</span>
                  <span className="text-2xl font-bold text-green-600">
                    ₹
                    {(
                      product.price *
                      parseInt(bookingData.duration) *
                      bookingData.quantity
                    ).toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handleBooking}
                disabled={!bookingData.startDate}
                className="w-full mt-4 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Book Now
              </button>
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
                  <svg
                    className="w-5 h-5 text-green-600 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
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

        {/* Location Map */}
        <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Location</h3>
            <button
              onClick={handleMapView}
              className="text-green-600 hover:text-green-700 flex items-center gap-2"
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
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer" onClick={handleMapView}>
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
                    <p className="text-sm mt-2">Location: {product.location}, {product.state}</p>
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
                  <button className="text-green-600 hover:text-green-700 font-medium">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Specific Additional Information */}
        {product.branding_options && (
          <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Branding Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.branding_options).map(([key, value]) => (
                <div key={key} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">{key}</h4>
                    <p className="text-gray-600">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {product.target_audience && (
          <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Target Audience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.target_audience).map(([key, value]) => (
                <div key={key} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">{key}</h4>
                    <p className="text-gray-600">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {product.key_benefits && (
          <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.key_benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {product.design_guidelines && (
          <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(product.design_guidelines).map(([key, value]) => (
                <div key={key} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">{key}</h4>
                    <p className="text-gray-600">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {product.success_stories && (
          <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.success_stories.map((story, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">{story.brand}</h4>
                  <p className="text-gray-600 mb-2">{story.campaign}</p>
                  <p className="text-green-600 font-medium">{story.results}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Image Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
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
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="max-w-full max-h-[80vh] object-contain"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiNGM0Y0RjYiLz48L3N2Zz4=";
                  }}
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
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
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2 p-4 bg-gray-100">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        selectedImage === index ? "bg-green-600" : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Description Section */}
      <section className="py-16 bg-white mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              What is {product.type} Residential Advertising?
            </h1>
            <p className="text-gray-700 mb-8">
              {product.type} residential advertising involves strategic placement of
              advertising mediums in high-traffic residential locations. These
              advertising solutions are designed to capture the attention of residents,
              visitors, and the local community, making them an excellent choice for
              brands looking to achieve maximum visibility and reach a targeted audience.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Benefits of {product.type} Residential Advertising
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>
                <strong>Targeted Reach:</strong> {product.type}s are strategically placed
                to reach specific residential demographics.
              </li>
              <li>
                <strong>High Engagement:</strong> Residential advertising provides
                extended exposure time with your target audience.
              </li>
              <li>
                <strong>Premium Locations:</strong> Placed in upscale residential
                complexes for maximum impact.
              </li>
              <li>
                <strong>Community Trust:</strong> Association with premium residential
                spaces enhances brand credibility.
              </li>
              <li>
                <strong>Cost-Effective:</strong> Excellent value for targeted local
                marketing campaigns.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose {product.type} Advertising for Your Business?
            </h2>
            <p className="text-gray-700 mb-8">
              {product.type} residential advertising offers a unique opportunity to
              connect with your target audience in their living environment. With
              strategic placement in premium residential complexes, these advertising
              solutions provide sustained exposure to a captive audience, making them
              ideal for both brand awareness and local marketing campaigns.
            </p>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-green-900 mb-4">
                <i className="fas fa-handshake mr-2"></i>
                Partner with Media Dost for Residential Advertising Success
              </h3>
              <p className="text-green-800">
                At Media Dost, we specialize in creating impactful residential
                advertising campaigns that connect with your target audience. Our team
                combines strategic placement with creative excellence to ensure your
                campaign achieves maximum impact. Contact us today to discover how
                residential advertising can elevate your brand presence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResidentialProductDetail;
