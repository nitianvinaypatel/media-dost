import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Mock data for audio/video advertising
const mockProducts = [
  {
    id: 25,
    location: "Mumbai",
    full_address: "PVR Cinemas, Juhu, Mumbai",
    type: "Cinema Screen Ad",
    price: 85000,
    lighting: "LED",
    image_1: "cinema1.jpg",
  },
  {
    id: 26,
    location: "Delhi",
    full_address: "Connaught Place, Delhi",
    type: "LED Video Wall",
    price: 120000,
    lighting: "LED",
    image_1: "ledwall1.jpg",
  },
  {
    id: 27,
    location: "Bangalore",
    full_address: "Brigade Road, Bangalore",
    type: "Digital Billboard",
    price: 95000,
    lighting: "LED",
    image_1: "digital1.jpg",
  },
  {
    id: 28,
    location: "Chennai",
    full_address: "Express Avenue Mall, Chennai",
    type: "Mall Video Screen",
    price: 65000,
    lighting: "LED",
    image_1: "mallscreen1.jpg",
  },
  {
    id: 29,
    location: "Pune",
    full_address: "FC Road, Pune",
    type: "Audio Announcement",
    price: 25000,
    lighting: "Non Lit",
    image_1: "audio1.jpg",
  },
  {
    id: 30,
    location: "Hyderabad",
    full_address: "HITEC City, Hyderabad",
    type: "Interactive Kiosk",
    price: 45000,
    lighting: "LED",
    image_1: "kiosk1.jpg",
  },
];

const advertisingTypes = [
  "Cinema Screen Ad",
  "LED Video Wall",
  "Digital Billboard",
  "Mall Video Screen",
  "Audio Announcement",
  "Interactive Kiosk",
  "Stadium Screen",
  "Street Video Display",
  "Elevator Video",
  "Gas Station TV",
];

const lightingOptions = ["LED", "Non Lit"];

const priceRanges = [
  "Under ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹75,000",
  "₹75,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,00,000",
  "Above ₹2,00,000",
];

const sortOptions = [
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "location-asc", label: "Location: A to Z" },
  { value: "type-asc", label: "Type: A to Z" },
];

function AudioVideoAd() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    location: [],
    address: [],
    type: [],
    lighting: [],
    priceRange: [],
    sortBy: "",
  });

  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});

  const locations = [...new Set(mockProducts.map((p) => p.location))];
  const addresses = [...new Set(mockProducts.map((p) => p.full_address))];

  const filteredProducts = useMemo(() => {
    let filtered = mockProducts.filter((product) => {
      const locationMatch =
        filters.location.length === 0 ||
        filters.location.includes(product.location);
      const addressMatch =
        filters.address.length === 0 ||
        filters.address.includes(product.full_address);
      const typeMatch =
        filters.type.length === 0 || filters.type.includes(product.type);
      const lightingMatch =
        filters.lighting.length === 0 ||
        filters.lighting.includes(product.lighting);

      let priceMatch = true;
      if (filters.priceRange.length > 0) {
        priceMatch = filters.priceRange.some((range) => {
          const price = product.price;
          switch (range) {
            case "Under ₹25,000":
              return price < 25000;
            case "₹25,000 - ₹50,000":
              return price >= 25000 && price <= 50000;
            case "₹50,000 - ₹75,000":
              return price >= 50000 && price <= 75000;
            case "₹75,000 - ₹1,00,000":
              return price >= 75000 && price <= 100000;
            case "₹1,00,000 - ₹2,00,000":
              return price >= 100000 && price <= 200000;
            case "Above ₹2,00,000":
              return price > 200000;
            default:
              return true;
          }
        });
      }

      return (
        locationMatch &&
        addressMatch &&
        typeMatch &&
        lightingMatch &&
        priceMatch
      );
    });

    if (filters.sortBy === "price-low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "price-high-low") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === "location-asc") {
      filtered.sort((a, b) => a.location.localeCompare(b.location));
    } else if (filters.sortBy === "type-asc") {
      filtered.sort((a, b) => a.type.localeCompare(b.type));
    }

    return filtered;
  }, [filters]);

  const handleViewDetails = (product) => {
    navigate(`/audio-video-ad/product/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              <i className="fas fa-video mr-3"></i>
              Audio/Video Advertising
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Engage audiences with dynamic audio and video content across
              digital platforms
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            {filteredProducts.length} Audio/Video Advertising Spaces Found
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                      "https://via.placeholder.com/400x300?text=Audio+Video+Ad";
                  }}
                />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    {product.lighting}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.type}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <i className="fas fa-map-marker-alt mr-1"></i>
                  {product.location}
                </p>
                <p className="text-xs text-gray-500 mb-3">
                  {product.full_address}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">per month</span>
                </div>
                <button
                  onClick={() => handleViewDetails(product)}
                  className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
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

export default AudioVideoAd;
