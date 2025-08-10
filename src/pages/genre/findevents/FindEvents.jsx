import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Mock data for event advertising opportunities
const mockProducts = [
  {
    id: 37,
    location: "Mumbai",
    full_address: "Phoenix Mills, Mumbai",
    type: "Concert Sponsorship",
    price: 200000,
    lighting: "LED",
    image_1: "concert1.jpg",
  },
  {
    id: 38,
    location: "Delhi",
    full_address: "Pragati Maidan, Delhi",
    type: "Trade Show Booth",
    price: 150000,
    lighting: "Back Lit",
    image_1: "tradeshow1.jpg",
  },
  {
    id: 39,
    location: "Bangalore",
    full_address: "Palace Grounds, Bangalore",
    type: "Festival Branding",
    price: 125000,
    lighting: "LED",
    image_1: "festival1.jpg",
  },
  {
    id: 40,
    location: "Chennai",
    full_address: "YMCA Ground, Chennai",
    type: "Sports Event",
    price: 175000,
    lighting: "Front Lit",
    image_1: "sports1.jpg",
  },
  {
    id: 41,
    location: "Pune",
    full_address: "Shivaji Nagar, Pune",
    type: "Corporate Event",
    price: 100000,
    lighting: "Back Lit",
    image_1: "corporate1.jpg",
  },
  {
    id: 42,
    location: "Hyderabad",
    full_address: "Hitex Exhibition Center, Hyderabad",
    type: "Product Launch",
    price: 80000,
    lighting: "LED",
    image_1: "launch1.jpg",
  },
];

const eventTypes = [
  "Concert Sponsorship",
  "Trade Show Booth",
  "Festival Branding",
  "Sports Event",
  "Corporate Event",
  "Product Launch",
  "Conference Booth",
  "Cultural Event",
  "Food Festival",
  "Tech Meetup",
];

function FindEvents() {
  const navigate = useNavigate();
  const [filteredProducts] = useState(mockProducts);

  const handleViewDetails = (product) => {
    navigate(`/find-events/product/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              <i className="fas fa-calendar-check mr-3"></i>
              Find Events & Sponsorship
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Discover sponsorship opportunities and brand activation events
              across various categories
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            {filteredProducts.length} Event Opportunities Available
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
                      "https://via.placeholder.com/400x300?text=Event+Opportunity";
                  }}
                />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-pink-100 text-pink-800">
                    Event
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
                  <span className="text-sm text-gray-500">per event</span>
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

export default FindEvents;
