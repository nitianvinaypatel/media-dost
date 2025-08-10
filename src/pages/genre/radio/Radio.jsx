import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Mock data for radio advertising
const mockProducts = [
  {
    id: 55,
    location: "Mumbai",
    full_address: "Radio City 91.1 FM, Mumbai",
    type: "Prime Time Spot",
    price: 85000,
    lighting: "Non Lit",
    image_1: "radio1.jpg",
  },
  {
    id: 56,
    location: "Delhi",
    full_address: "Red FM 93.5, Delhi",
    type: "Morning Show",
    price: 65000,
    lighting: "Non Lit",
    image_1: "morning1.jpg",
  },
  {
    id: 57,
    location: "Bangalore",
    full_address: "Radio Mirchi 98.3, Bangalore",
    type: "Drive Time",
    price: 75000,
    lighting: "Non Lit",
    image_1: "drive1.jpg",
  },
  {
    id: 58,
    location: "Chennai",
    full_address: "Big FM 92.7, Chennai",
    type: "Weekend Special",
    price: 45000,
    lighting: "Non Lit",
    image_1: "weekend1.jpg",
  },
  {
    id: 59,
    location: "Pune",
    full_address: "Fever FM 104, Pune",
    type: "Evening Show",
    price: 55000,
    lighting: "Non Lit",
    image_1: "evening1.jpg",
  },
  {
    id: 60,
    location: "Hyderabad",
    full_address: "Radio One 95 FM, Hyderabad",
    type: "Late Night",
    price: 35000,
    lighting: "Non Lit",
    image_1: "night1.jpg",
  },
];

function Radio() {
  const navigate = useNavigate();
  const [filteredProducts] = useState(mockProducts);

  const handleViewDetails = (product) => {
    navigate(`/radio/product/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              <i className="fas fa-radio mr-3"></i>
              Radio Advertising
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Reach millions of listeners with strategic radio advertising
              across popular FM stations
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            {filteredProducts.length} Radio Advertising Slots Available
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
                      "https://via.placeholder.com/400x300?text=Radio+Advertising";
                  }}
                />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-teal-100 text-teal-800">
                    Audio Ad
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.type}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <i className="fas fa-radio mr-1"></i>
                  {product.location}
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  {product.full_address}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-green-600">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">per 30 sec spot</span>
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

export default Radio;
