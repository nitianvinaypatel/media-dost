import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Mock data for retail mall advertising
const mockProducts = {
  13: {
    id: 13,
    name: "Premium Mall Entrance Display",
    location: "Mumbai",
    full_address: "Phoenix Mills, Lower Parel, Mumbai",
    type: "Mall Entrance",
    price: 45000,
    lighting: "LED",
    width: "20",
    height: "10",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    description: "Premium advertising space at the main entrance of Phoenix Mills, one of Mumbai's most prestigious shopping destinations. High visibility location with maximum footfall during peak shopping hours.",
    features: [
      "Prime Entrance Location",
      "24/7 LED Display",
      "High Footfall Area",
      "Premium Mall Location",
      "Multiple Size Options",
      "Weather Protected",
      "Professional Installation",
      "Regular Maintenance",
      "Flexible Booking Options",
      "Premium Audience"
    ],
    specifications: {
      "Display Size": "20x10 feet",
      "Lighting": "LED Display",
      "Material": "Premium Digital Screen",
      "Duration": "Minimum 30 days",
      "Daily Footfall": "50,000+ visitors",
      "Peak Hours": "11 AM - 9 PM",
      "Visibility": "24/7",
      "Installation": "Included",
      "Maintenance": "Weekly"
    }
  },
  14: {
    id: 14,
    name: "Food Court Advertising Display",
    location: "Delhi",
    full_address: "Select City Walk, Saket, Delhi",
    type: "Food Court",
    price: 35000,
    lighting: "Back Lit",
    width: "15",
    height: "8",
    images: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    description: "Strategic advertising placement in the bustling food court of Select City Walk mall. Capture the attention of diners and shoppers in a high-dwell time environment.",
    features: [
      "High Dwell Time Area",
      "Premium Food Court Location",
      "Captive Audience",
      "Multiple Display Options",
      "Climate Controlled Environment",
      "Professional Installation",
      "Regular Maintenance",
      "Flexible Timing Options",
      "Premium Demographics",
      "High Repeat Exposure"
    ],
    specifications: {
      "Display Size": "15x8 feet",
      "Lighting": "Back Lit Display",
      "Material": "Premium Flex",
      "Duration": "Minimum 30 days",
      "Daily Footfall": "30,000+ visitors",
      "Peak Hours": "12 PM - 10 PM",
      "Visibility": "Mall Hours",
      "Installation": "Included",
      "Maintenance": "Weekly"
    }
  }
};

const RetailMallProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [bookingData, setBookingData] = useState({
    startDate: "",
    duration: "1",
    quantity: 1,
  });

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const productData = mockProducts[id];
      if (productData) {
        setProduct(productData);
        document.title = `${productData.name} - Retail Mall Advertising | Media Dost`;
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  const handleBooking = () => {
    if (!bookingData.startDate) {
      alert("Please select a start date for your campaign");
      return;
    }

    const totalPrice = product.price * parseInt(bookingData.duration) * bookingData.quantity;
    alert(`Booking Details:
Product: ${product.name}
Location: ${product.location}
Start Date: ${bookingData.startDate}
Duration: ${bookingData.duration} month(s)
Quantity: ${bookingData.quantity}
Total Price: ₹${totalPrice.toLocaleString()}`);
  };

  const handleAddToCart = () => {
    if (!bookingData.startDate) {
      alert("Please select a start date for your campaign");
      return;
    }

    const cartItem = {
      productId: product.id,
      product: product,
      quantity: bookingData.quantity,
      startDate: bookingData.startDate,
      duration: bookingData.duration,
      totalPrice: product.price * parseInt(bookingData.duration),
    };

    console.log("Adding to cart:", cartItem);
    alert(
      `Added ${product.type} at ${
        product.full_address
      } to cart!\nDuration: ${bookingData.duration} month(s)\nStart Date: ${
        bookingData.startDate
      }\nTotal: ₹${(product.price * parseInt(bookingData.duration)).toLocaleString()}`
    );
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading retail mall advertising details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">
            The retail mall advertising option you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/retail-mall")}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Retail Mall Ads
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100">
              {product.full_address}
            </p>
            <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mt-4">
              <i className="fas fa-shopping-bag mr-2"></i>
              Premium Mall Location
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side: Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative">
                <div
                  className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  <div className="flex items-center justify-center h-80">
                    <svg
                      className="w-24 h-24 text-purple-500"
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
                  <div className="absolute bottom-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-lg font-medium">
                    <i className="fas fa-shopping-bag mr-2"></i>
                    {product.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-lg text-sm">
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
                    className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity"
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="flex items-center justify-center h-24">
                      <svg
                        className="w-8 h-8 text-purple-500"
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
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-purple-600">
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
                  <i className="fas fa-shopping-bag text-purple-600 mr-2"></i>
                  {product.type} - {product.full_address}
                </h2>
                <p className="text-gray-700 mb-6">{product.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <i className="fas fa-store text-purple-600"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Type</p>
                      <p className="font-semibold text-gray-900">{product.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <i className="fas fa-ruler-combined text-purple-600"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Size</p>
                      <p className="font-semibold text-gray-900">
                        {product.width} X {product.height} ft
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <i className="fas fa-lightbulb text-purple-600"></i>
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
                  <i className="fas fa-calendar-alt text-purple-600 mr-2"></i>
                  Book Your Mall Campaign
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {[1, 2, 3, 6, 12].map((month) => (
                        <option key={month} value={month}>
                          {month} Month{month > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      Subtotal ({bookingData.duration} month
                      {parseInt(bookingData.duration) > 1 ? "s" : ""})
                    </span>
                    <span className="font-semibold text-gray-900">
                      ₹
                      {(
                        product.price *
                        parseInt(bookingData.duration)
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600 mt-1">
                    <span>Price per month</span>
                    <span>₹{product.price.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
                    disabled={!bookingData.startDate}
                  >
                    <i className="fas fa-shopping-cart mr-2"></i>
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBooking}
                    className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                    disabled={!bookingData.startDate}
                  >
                    <i className="fas fa-bolt mr-2"></i>
                    Book Now
                  </button>
                </div>
              </div>

              {/* Location Map */}
              <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    <i className="fas fa-map-marker-alt text-purple-600 mr-2"></i>
                    Location
                  </h3>
                  <button
                    onClick={handleMapView}
                    className="text-purple-600 hover:text-purple-700 flex items-center gap-2"
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
                        <button className="text-purple-600 hover:text-purple-700 font-medium">
                          Get Directions
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Features */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-purple-600 mr-3"
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
            <div className="bg-white p-6 rounded-lg shadow-md">
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
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              What is {product.type} Retail Advertising?
            </h1>
            <p className="text-gray-700 mb-8">
              {product.type} retail advertising involves strategic placement of advertisements
              in high-traffic areas within premium shopping destinations. These advertising
              spaces are designed to capture the attention of shoppers, creating maximum
              impact for your brand in a retail environment where purchase decisions are
              being made.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Benefits of {product.type} Retail Advertising
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>
                <strong>Premium Audience:</strong> Reach shoppers with high purchase intent
                in a premium retail environment.
              </li>
              <li>
                <strong>High Dwell Time:</strong> Capture attention in areas where
                shoppers spend significant time.
              </li>
              <li>
                <strong>Strategic Placement:</strong> Located in high-traffic areas with
                optimal visibility for maximum reach.
              </li>
              <li>
                <strong>Brand Association:</strong> Associate your brand with premium
                retail destinations.
              </li>
              <li>
                <strong>Targeted Exposure:</strong> Reach specific demographic segments
                based on mall location and visitor profile.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose {product.type} Advertising for Your Business?
            </h2>
            <p className="text-gray-700 mb-8">
              {product.type} advertising in retail environments offers unparalleled
              opportunities to influence consumer behavior at the point of purchase.
              With strategic placement in prime locations, these advertising solutions
              ensure your brand message reaches consumers when they are most receptive
              to marketing communications.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-purple-900 mb-4">
                <i className="fas fa-handshake mr-2"></i>
                Partner with Media Dost for Retail Success
              </h3>
              <p className="text-purple-800">
                At Media Dost, we specialize in creating impactful retail advertising
                campaigns that elevate your brand presence. Our team combines strategic
                placement with creative excellence to ensure your campaign achieves
                maximum impact in premium retail environments. Contact us today to
                discover how retail advertising can drive your business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

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
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="max-w-full max-h-[80vh] object-contain"
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
                  onClick={nextImage}
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
        </div>
      )}
    </div>
  );
};

export default RetailMallProductDetail;
