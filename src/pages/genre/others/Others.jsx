import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Mock data for other advertising options
const mockProducts = [
  {
    id: 67,
    location: "Mumbai",
    full_address: "Various Locations, Mumbai",
    type: "Guerrilla Marketing",
    price: 45000,
    lighting: "Non Lit",
    image_1: "guerrilla1.jpg",
  },
  {
    id: 68,
    location: "Delhi",
    full_address: "Select Venues, Delhi",
    type: "Street Art",
    price: 35000,
    lighting: "Non Lit",
    image_1: "streetart1.jpg",
  },
  {
    id: 69,
    location: "Bangalore",
    full_address: "Public Spaces, Bangalore",
    type: "Flash Mob",
    price: 55000,
    lighting: "Non Lit",
    image_1: "flashmob1.jpg",
  },
  {
    id: 70,
    location: "Chennai",
    full_address: "Beaches & Parks, Chennai",
    type: "Sand Art",
    price: 25000,
    lighting: "Non Lit",
    image_1: "sandart1.jpg",
  },
  {
    id: 71,
    location: "Pune",
    full_address: "College Campuses, Pune",
    type: "Campus Marketing",
    price: 30000,
    lighting: "Non Lit",
    image_1: "campus1.jpg",
  },
  {
    id: 72,
    location: "Hyderabad",
    full_address: "Tech Hubs, Hyderabad",
    type: "Ambient Advertising",
    price: 40000,
    lighting: "LED",
    image_1: "ambient1.jpg",
  },
];

function Others() {
  const navigate = useNavigate();
  const [filteredProducts] = useState(mockProducts);

  const handleViewDetails = (product) => {
    navigate(`/others/product/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              <i className="fas fa-ellipsis-h mr-3"></i>
              Other Advertising Options
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Explore unique and creative advertising solutions beyond
              traditional media
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            {filteredProducts.length} Unique Advertising Options Available
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={`/images/${product.image_1}`}
                  alt={product.type}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x300?text=Creative+Advertising";
                  }}
                />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                    Creative
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.type}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <i className="fas fa-map-marker-alt mr-1"></i>
                  {product.location}
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  {product.full_address}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-green-600">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">per campaign</span>
                </div>
                <button
                  onClick={() => handleViewDetails(product)}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Others;
