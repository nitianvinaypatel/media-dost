import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const OutdoorProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock product data - in a real app, this would come from an API
  const [product, setProduct] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showMap, setShowMap] = useState(false);

  // Mock data for outdoor advertising products
  const mockProducts = {
    1: {
      id: 1,
      location: "Mumbai",
      full_address: "Andheri East, Mumbai",
      type: "Billboard",
      price: 25000,
      lighting: "Back Lit",
      width: "40",
      height: "20",
      image_1: "billboard1.jpg",
      images: ["billboard1.jpg", "billboard2.jpg", "billboard3.jpg"],
      category: "Outdoor",
    },
    2: {
      id: 2,
      location: "Delhi",
      full_address: "Connaught Place, Delhi",
      type: "Hoarding",
      price: 35000,
      lighting: "LED",
      width: "20",
      height: "40",
      image_1: "hoarding1.jpg",
      images: ["hoarding1.jpg", "hoarding2.jpg", "hoarding3.jpg"],
      category: "Outdoor",
    },
    3: {
      id: 3,
      location: "Bangalore",
      full_address: "MG Road, Bangalore",
      type: "Digital Screen",
      price: 45000,
      lighting: "LED",
      width: "30",
      height: "20",
      image_1: "digital1.jpg",
      images: ["digital1.jpg", "digital2.jpg", "digital3.jpg"],
      category: "Outdoor",
    },
    4: {
      id: 4,
      location: "Mumbai",
      full_address: "Bandra West, Mumbai",
      type: "Unipole",
      price: 15000,
      lighting: "Front Lit",
      width: "20",
      height: "40",
      image_1: "unipole1.jpg",
      images: ["unipole1.jpg", "unipole2.jpg", "unipole3.jpg"],
      category: "Outdoor",
    },
    5: {
      id: 5,
      location: "Chennai",
      full_address: "T. Nagar, Chennai",
      type: "Bus Shelter",
      price: 8000,
      lighting: "Non Lit",
      width: "12",
      height: "6",
      image_1: "bus1.jpg",
      images: ["bus1.jpg", "bus2.jpg", "bus3.jpg"],
      category: "Outdoor",
    },
    6: {
      id: 6,
      location: "Pune",
      full_address: "FC Road, Pune",
      type: "Metro Pillar",
      price: 20000,
      lighting: "Back Lit",
      width: "15",
      height: "8",
      image_1: "metro1.jpg",
      images: ["metro1.jpg", "metro2.jpg", "metro3.jpg"],
      category: "Outdoor",
    },
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const productData = mockProducts[id];
      if (productData) {
        setProduct(productData);
        // Set SEO meta tags
        document.title = `${productData.type} Outdoor Advertising - ${productData.location} | Media Dost`;
        document
          .querySelector('meta[name="description"]')
          ?.setAttribute(
            "content",
            `Enhance your brand visibility with ${productData.type.toLowerCase()} outdoor advertising in ${
              productData.full_address
            }. High-visibility billboard placements at key urban locations.`
          );
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedDate) {
      alert("Please select a start date for your campaign");
      return;
    }

    const cartItem = {
      productId: product.id,
      product: product,
      quantity: quantity,
      startDate: selectedDate,
      totalPrice: product.price * quantity,
    };

    console.log("Adding to cart:", cartItem);
    alert(
      `Added ${product.type} at ${
        product.full_address
      } to cart!\nQuantity: ${quantity} month(s)\nStart Date: ${selectedDate}\nTotal: ₹${(
        product.price * quantity
      ).toLocaleString()}`
    );
  };

  const handleBookNow = () => {
    if (!selectedDate) {
      alert("Please select a start date for your campaign");
      return;
    }

    alert(
      `Proceeding to book ${product.type} at ${
        product.full_address
      }\nDuration: ${quantity} month(s)\nStart Date: ${selectedDate}\nTotal: ₹${(
        product.price * quantity
      ).toLocaleString()}`
    );
  };

  const openImageModal = (index) => {
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Loading outdoor advertising details...
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
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The outdoor advertising option you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/outdoor")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Outdoor Advertising
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {product.type} Outdoor Advertising
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              {product.full_address}
            </p>
            <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mt-4">
              <i className="fas fa-map-signs mr-2"></i>
              Premium Outdoor Location
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
                  className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openImageModal(0)}
                >
                  <div className="flex items-center justify-center h-80">
                    <svg
                      className="w-24 h-24 text-blue-500"
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
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-lg font-medium">
                    <i className="fas fa-map-signs mr-2"></i>
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
                    className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity"
                    onClick={() => openImageModal(index)}
                  >
                    <div className="flex items-center justify-center h-24">
                      <svg
                        className="w-8 h-8 text-blue-500"
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
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-blue-600">
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
                  <i className="fas fa-map-signs text-blue-600 mr-2"></i>
                  {product.type} - {product.full_address}
                </h2>
                <p className="text-gray-700 mb-6">
                  Premium {product.type.toLowerCase()} advertising at{" "}
                  <strong>{product.full_address}</strong> is a powerful way to
                  showcase your brand. Standing tall in prime outdoor locations,{" "}
                  {product.type.toLowerCase()}s ensure maximum visibility and
                  brand impact for your outdoor advertising campaigns.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <i className="fas fa-bullhorn text-blue-600"></i>
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
                  <i className="fas fa-calendar-alt text-blue-600 mr-2"></i>
                  Book Your Outdoor Campaign
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Campaign Start Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration (Months)
                    </label>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {[1, 2, 3, 6, 12].map((month) => (
                        <option key={month} value={month}>
                          {month} Month{month > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      Subtotal ({quantity} month{quantity > 1 ? "s" : ""})
                    </span>
                    <span className="font-semibold text-gray-900">
                      ₹{(product.price * quantity).toLocaleString()}
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
                  >
                    <i className="fas fa-shopping-cart mr-2"></i>
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBookNow}
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <i className="fas fa-bolt mr-2"></i>
                    Book Now
                  </button>
                </div>
              </div>

              {/* Location & Map */}
              <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    <i className="fas fa-map-marker-alt text-blue-600 mr-2"></i>
                    Location
                  </h3>
                  <button
                    onClick={handleMapView}
                    className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
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
                        <button className="text-blue-600 hover:text-blue-700 font-medium">
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

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              What is {product.type} Outdoor Advertising?
            </h1>
            <p className="text-gray-700 mb-8">
              {product.type} outdoor advertising involves the use of
              large-format displays strategically placed in high-traffic outdoor
              locations. These advertising mediums are designed to capture the
              attention of pedestrians, commuters, and drivers, making them an
              excellent choice for brands looking to achieve maximum visibility
              and reach a diverse audience.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Benefits of {product.type} Outdoor Advertising
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>
                <strong>High Visibility:</strong> {product.type}s are designed
                to stand out and be seen from a distance, ensuring maximum
                exposure in outdoor environments.
              </li>
              <li>
                <strong>24/7 Exposure:</strong> Unlike digital ads that can be
                blocked, outdoor advertising provides round-the-clock visibility
                for your brand.
              </li>
              <li>
                <strong>Strategic Placement:</strong> Located in high-traffic
                areas with optimal visibility for maximum audience reach.
              </li>
              <li>
                <strong>Brand Authority:</strong> Large-format outdoor
                advertising enhances brand credibility and creates lasting
                impressions.
              </li>
              <li>
                <strong>Cost-Effective:</strong> Excellent cost per impression
                compared to other advertising mediums.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose {product.type} Advertising for Your Business?
            </h2>
            <p className="text-gray-700 mb-8">
              {product.type} outdoor advertising is an impactful way to boost
              brand awareness and visibility. With strategic placement in prime
              locations, these advertising solutions capture the attention of a
              large audience, making them ideal for both awareness campaigns and
              targeted local marketing.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                <i className="fas fa-handshake mr-2"></i>
                Let Us Help You Dominate the Outdoors
              </h3>
              <p className="text-blue-800">
                At Media Dost, we specialize in crafting impactful outdoor
                advertising campaigns that elevate your brand visibility. Our
                team combines creative design and strategic placement to ensure
                your campaign reaches its target audience effectively. Contact
                us today to discover how outdoor advertising can drive your
                business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understanding Outdoor Advertising
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-6">
                  Outdoor advertising, also known as out-of-home (OOH) advertising, is one of the most effective ways to reach a large audience in public spaces. It includes various formats like billboards, hoardings, transit media, and street furniture.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
                  <li>Wide reach and high visibility in prime locations</li>
                  <li>24/7 exposure to your target audience</li>
                  <li>Cost-effective per impression compared to other media</li>
                  <li>Builds brand awareness and recognition</li>
                  <li>Complements digital marketing strategies</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Target Audience</h3>
                <p className="text-gray-600 mb-6">
                  Outdoor advertising effectively reaches:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
                  <li>Daily commuters and pedestrians</li>
                  <li>Local residents and visitors</li>
                  <li>Business professionals and shoppers</li>
                  <li>Event attendees and tourists</li>
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
                    <h4 className="font-semibold text-gray-900">Dimensions</h4>
                    <p className="text-gray-600">{product.width} x {product.height} ft</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lighting Type</h4>
                    <p className="text-gray-600">{product.lighting}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Viewing Distance</h4>
                    <p className="text-gray-600">50-200 meters</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Visibility</h4>
                    <p className="text-gray-600">24/7</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Design Guidelines
              </h3>
              <div className="prose prose-lg">
                <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
                  <li>High-resolution artwork (minimum 300 DPI)</li>
                  <li>Simple and clear message</li>
                  <li>Large, readable fonts</li>
                  <li>High contrast colors</li>
                  <li>Brand logo prominence</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Additional Services
                </h3>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Creative design assistance
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Installation and maintenance
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Campaign performance tracking
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Regular maintenance reports
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Amplify Your Brand?</h3>
              <p className="text-lg text-blue-100 mb-6">
                Let us help you create an impactful outdoor advertising campaign that drives results.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBookNow}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition-colors font-medium"
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
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg
                className="w-8 h-8"
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

            <div className="bg-blue-300 rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-96 relative">
                <svg
                  className="w-32 h-32 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>

                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
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
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
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

            {product.images.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-3 h-3 rounded-full ${
                      selectedImage === index ? "bg-white" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OutdoorProductDetail;
