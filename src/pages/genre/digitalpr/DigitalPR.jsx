import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Mock data for digital PR services
const mockProducts = [
  {
    id: 31,
    location: "Mumbai",
    full_address: "Bandra Kurla Complex, Mumbai",
    type: "Influencer Campaign",
    price: 75000,
    lighting: "Non Lit",
    image_1: "influencer1.jpg",
  },
  {
    id: 32,
    location: "Delhi",
    full_address: "Connaught Place, Delhi",
    type: "Social Media PR",
    price: 50000,
    lighting: "Non Lit",
    image_1: "socialmedia1.jpg",
  },
  {
    id: 33,
    location: "Bangalore",
    full_address: "Koramangala, Bangalore",
    type: "Press Release",
    price: 25000,
    lighting: "Non Lit",
    image_1: "press1.jpg",
  },
  {
    id: 34,
    location: "Chennai",
    full_address: "T. Nagar, Chennai",
    type: "Content Marketing",
    price: 40000,
    lighting: "Non Lit",
    image_1: "content1.jpg",
  },
  {
    id: 35,
    location: "Pune",
    full_address: "Hinjewadi, Pune",
    type: "Brand Reputation",
    price: 60000,
    lighting: "Non Lit",
    image_1: "reputation1.jpg",
  },
  {
    id: 36,
    location: "Hyderabad",
    full_address: "HITEC City, Hyderabad",
    type: "Crisis Management",
    price: 85000,
    lighting: "Non Lit",
    image_1: "crisis1.jpg",
  },
];

const serviceTypes = [
  "Influencer Campaign",
  "Social Media PR",
  "Press Release",
  "Content Marketing",
  "Brand Reputation",
  "Crisis Management",
  "Media Relations",
  "Thought Leadership",
  "Event PR",
  "Product Launch",
];

function DigitalPR() {
  const navigate = useNavigate();
  const [filteredProducts] = useState(mockProducts);

  const handleViewDetails = (product) => {
    navigate(`/digital-pr/product/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              <i className="fas fa-laptop mr-3"></i>
              Digital PR Services
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Build your brand reputation and reach through strategic digital PR
              campaigns
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            {filteredProducts.length} Digital PR Services Available
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
                      "https://via.placeholder.com/400x300?text=Digital+PR+Service";
                  }}
                />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">
                    Digital Service
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

export default DigitalPR;
