import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Mock data for retail and mall advertising
const mockProducts = [
  {
    id: 13,
    location: "Mumbai",
    full_address: "Phoenix Mills, Lower Parel, Mumbai",
    type: "Mall Entrance",
    price: 45000,
    lighting: "LED",
    image_1: "mall1.jpg",
  },
  {
    id: 14,
    location: "Delhi",
    full_address: "Select City Walk, Saket, Delhi",
    type: "Food Court",
    price: 35000,
    lighting: "Back Lit",
    image_1: "foodcourt1.jpg",
  },
  {
    id: 15,
    location: "Bangalore",
    full_address: "Forum Mall, Koramangala, Bangalore",
    type: "Escalator Branding",
    price: 28000,
    lighting: "LED",
    image_1: "escalator1.jpg",
  },
  {
    id: 16,
    location: "Chennai",
    full_address: "Express Avenue, Royapettah, Chennai",
    type: "Retail Store Front",
    price: 25000,
    lighting: "Front Lit",
    image_1: "storefront1.jpg",
  },
  {
    id: 17,
    location: "Pune",
    full_address: "Seasons Mall, Magarpatta, Pune",
    type: "Atrium Display",
    price: 40000,
    lighting: "LED",
    image_1: "atrium1.jpg",
  },
  {
    id: 18,
    location: "Hyderabad",
    full_address: "Inorbit Mall, Madhapur, Hyderabad",
    type: "Parking Area",
    price: 18000,
    lighting: "Back Lit",
    image_1: "parking1.jpg",
  },
];

const advertisingTypes = [
  "Mall Entrance",
  "Food Court",
  "Escalator Branding",
  "Retail Store Front",
  "Atrium Display",
  "Parking Area",
  "Shopping Cart",
  "Floor Graphics",
  "Pillar Wrap",
  "Digital Kiosk",
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

function RetailMall() {
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
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dropdownRefs = useRef({});

  // Get unique locations and addresses from mock data
  const locations = [...new Set(mockProducts.map((p) => p.location))];
  const addresses = [...new Set(mockProducts.map((p) => p.full_address))];

  // Filter and sort products based on current filters
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

    // Apply sorting
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
    // Clear search term when closing dropdown
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

  const handleSearchChange = (dropdownId, value) => {
    setSearchTerms((prev) => ({ ...prev, [dropdownId]: value }));
  };

  const filterOptions = (options, searchTerm) => {
    if (!searchTerm) return options;
    return options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getActiveFilterCount = (filterType) => {
    return filters[filterType]?.length || 0;
  };

  const getDropdownTitle = (baseTitle, filterType, isSortFilter = false) => {
    if (isSortFilter) {
      const selectedSort = sortOptions.find(
        (opt) => opt.value === filters.sortBy
      );
      return selectedSort ? selectedSort.label : baseTitle;
    }

    const count = getActiveFilterCount(filterType);
    return count > 0 ? `${baseTitle} (${count})` : baseTitle;
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
    navigate(`/retail-mall/product/${product.id}`);
  };

  const handleMapView = (product) => {
    console.log("Opening map for:", product.full_address);
    // Implement map functionality
  };

  const FilterDropdown = ({
    id,
    title,
    options,
    filterType,
    searchable = true,
    isSortFilter = false,
  }) => {
    const activeCount = getActiveFilterCount(filterType);
    const searchTerm = searchTerms[id] || "";
    const filteredOptions = filterOptions(options, searchTerm);
    const isOpen = openDropdown === id;

    return (
      <div className="relative" ref={(el) => (dropdownRefs.current[id] = el)}>
        <button
          type="button"
          onClick={() => toggleDropdown(id)}
          className={`relative w-full cursor-pointer rounded-lg border px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
            activeCount > 0 || (isSortFilter && filters.sortBy)
              ? "bg-blue-50 border-blue-300 text-blue-900"
              : "bg-white border-gray-300 text-gray-900 hover:border-gray-400"
          }`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="flex items-center justify-between">
            <span className="block truncate">
              {getDropdownTitle(title, filterType, isSortFilter)}
            </span>
            <span className="pointer-events-none flex items-center">
              <i
                className={`fas fa-chevron-down transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              ></i>
            </span>
          </span>
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {searchable && !isSortFilter && (
              <div className="sticky top-0 bg-white px-3 py-2 border-b border-gray-200">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={`Search ${title.toLowerCase()}...`}
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(id, e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}

            {isSortFilter ? (
              <div>
                {options.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="sortBy"
                      value={option.value}
                      checked={filters.sortBy === option.value}
                      onChange={(e) => handleSortChange(e.target.value)}
                      className="mr-3 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-900">{option.label}</span>
                  </label>
                ))}
              </div>
            ) : (
              <div>
                {filteredOptions.length === 0 ? (
                  <div className="px-3 py-2 text-gray-500 text-sm">
                    No options found
                  </div>
                ) : (
                  filteredOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={filters[filterType]?.includes(option) || false}
                        onChange={(e) =>
                          handleFilterChange(
                            filterType,
                            option,
                            e.target.checked
                          )
                        }
                        className="mr-3 rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-900">{option}</span>
                    </label>
                  ))
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={`/images/${product.image_1}`}
          alt={product.type}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/400x300?text=Retail+Mall+Space";
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
        <p className="text-xs text-gray-500 mb-3">{product.full_address}</p>
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
          <button
            onClick={() => handleMapView(product)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
          >
            <i className="fas fa-map-marked-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );

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

  // Escape key handler
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              <i className="fas fa-shopping-cart mr-3"></i>
              Retail & Mall Advertising
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Connect with shoppers and retail customers in malls, shopping
              centers, and retail outlets
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Filter & Sort Retail Spaces
            </h2>
            <button
              onClick={clearAllFilters}
              className="text-sm text-red-600 hover:text-red-800 font-medium transition-colors duration-200"
            >
              <i className="fas fa-times mr-1"></i>
              Clear All Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            <FilterDropdown
              id="location"
              title="Location"
              options={locations}
              filterType="location"
            />
            <FilterDropdown
              id="address"
              title="Address"
              options={addresses}
              filterType="address"
            />
            <FilterDropdown
              id="type"
              title="Type"
              options={advertisingTypes}
              filterType="type"
            />
            <FilterDropdown
              id="lighting"
              title="Lighting"
              options={lightingOptions}
              filterType="lighting"
            />
            <FilterDropdown
              id="priceRange"
              title="Price Range"
              options={priceRanges}
              filterType="priceRange"
              searchable={false}
            />
            <FilterDropdown
              id="sortBy"
              title="Sort By"
              options={sortOptions}
              filterType="sortBy"
              searchable={false}
              isSortFilter={true}
            />
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            {filteredProducts.length} Retail & Mall Advertising Spaces Found
          </h3>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No spaces found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters to see more results
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RetailMall;
