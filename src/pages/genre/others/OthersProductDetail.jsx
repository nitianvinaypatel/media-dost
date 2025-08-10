import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OthersProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    startDate: "",
    duration: "1",
    quantity: 1,
  });
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  // Mock product data - in real app, fetch from API based on id
  const mockProducts = {
    67: {
      id: 67,
      name: "Guerrilla Marketing Campaign",
      location: "Mumbai",
      full_address: "Various Strategic Locations, Mumbai",
      type: "Guerrilla Marketing",
      price: 45000,
      lighting: "Non Lit",
      width: "Custom",
      height: "Custom",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
      ],
      description:
        "Creative guerrilla marketing campaign with unconventional advertising tactics that create memorable brand experiences in unexpected locations.",
      features: [
        "Unconventional Advertising",
        "High Brand Recall",
        "Viral Marketing Potential",
        "Creative Campaign Design",
        "Strategic Location Selection",
      ],
      specifications: {
        "Campaign Type": "Guerrilla Marketing",
        Duration: "Custom",
        Coverage: "Multiple Locations",
        Audience: "General Public",
        Execution: "Professional Team",
      },
    },
    68: {
      id: 68,
      name: "Street Art Advertising",
      location: "Delhi",
      full_address: "Select Creative Venues, Delhi",
      type: "Street Art",
      price: 35000,
      lighting: "Non Lit",
      width: "Variable",
      height: "Variable",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description:
        "Artistic street advertising that blends creativity with brand messaging to create visually striking and culturally relevant brand experiences.",
      features: [
        "Artistic Expression",
        "Cultural Integration",
        "Visual Impact",
        "Local Community Engagement",
        "Sustainable Materials",
      ],
      specifications: {
        "Art Type": "Street Art",
        Medium: "Wall Murals",
        Duration: "3-6 months",
        Audience: "Urban Youth",
        Permits: "Included",
      },
    },
    69: {
      id: 69,
      name: "Flash Mob Marketing",
      location: "Bangalore",
      full_address: "Public Spaces & Malls, Bangalore",
      type: "Flash Mob",
      price: 55000,
      lighting: "Non Lit",
      width: "Performance Area",
      height: "Performance Area",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
      ],
      description:
        "Coordinated flash mob performances that integrate brand messaging with entertainment to create buzz and social media engagement.",
      features: [
        "Performance Marketing",
        "Social Media Buzz",
        "Crowd Engagement",
        "Video Content Creation",
        "Professional Performers",
      ],
      specifications: {
        "Performance Type": "Choreographed Flash Mob",
        Duration: "5-10 minutes",
        Participants: "15-30 performers",
        Audience: "Shoppers & Passersby",
        Recording: "Professional Video",
      },
    },
    70: {
      id: 70,
      name: "Sand Art Advertising",
      location: "Chennai",
      full_address: "Marina Beach & Public Parks, Chennai",
      type: "Sand Art",
      price: 25000,
      lighting: "Non Lit",
      width: "Large Format",
      height: "Ground Level",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description:
        "Artistic sand sculptures and installations that create temporary but impactful brand messaging in high-traffic recreational areas.",
      features: [
        "Eco-Friendly Art",
        "Beach Location Advantage",
        "Photography Opportunities",
        "Temporary Installation",
        "Weather Dependent",
      ],
      specifications: {
        "Art Medium": "Sand Sculpture",
        Size: "15x10 feet typical",
        Duration: "3-7 days",
        Audience: "Beach Visitors",
        Documentation: "Photo/Video",
      },
    },
    71: {
      id: 71,
      name: "Campus Marketing Program",
      location: "Pune",
      full_address: "Engineering & Management Colleges, Pune",
      type: "Campus Marketing",
      price: 30000,
      lighting: "Non Lit",
      width: "Campus Wide",
      height: "Campus Wide",
      images: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
      description:
        "Targeted campus marketing program reaching college students through events, sponsorships, and interactive brand activations.",
      features: [
        "Student Targeting",
        "Campus Event Integration",
        "Brand Ambassador Program",
        "Social Media Activation",
        "Educational Institution Network",
      ],
      specifications: {
        "Target Audience": "College Students",
        "Campaign Duration": "1-3 months",
        "Colleges Covered": "5-10 institutions",
        Activities: "Events & Activations",
        "Student Reach": "10,000+ students",
      },
    },
    72: {
      id: 72,
      name: "Ambient Advertising Display",
      location: "Hyderabad",
      full_address: "HITEC City & Gachibowli, Hyderabad",
      type: "Ambient Advertising",
      price: 40000,
      lighting: "LED",
      width: "Environment Specific",
      height: "Environment Specific",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
      ],
      description:
        "Innovative ambient advertising that transforms everyday environments into brand communication spaces using creative installations.",
      features: [
        "Environmental Integration",
        "Creative Installations",
        "LED Enhancement",
        "Tech Hub Location",
        "Professional Execution",
      ],
      specifications: {
        "Installation Type": "Ambient Display",
        Technology: "LED Integration",
        Duration: "1-6 months",
        Audience: "IT Professionals",
        Maintenance: "Included",
      },
    },
  };

  useEffect(() => {
    const foundProduct = mockProducts[id];
    if (foundProduct) {
      setProduct(foundProduct);
      // Set SEO meta tags
      document.title = `${foundProduct.name} - Creative Advertising | Media Dost`;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute(
          "content",
          `${foundProduct.name} in ${foundProduct.full_address}. ${foundProduct.description}`
        );
    }
    setLoading(false);
  }, [id]);

  const handleBooking = () => {
    if (!bookingData.startDate) {
      alert("Please select a start date");
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

  const handleAddToCart = () => {
    if (!bookingData.startDate) {
      alert("Please select a start date");
      return;
    }

    const cartItem = {
      productId: product.id,
      productName: product.name,
      startDate: bookingData.startDate,
      duration: bookingData.duration,
      quantity: bookingData.quantity,
      totalPrice:
        product.price * parseInt(bookingData.duration) * bookingData.quantity,
      type: "creative-advertising",
    };

    console.log("Adding to cart:", cartItem);
    alert("Added to cart successfully!");
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading creative advertising details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Campaign Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The creative advertising campaign you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/others")}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Back to Creative Advertising
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} - Creative Advertising | Media Dost</title>
        <meta
          name="description"
          content={`${product.name} in ${product.full_address}. ${product.description}`}
        />
      </Helmet>

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/others")}
              className="flex items-center text-gray-600 hover:text-gray-700 transition-colors"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Creative Advertising
            </button>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-600 transition-colors">
                <i className="fas fa-share-alt"></i>
              </button>
              <button className="text-gray-600 hover:text-gray-600 transition-colors">
                <i className="fas fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg cursor-pointer"
                onClick={() => setShowModal(true)}
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNMzgwIDI4MEw0MjAgMzIwTDQ2MCAyODBNMzgwIDMyMEw0MjAgMjgwTDQ2MCAzMjAiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=";
                }}
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </>
              )}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                {selectedImage + 1} / {product.images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer flex-shrink-0 ${
                      index === selectedImage ? "ring-2 ring-gray-500" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iODAiIGZpbGw9IiNGM0Y0RjYiLz48L3N2Zz4=";
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <i className="fas fa-map-marker-alt mr-2 text-gray-600"></i>
                <span>{product.full_address}</span>
              </div>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.type}
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.lighting}
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  Creative Campaign
                </span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-gray-600">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-gray-600 ml-2">per campaign</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">
                    Creative Advertising
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    Custom Execution
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Book This Campaign
              </h3>
              <div className="space-y-4">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Campaign Duration (months)
                  </label>
                  <select
                    value={bookingData.duration}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        duration: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
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
                      <i className="fas fa-minus"></i>
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
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Cost:</span>
                  <span className="text-2xl font-bold text-gray-600">
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
                className="w-full mt-4 bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Book Campaign
              </button>
            </div>
          </div>
        </div>

        {/* Features & Specifications */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Features */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Campaign Features
            </h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check-circle text-gray-600 mr-3"></i>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Campaign Specifications
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

        {/* Location */}
        <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <i className="fas fa-map-marked-alt text-4xl mb-2"></i>
              <p>Campaign Area Map</p>
              <p className="text-sm">{product.full_address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
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
    </>
  );
};

export default OthersProductDetail;
