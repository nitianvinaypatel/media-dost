import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Mock data for water bottle branding
const mockWaterBottleData = {
  43: {
    id: 43,
    title: "Corporate Events",
    location: "Mumbai",
    full_address: "Corporate Offices, BKC, Mumbai",
    type: "Corporate Events",
    price: 15000,
    lighting: "Non Lit",
    images: [
      "corporate_bottles1.jpg",
      "corporate_bottles2.jpg",
      "corporate_bottles3.jpg",
      "corporate_bottles4.jpg",
    ],
    description:
      "Custom branded water bottles for corporate events, conferences, and business meetings. Eco-friendly bottles with professional branding that leaves a lasting impression.",
    features: [
      "Custom Logo Printing",
      "Eco-Friendly Materials",
      "Multiple Size Options",
      "Professional Design",
      "Bulk Distribution",
      "Brand Visibility",
    ],
    specifications: {
      quantity: "1000 Bottles Minimum",
      material: "BPA-Free Plastic",
      capacity: "500ml & 1L Options",
      printing: "High-Quality Logo Print",
      delivery: "On-Site Distribution",
    },
  },
  44: {
    id: 44,
    title: "Marathon Events",
    location: "Delhi",
    full_address: "India Gate, Delhi",
    type: "Marathon Events",
    price: 25000,
    lighting: "Non Lit",
    images: [
      "marathon1.jpg",
      "marathon2.jpg",
      "marathon3.jpg",
      "marathon4.jpg",
    ],
    description:
      "Branded water bottles for marathon and sports events. High-visibility branding opportunity with active lifestyle targeting for health and fitness brands.",
    features: [
      "Sports-Grade Bottles",
      "High-Visibility Branding",
      "Event Sponsorship",
      "Athletic Demographics",
      "Mass Distribution",
      "Photo Opportunities",
    ],
    specifications: {
      quantity: "5000+ Bottles",
      material: "Sports-Grade Plastic",
      capacity: "750ml Sports Bottle",
      printing: "Wraparound Branding",
      delivery: "Event Day Distribution",
    },
  },
  45: {
    id: 45,
    title: "Music Festivals",
    location: "Bangalore",
    full_address: "Palace Grounds, Bangalore",
    type: "Music Festivals",
    price: 35000,
    lighting: "Non Lit",
    images: [
      "festival_bottles1.jpg",
      "festival_bottles2.jpg",
      "festival_bottles3.jpg",
      "festival_bottles4.jpg",
    ],
    description:
      "Premium branded water bottles for music festivals and entertainment events. Target young demographics with trendy designs and sustainable materials.",
    features: [
      "Festival-Themed Design",
      "Youth Demographics",
      "Sustainable Materials",
      "Collectible Designs",
      "Social Media Worthy",
      "Multiple Distribution Points",
    ],
    specifications: {
      quantity: "10000+ Bottles",
      material: "Recycled Plastic",
      capacity: "500ml Festival Bottle",
      printing: "Full-Color Graphics",
      delivery: "Multiple Festival Points",
    },
  },
  46: {
    id: 46,
    title: "University Campus",
    location: "Pune",
    full_address: "FC Road, Pune Universities",
    type: "University Campus",
    price: 18000,
    lighting: "Non Lit",
    images: [
      "campus_bottles1.jpg",
      "campus_bottles2.jpg",
      "campus_bottles3.jpg",
      "campus_bottles4.jpg",
    ],
    description:
      "Student-focused branded water bottles for university campuses and educational events. Perfect for reaching young adults and building brand loyalty.",
    features: [
      "Student-Friendly Pricing",
      "Campus-Wide Distribution",
      "Educational Partnerships",
      "Reusable Design",
      "Study-Friendly Size",
      "Brand Ambassador Programs",
    ],
    specifications: {
      quantity: "3000+ Bottles",
      material: "Durable Plastic",
      capacity: "600ml Student Bottle",
      printing: "University Co-branding",
      delivery: "Campus Distribution",
    },
  },
  47: {
    id: 47,
    title: "Trade Shows",
    location: "Chennai",
    full_address: "Chennai Trade Centre",
    type: "Trade Shows",
    price: 22000,
    lighting: "Non Lit",
    images: [
      "trade_show1.jpg",
      "trade_show2.jpg",
      "trade_show3.jpg",
      "trade_show4.jpg",
    ],
    description:
      "Professional branded water bottles for trade shows and business exhibitions. High-impact branding tool for B2B networking and lead generation.",
    features: [
      "Professional B2B Audience",
      "High Network Value",
      "Exhibition Branding",
      "Lead Generation Tool",
      "Premium Finish",
      "Business Card Integration",
    ],
    specifications: {
      quantity: "2000+ Bottles",
      material: "Premium Plastic",
      capacity: "500ml Professional",
      printing: "Corporate Logo + QR Code",
      delivery: "Exhibition Booth",
    },
  },
  48: {
    id: 48,
    title: "Wedding Events",
    location: "Jaipur",
    full_address: "Palace Hotels, Jaipur",
    type: "Wedding Events",
    price: 12000,
    lighting: "Non Lit",
    images: [
      "wedding_bottles1.jpg",
      "wedding_bottles2.jpg",
      "wedding_bottles3.jpg",
      "wedding_bottles4.jpg",
    ],
    description:
      "Elegant branded water bottles for weddings and celebration events. Memorable keepsakes that combine functionality with personalized branding.",
    features: [
      "Elegant Design",
      "Personalized Branding",
      "Wedding Keepsakes",
      "Guest Appreciation",
      "Photo Opportunities",
      "Celebratory Themes",
    ],
    specifications: {
      quantity: "500+ Bottles",
      material: "Premium Glass/Plastic",
      capacity: "330ml Elegant Bottle",
      printing: "Custom Wedding Design",
      delivery: "Wedding Venue",
    },
  },
};

const WaterBottleBrandingProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState("1000");
  const [brandingType, setBrandingType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const productData = mockWaterBottleData[id];
      if (productData) {
        setProduct(productData);
        // Set SEO meta tags
        document.title = `${productData.title} Water Bottle Branding - ${productData.location} | Media Dost`;
        document
          .querySelector('meta[name="description"]')
          ?.setAttribute(
            "content",
            `Enhance your brand visibility with ${productData.type.toLowerCase()} water bottle branding in ${
              productData.full_address
            }. High-impact branding for events and promotions.`
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
    const basePrice = product.price;
    const quantity = parseInt(selectedQuantity);
    const pricePerUnit = basePrice / 1000; // Base price is for 1000 bottles
    return Math.round(pricePerUnit * quantity);
  };

  const handleBookNow = () => {
    if (!eventDate || !brandingType) {
      alert("Please fill in all required fields");
      return;
    }

    const bookingData = {
      productId: product.id,
      productTitle: product.title,
      quantity: selectedQuantity,
      brandingType,
      eventDate,
      totalPrice: calculateTotalPrice(),
      type: "water-bottle-branding",
    };
    console.log("Booking water bottle branding:", bookingData);
    alert(
      "Water bottle branding booking initiated! Our team will contact you shortly."
    );
  };

  const handleAddToCart = () => {
    if (!eventDate || !brandingType) {
      alert("Please fill in all required fields");
      return;
    }

    const cartItem = {
      productId: product.id,
      productTitle: product.title,
      quantity: selectedQuantity,
      brandingType,
      eventDate,
      totalPrice: calculateTotalPrice(),
      type: "water-bottle-branding",
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Loading water bottle branding details...
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
            Branding Package Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The water bottle branding package you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/water-bottle-branding")}
            className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
          >
            Back to Water Bottle Branding
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.title} - Water Bottle Branding | Media Dost</title>
        <meta
          name="description"
          content={`${product.title} in ${product.full_address}. ${product.description}`}
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigate("/water-bottle-branding")}
              className="mb-4 text-cyan-100 hover:text-white transition-colors"
            >
              ← Back to Water Bottle Branding
            </button>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-cyan-100 mt-2">
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
                      "https://via.placeholder.com/600x400?text=Water+Bottle+Branding";
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
                        ? "border-cyan-500"
                        : "border-gray-200"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/150x100?text=Bottle";
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-semibold rounded-full bg-cyan-100 text-cyan-800">
                    Eco-Friendly Branding
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    ₹{product.price.toLocaleString()}/1000 bottles
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Branding Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <i className="fas fa-check-circle text-cyan-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Product Specifications
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
                    Book Bottle Branding
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity (bottles)
                      </label>
                      <select
                        value={selectedQuantity}
                        onChange={(e) => setSelectedQuantity(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="1000">1,000 bottles</option>
                        <option value="2500">2,500 bottles</option>
                        <option value="5000">5,000 bottles</option>
                        <option value="10000">10,000 bottles</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Branding Type
                      </label>
                      <select
                        value={brandingType}
                        onChange={(e) => setBrandingType(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="">Select Branding Type</option>
                        <option value="logo-only">Logo Only</option>
                        <option value="logo-text">Logo + Text</option>
                        <option value="full-wrap">Full Wrap Design</option>
                        <option value="premium">Premium Branding</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Event/Distribution Date
                      </label>
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        min={
                          new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                            .toISOString()
                            .split("T")[0]
                        }
                      />
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">
                          Base Rate (1000 bottles):
                        </span>
                        <span className="font-medium">
                          ₹{product.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Quantity:</span>
                        <span className="font-medium">
                          {parseInt(selectedQuantity).toLocaleString()} bottles
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
                        className="flex-1 bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors font-medium"
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
                className="text-cyan-600 hover:text-cyan-700 flex items-center gap-2"
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
                    <button className="text-cyan-600 hover:text-cyan-700 font-medium">
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
        {showImageModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={`/images/${product.images[selectedImage]}`}
                alt={product.title}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=Water+Bottle+Branding";
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

export default WaterBottleBrandingProductDetail;
