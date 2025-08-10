import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Mock data for transit advertising
const mockProducts = [
  {
    id: 19,
    location: "Mumbai",
    full_address: "Andheri Railway Station, Mumbai",
    type: "Metro Station",
    price: 55000,
    lighting: "LED",
    image_1: "metro1.jpg",
  },
  {
    id: 20,
    location: "Delhi",
    full_address: "Rajiv Chowk Metro Station, Delhi",
    type: "Bus Stop",
    price: 15000,
    lighting: "Back Lit",
    image_1: "busstop1.jpg",
  },
  {
    id: 21,
    location: "Bangalore",
    full_address: "KR Puram Railway Station, Bangalore",
    type: "Railway Platform",
    price: 35000,
    lighting: "Front Lit",
    image_1: "railway1.jpg",
  },
  {
    id: 22,
    location: "Chennai",
    full_address: "Chennai Central Station, Chennai",
    type: "Airport Terminal",
    price: 75000,
    lighting: "LED",
    image_1: "airport1.jpg",
  },
  {
    id: 23,
    location: "Pune",
    full_address: "Pune Railway Station, Pune",
    type: "Auto Rickshaw",
    price: 8000,
    lighting: "Non Lit",
    image_1: "auto1.jpg",
  },
  {
    id: 24,
    location: "Hyderabad",
    full_address: "Shamshabad Airport, Hyderabad",
    type: "Taxi Branding",
    price: 12000,
    lighting: "Non Lit",
    image_1: "taxi1.jpg",
  },
];

const advertisingTypes = [
  "Metro Station",
  "Bus Stop",
  "Railway Platform",
  "Airport Terminal",
  "Auto Rickshaw",
  "Taxi Branding",
  "Bus Exterior",
  "Train Coach",
  "Ferry Terminal",
  "Subway Platform",
];

const lightingOptions = ["Back Lit", "Front Lit", "LED", "Non Lit"];

const priceRanges = [
  "Under ₹5,000",
  "₹5,000 - ₹15,000",
  "₹15,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹75,000",
  "₹75,000 - ₹1,00,000",
  "₹1,00,000 - ₹3,00,000",
  "₹3,00,000 - ₹5,00,000",
  "Above ₹5,00,000",
];

const sortOptions = [
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "location-asc", label: "Location: A to Z" },
  { value: "type-asc", label: "Type: A to Z" },
];

function Transit() {
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
  const [searchTerms, setSearchTerms] = useState({});
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
            case "Under ₹5,000":
              return price < 5000;
            case "₹5,000 - ₹15,000":
              return price >= 5000 && price <= 15000;
            case "₹15,000 - ₹25,000":
              return price >= 15000 && price <= 25000;
            case "₹25,000 - ₹50,000":
              return price >= 25000 && price <= 50000;
            case "₹50,000 - ₹75,000":
              return price >= 50000 && price <= 75000;
            case "₹75,000 - ₹1,00,000":
              return price >= 75000 && price <= 100000;
            case "₹1,00,000 - ₹3,00,000":
              return price >= 100000 && price <= 300000;
            case "₹3,00,000 - ₹5,00,000":
              return price >= 300000 && price <= 500000;
            case "Above ₹5,00,000":
              return price > 500000;
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

  const toggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
    if (openDropdown === dropdownId) {
      setSearchTerms((prev) => ({ ...prev, [dropdownId]: "" }));
    }
  };

  const handleFilterChange = (filterType, value, checked) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: checked
        ? [...prev[filterType], value]
        : prev[filterType].filter((item) => item !== value),
    }));
  };

  const handleSortChange = (value) => {
    setFilters((prev) => ({ ...prev, sortBy: value }));
    setOpenDropdown(null);
  };

  const clearAllFilters = () => {
    setFilters({
      location: [],
      address: [],
      type: [],
      lighting: [],
      priceRange: [],
      sortBy: "",
    });
    setSearchTerms({});
    setOpenDropdown(null);
  };

  const handleViewDetails = (product) => {
    navigate(`/transit/product/${product.id}`);
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInside = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(event.target)
      );
      if (!isClickInside) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              <i className="fas fa-bus mr-3"></i>
              Transit Advertising
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Reach commuters and travelers across metro, bus, rail, and airport
              networks
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            {filteredProducts.length} Transit Advertising Spaces Found
          </h3>
        </div>

        {/* Product Grid */}
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
                      "https://via.placeholder.com/400x300?text=Transit+Space";
                  }}
                />
                <div className="absolute top-2 left-2">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      product.lighting === "LED"
                        ? "bg-green-100 text-green-800"
                        : product.lighting === "Back Lit"
                        ? "bg-blue-100 text-blue-800"
                        : product.lighting === "Front Lit"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
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
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => handleViewDetails(product)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  >
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                    <i className="fas fa-map-marked-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transit;
