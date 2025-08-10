import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Mock data for television advertising
const mockProducts = [
  {
    id: 61,
    location: "Mumbai",
    full_address: "Colors TV, Mumbai",
    type: "Prime Time Ad",
    price: 250000,
    lighting: "LED",
    image_1: "primetime1.jpg",
  },
  {
    id: 62,
    location: "Delhi",
    full_address: "Star Plus, Delhi",
    type: "Morning Slot",
    price: 125000,
    lighting: "LED",
    image_1: "morning_tv1.jpg",
  },
  {
    id: 63,
    location: "Bangalore",
    full_address: "Zee TV, Bangalore",
    type: "Late Night",
    price: 85000,
    lighting: "LED",
    image_1: "latenight1.jpg",
  },
  {
    id: 64,
    location: "Chennai",
    full_address: "Sun TV, Chennai",
    type: "Regional Channel",
    price: 95000,
    lighting: "LED",
    image_1: "regional1.jpg",
  },
  {
    id: 65,
    location: "Pune",
    full_address: "Sony TV, Pune",
    type: "Weekend Special",
    price: 180000,
    lighting: "LED",
    image_1: "weekend_tv1.jpg",
  },
  {
    id: 66,
    location: "Hyderabad",
    full_address: "ABP News, Hyderabad",
    type: "News Channel",
    price: 110000,
    lighting: "LED",
    image_1: "news1.jpg",
  },
];

function Television() {
  const navigate = useNavigate();
  const [filteredProducts] = useState(mockProducts);

  const handleViewDetails = (product) => {
    navigate(`/television/product/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-500 to-violet-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              <i className="fas fa-tv mr-3"></i>
              Television Advertising
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Reach massive audiences through strategic television commercial
              placements
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            {filteredProducts.length} Television Advertising Slots Available
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
                      "https://via.placeholder.com/400x300?text=TV+Commercial";
                  }}
                />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-800">
                    TV Commercial
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.type}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <i className="fas fa-tv mr-1"></i>
                  {product.location}
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  {product.full_address}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-green-600">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">per 30 sec ad</span>
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

export default Television;
