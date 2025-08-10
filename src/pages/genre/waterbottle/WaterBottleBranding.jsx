import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Mock data for water bottle branding
const mockProducts = [
  {
    id: 43,
    location: "Mumbai",
    full_address: "Corporate Offices, BKC, Mumbai",
    type: "Corporate Events",
    price: 15000,
    lighting: "Non Lit",
    image_1: "corporate_bottles1.jpg",
  },
  {
    id: 44,
    location: "Delhi",
    full_address: "India Gate, Delhi",
    type: "Marathon Events",
    price: 25000,
    lighting: "Non Lit",
    image_1: "marathon1.jpg",
  },
  {
    id: 45,
    location: "Bangalore",
    full_address: "Tech Parks, Bangalore",
    type: "Conference Giveaway",
    price: 18000,
    lighting: "Non Lit",
    image_1: "conference1.jpg",
  },
  {
    id: 46,
    location: "Chennai",
    full_address: "Marina Beach, Chennai",
    type: "Beach Event",
    price: 12000,
    lighting: "Non Lit",
    image_1: "beach1.jpg",
  },
  {
    id: 47,
    location: "Pune",
    full_address: "IT Hubs, Pune",
    type: "Gym Partnership",
    price: 20000,
    lighting: "Non Lit",
    image_1: "gym_bottles1.jpg",
  },
  {
    id: 48,
    location: "Hyderabad",
    full_address: "HITEC City, Hyderabad",
    type: "Office Distribution",
    price: 22000,
    lighting: "Non Lit",
    image_1: "office1.jpg",
  },
];

const brandingTypes = [
  "Corporate Events",
  "Marathon Events",
  "Conference Giveaway",
  "Beach Event",
  "Gym Partnership",
  "Office Distribution",
  "School Programs",
  "Sports Events",
  "Festival Distribution",
  "Hospital Branding",
];

function WaterBottleBranding() {
  const navigate = useNavigate();
  const [filteredProducts] = useState(mockProducts);

  const handleViewDetails = (product) => {
    navigate(`/water-bottle-branding/product/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              <i className="fas fa-tint mr-3"></i>
              Water Bottle Branding
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Promote your brand through custom water bottle distribution and
              branding opportunities
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            {filteredProducts.length} Water Bottle Branding Opportunities
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
                      "https://via.placeholder.com/400x300?text=Water+Bottle+Branding";
                  }}
                />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-cyan-100 text-cyan-800">
                    Eco-Friendly
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
                  <span className="text-sm text-gray-500">
                    per 1000 bottles
                  </span>
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

export default WaterBottleBranding;
