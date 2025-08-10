import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Mock data for event advertising opportunities
const mockEventData = {
  37: {
    id: 37,
    title: "Concert Sponsorship",
    location: "Mumbai",
    full_address: "Phoenix Mills, Mumbai",
    type: "Concert Sponsorship",
    price: 200000,
    lighting: "LED",
    images: ["concert1.jpg", "concert2.jpg", "concert3.jpg", "concert4.jpg"],
    description:
      "Premium concert sponsorship opportunity with major music events featuring international and national artists. Perfect platform for brand visibility among music enthusiasts.",
    features: [
      "Main Stage Branding",
      "Artist Meet & Greet Access",
      "VIP Hospitality Packages",
      "Social Media Promotion",
      "Live Stream Integration",
      "Merchandise Collaboration",
    ],
    specifications: {
      duration: "3-Day Festival",
      audience: "25,000+ Attendees",
      demographics: "18-35 Music Lovers",
      coverage: "National TV & Digital",
      branding: "Multiple Touchpoints",
    },
  },
  38: {
    id: 38,
    title: "Trade Show Booth",
    location: "Delhi",
    full_address: "Pragati Maidan, Delhi",
    type: "Trade Show Booth",
    price: 150000,
    lighting: "Back Lit",
    images: [
      "tradeshow1.jpg",
      "tradeshow2.jpg",
      "tradeshow3.jpg",
      "tradeshow4.jpg",
    ],
    description:
      "Premium trade show booth space at India's largest business exhibition. Connect with industry leaders, potential clients, and business partners.",
    features: [
      "Prime Location Booth",
      "Professional Setup Support",
      "Lead Generation Tools",
      "Business Networking Events",
      "Product Demonstration Space",
      "Digital Lead Capture",
    ],
    specifications: {
      duration: "5-Day Exhibition",
      audience: "15,000+ Business Visitors",
      demographics: "B2B Decision Makers",
      coverage: "Industry Publications",
      branding: "Booth & Directory Listing",
    },
  },
  39: {
    id: 39,
    title: "Festival Branding",
    location: "Bangalore",
    full_address: "Palace Grounds, Bangalore",
    type: "Festival Branding",
    price: 125000,
    lighting: "LED",
    images: [
      "festival1.jpg",
      "festival2.jpg",
      "festival3.jpg",
      "festival4.jpg",
    ],
    description:
      "Cultural festival branding opportunity during Bangalore's premier arts and culture celebration. Reach diverse audience through creative brand integration.",
    features: [
      "Festival Ground Branding",
      "Cultural Event Sponsorship",
      "Art Installation Opportunities",
      "Food Court Presence",
      "Workshop Sponsorship",
      "Digital Content Creation",
    ],
    specifications: {
      duration: "7-Day Festival",
      audience: "50,000+ Culture Enthusiasts",
      demographics: "All Age Groups",
      coverage: "Regional Media Coverage",
      branding: "Creative Integration",
    },
  },
  40: {
    id: 40,
    title: "Sports Event",
    location: "Chennai",
    full_address: "YMCA Ground, Chennai",
    type: "Sports Event",
    price: 175000,
    lighting: "Front Lit",
    images: ["sports1.jpg", "sports2.jpg", "sports3.jpg", "sports4.jpg"],
    description:
      "Major sports event sponsorship with regional cricket tournament featuring emerging and established players. High-energy brand association opportunity.",
    features: [
      "Stadium Perimeter Advertising",
      "Player Jersey Sponsorship",
      "Commentary Box Branding",
      "Live Broadcast Integration",
      "Fan Engagement Activities",
      "Awards Ceremony Presence",
    ],
    specifications: {
      duration: "10-Day Tournament",
      audience: "20,000+ Sports Fans",
      demographics: "Sports Enthusiasts",
      coverage: "Sports Channel Broadcast",
      branding: "Multiple Sports Assets",
    },
  },
  41: {
    id: 41,
    title: "Corporate Event",
    location: "Pune",
    full_address: "Shivaji Nagar, Pune",
    type: "Corporate Event",
    price: 100000,
    lighting: "Back Lit",
    images: [
      "corporate1.jpg",
      "corporate2.jpg",
      "corporate3.jpg",
      "corporate4.jpg",
    ],
    description:
      "Corporate summit and business conference sponsorship targeting industry professionals, entrepreneurs, and thought leaders from across India.",
    features: [
      "Conference Hall Branding",
      "Speaker Session Sponsorship",
      "Networking Event Hosting",
      "Business Card Exchange",
      "Presentation Opportunities",
      "B2B Meeting Facilitation",
    ],
    specifications: {
      duration: "2-Day Conference",
      audience: "5,000+ Professionals",
      demographics: "Business Leaders",
      coverage: "Business Media",
      branding: "Professional Network",
    },
  },
  42: {
    id: 42,
    title: "Product Launch",
    location: "Hyderabad",
    full_address: "Hitex Exhibition Center, Hyderabad",
    type: "Product Launch",
    price: 80000,
    lighting: "LED",
    images: ["launch1.jpg", "launch2.jpg", "launch3.jpg", "launch4.jpg"],
    description:
      "Tech product launch event platform with media coverage, influencer presence, and technology demonstration opportunities for innovative products.",
    features: [
      "Launch Event Management",
      "Media Coverage Coordination",
      "Influencer Invitations",
      "Product Demo Setup",
      "Press Conference Facility",
      "Tech Blogger Network",
    ],
    specifications: {
      duration: "1-Day Launch Event",
      audience: "2,000+ Tech Enthusiasts",
      demographics: "Tech Professionals",
      coverage: "Tech Media & Blogs",
      branding: "Innovation Platform",
    },
  },
};

const FindEventsProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [sponsorshipLevel, setSponsorshipLevel] = useState("silver");
  const [additionalServices, setAdditionalServices] = useState([]);
  const [eventDate, setEventDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const productData = mockEventData[id];
      if (productData) {
        setProduct(productData);
        // Set SEO meta tags
        document.title = `${productData.title} Event Sponsorship - ${productData.location} | Media Dost`;
        document
          .querySelector('meta[name="description"]')
          ?.setAttribute(
            "content",
            `Enhance your brand visibility with ${productData.type.toLowerCase()} event sponsorship in ${
              productData.full_address
            }. High-impact event branding opportunities.`
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

  const sponsorshipMultipliers = {
    bronze: 0.7,
    silver: 1,
    gold: 1.5,
    platinum: 2.5,
    title: 3.5,
  };

  const additionalServiceCosts = {
    "media-coverage": 25000,
    "hospitality-package": 15000,
    "promotional-materials": 10000,
    "social-media-boost": 20000,
    "live-streaming": 30000,
  };

  const calculateTotalPrice = () => {
    if (!product) return 0;
    const basePrice = product.price * sponsorshipMultipliers[sponsorshipLevel];
    const additionalCosts = additionalServices.reduce(
      (total, service) => total + (additionalServiceCosts[service] || 0),
      0
    );
    return Math.round(basePrice + additionalCosts);
  };

  const handleServiceToggle = (service) => {
    setAdditionalServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleBookNow = () => {
    if (!eventDate) {
      alert("Please select an event date");
      return;
    }

    const bookingData = {
      productId: product.id,
      productTitle: product.title,
      sponsorshipLevel,
      additionalServices,
      eventDate,
      totalPrice: calculateTotalPrice(),
      type: "event-sponsorship",
    };
    console.log("Booking event sponsorship:", bookingData);
    alert(
      "Event sponsorship booking initiated! Our events team will contact you shortly."
    );
  };

  const handleAddToCart = () => {
    if (!eventDate) {
      alert("Please select an event date");
      return;
    }

    const cartItem = {
      productId: product.id,
      productTitle: product.title,
      sponsorshipLevel,
      additionalServices,
      eventDate,
      totalPrice: calculateTotalPrice(),
      type: "event-sponsorship",
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading event details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Event Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The event sponsorship opportunity you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/find-events")}
            className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.title} - Event Sponsorship | Media Dost</title>
        <meta
          name="description"
          content={`${product.title} in ${product.full_address}. ${product.description}`}
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate("/find-events")}
              className="mb-4 text-pink-100 hover:text-white transition-colors"
            >
              ← Back to Events
            </button>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-pink-100 mt-2">
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
                      "https://via.placeholder.com/600x400?text=Event+Opportunity";
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
                        ? "border-pink-500"
                        : "border-gray-200"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/150x100?text=Event";
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-semibold rounded-full bg-pink-100 text-pink-800">
                    Event Sponsorship
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    ₹{product.price.toLocaleString()}/event
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Sponsorship Benefits
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <i className="fas fa-check-circle text-pink-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Event Specifications
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
                    Book Event Sponsorship
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sponsorship Level
                      </label>
                      <select
                        value={sponsorshipLevel}
                        onChange={(e) => setSponsorshipLevel(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      >
                        <option value="bronze">Bronze Sponsor (-30%)</option>
                        <option value="silver">Silver Sponsor (Base)</option>
                        <option value="gold">Gold Sponsor (+50%)</option>
                        <option value="platinum">
                          Platinum Sponsor (+150%)
                        </option>
                        <option value="title">Title Sponsor (+250%)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Services
                      </label>
                      <div className="space-y-2">
                        {[
                          {
                            id: "media-coverage",
                            label: "Extended Media Coverage (+₹25,000)",
                          },
                          {
                            id: "hospitality-package",
                            label: "VIP Hospitality Package (+₹15,000)",
                          },
                          {
                            id: "promotional-materials",
                            label: "Promotional Materials (+₹10,000)",
                          },
                          {
                            id: "social-media-boost",
                            label: "Social Media Boost (+₹20,000)",
                          },
                          {
                            id: "live-streaming",
                            label: "Live Streaming Rights (+₹30,000)",
                          },
                        ].map((service) => (
                          <label key={service.id} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={additionalServices.includes(service.id)}
                              onChange={() => handleServiceToggle(service.id)}
                              className="mr-2 text-pink-600 focus:ring-pink-500"
                            />
                            <span className="text-sm text-gray-700">
                              {service.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Event Date
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Base Price:</span>
                        <span className="font-medium">
                          ₹{product.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">
                          Sponsorship Level:
                        </span>
                        <span className="font-medium capitalize">
                          {sponsorshipLevel}
                        </span>
                      </div>
                      {additionalServices.length > 0 && (
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">
                            Additional Services:
                          </span>
                          <span className="font-medium">
                            ₹
                            {additionalServices
                              .reduce(
                                (total, service) =>
                                  total +
                                  (additionalServiceCosts[service] || 0),
                                0
                              )
                              .toLocaleString()}
                          </span>
                        </div>
                      )}
                      <div className="border-t pt-2 flex justify-between items-center">
                        <span className="text-lg font-semibold">
                          Total Cost:
                        </span>
                        <span className="text-xl font-bold text-green-600">
                          ₹{calculateTotalPrice().toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={handleBookNow}
                      disabled={!eventDate}
                      className="w-full bg-pink-600 text-white py-3 px-4 rounded-md hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
                    >
                      <i className="fas fa-calendar-check mr-2"></i>
                      Book Event Sponsorship
                    </button>
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
                className="text-pink-600 hover:text-pink-700 flex items-center gap-2"
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
                    <button className="text-pink-600 hover:text-pink-700 font-medium">
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
              className="flex-1 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors font-medium"
            >
              <i className="fas fa-bolt mr-2"></i>
              Book Now
            </button>
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
                    "https://via.placeholder.com/800x600?text=Event+Opportunity";
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

export default FindEventsProductDetail;
