import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Mock data for residential advertising with real Indian cities
const mockProducts = [
  {
    id: 1,
    location: "Mumbai",
    full_address: "Hiranandani Gardens, Powai, Mumbai, Maharashtra",
    type: "Parking Area",
    price: 75,
    lighting: "LED",
    image_1: "parking1.jpg",
    state: "Maharashtra"
  },
  {
    id: 2,
    location: "Delhi",
    full_address: "DLF Phase 3, Gurgaon, Delhi NCR",
    type: "Wall Advertisement",
    price: 75,
    lighting: "Back Lit",
    image_1: "wall1.jpg",
    state: "Delhi"
  },
  {
    id: 3,
    location: "Bangalore",
    full_address: "Prestige Shantiniketan, Whitefield, Bangalore",
    type: "Notice Board",
    price: 75,
    lighting: "Non Lit",
    image_1: "notice1.jpg",
    state: "Karnataka"
  },
  // Add more cities from the website...
  {
    id: 4,
    location: "Hyderabad",
    full_address: "Gachibowli, Hyderabad, Telangana",
    type: "Gate and Entrance Branding",
    price: 75,
    lighting: "Front Lit",
    image_1: "gate1.jpg",
    state: "Telangana"
  },
  {
    id: 5,
    location: "Chennai",
    full_address: "Anna Nagar, Chennai, Tamil Nadu",
    type: "Playground and Garden Area Ads",
    price: 75,
    lighting: "LED",
    image_1: "playground1.jpg",
    state: "Tamil Nadu"
  }
];

const advertisingTypes = [
  "Wall Advertisement",
  "Flyer Distribution",
  "Gate and Entrance Branding",
  "Parking Area",
  "Playground and Garden Area Ads",
  "Notice Board"
];

const priceRanges = [
  "₹50 - ₹5,000",
  "₹5,000 - ₹15,000",
  "₹15,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹75,000",
  "₹75,000 - ₹1,00,000",
  "₹1,00,000 - ₹3,00,000",
  "₹3,00,000 - ₹5,00,000",
  "Above ₹5,00,000"
];

const sortOptions = [
  { value: "price-low-high", label: "Price - Low to High" },
  { value: "price-high-low", label: "Price - High to Low" }
];

function Residential() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    location: [],
    address: [],
    type: [],
    priceRange: [],
    sortBy: "",
    state: []
  });

  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchTerms, setSearchTerms] = useState({});
  const dropdownRefs = useRef({});

  // Get unique locations, addresses and states from mock data
  const locations = [...new Set(mockProducts.map((p) => p.location))].sort();
  const addresses = [...new Set(mockProducts.map((p) => p.full_address))].sort();
  const states = [...new Set(mockProducts.map((p) => p.state))].sort();

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
      const stateMatch =
        filters.state.length === 0 || filters.state.includes(product.state);

      let priceMatch = true;
      if (filters.priceRange.length > 0) {
        priceMatch = filters.priceRange.some((range) => {
          const [min, max] = range.split(" - ").map(str => 
            parseInt(str.replace(/[₹,]/g, ""))
          );
          return product.price >= min && (!max || product.price <= max);
        });
      }

      return locationMatch && addressMatch && typeMatch && stateMatch && priceMatch;
    });

    // Apply sorting
    if (filters.sortBy === "price-low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "price-high-low") {
      filtered.sort((a, b) => b.price - a.price);
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

  const filterOptions = (options, searchTerm) => {
    if (!searchTerm) return options;
    return options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getActiveFilterCount = (filterType) => {
    const activeFilters = filters[filterType];
    return Array.isArray(activeFilters) ? activeFilters.length : 0;
  };

  const getDropdownTitle = (baseTitle, filterType, isSortFilter = false) => {
    if (isSortFilter && filters.sortBy) {
      const selectedSort = sortOptions.find(
        (option) => option.value === filters.sortBy
      );
      return selectedSort ? selectedSort.label : baseTitle;
    }

    const activeCount = getActiveFilterCount(filterType);
    return activeCount > 0 ? `${baseTitle} (${activeCount})` : baseTitle;
  };

  const clearAllFilters = () => {
    setFilters({
      location: [],
      address: [],
      type: [],
      priceRange: [],
      sortBy: "",
      state: []
    });
    setSearchTerms({});
    setOpenDropdown(null);
  };

  const handleViewDetails = (product) => {
    navigate(`/residential/product/${product.id}`);
  };

  const handleMapView = (product) => {
    alert(
      `Opening map view for ${product.full_address}\nThis would typically open a map application or modal with the location.`
    );
  };

  const FilterDropdown = ({
    id,
    title,
    options,
    filterType,
    searchable = true,
    isSortFilter = false,
  }) => {
    const searchTerm = searchTerms[id] || "";
    const filteredOptions = searchable
      ? filterOptions(options, searchTerm)
      : options;

    const displayTitle = getDropdownTitle(title, filterType, isSortFilter);
    const hasActiveFilters =
      getActiveFilterCount(filterType) > 0 || (isSortFilter && filters.sortBy);

    return (
      <div className="relative" ref={(el) => (dropdownRefs.current[id] = el)}>
        <button
          className={`flex items-center justify-between w-full px-4 py-2 text-left bg-white border rounded-lg transition-colors ${
            hasActiveFilters 
              ? "border-green-500 bg-green-50 text-green-700" 
              : "border-gray-300 hover:border-green-500 text-gray-700"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            toggleDropdown(id);
          }}
        >
          <span className="font-medium">
            {displayTitle}
          </span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              openDropdown === id ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {openDropdown === id && (
          <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-xl max-h-64 overflow-hidden">
            {searchable && (
              <div className="p-3 border-b border-gray-200">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={`Search ${title.toLowerCase()}...`}
                    className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerms((prev) => ({
                        ...prev,
                        [id]: e.target.value,
                      }))
                    }
                    onClick={(e) => e.stopPropagation()}
                  />
                  {searchTerm && (
                    <button
                      className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSearchTerms((prev) => ({ ...prev, [id]: "" }));
                      }}
                    >
                      <svg
                        className="w-4 h-4"
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
                  )}
                </div>
              </div>
            )}

            <div className="max-h-48 overflow-y-auto p-2">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => {
                  const optionValue = isSortFilter ? option.value : option;
                  const optionLabel = isSortFilter ? option.label : option;

                  return (
                    <label
                      key={index}
                      className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type={isSortFilter ? "radio" : "checkbox"}
                        name={isSortFilter ? "sort" : undefined}
                        className="mr-3 text-green-600 focus:ring-green-500"
                        checked={
                          isSortFilter
                            ? filters.sortBy === optionValue
                            : filters[filterType].includes(optionValue)
                        }
                        onChange={(e) => {
                          if (isSortFilter) {
                            handleSortChange(optionValue);
                          } else {
                            handleFilterChange(
                              filterType,
                              optionValue,
                              e.target.checked
                            );
                          }
                        }}
                      />
                      <span className="text-gray-700">{optionLabel}</span>
                    </label>
                  );
                })
              ) : (
                <p className="p-2 text-gray-500">No options found</p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute bottom-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
          {product.type}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">
          {product.full_address}
        </h3>
        <p className="text-gray-600 mb-3 text-sm">
          {product.location}, {product.state}
        </p>
        <div className="flex items-center justify-between mb-4">
          <p className="text-xl font-bold text-green-600">
            ₹{product.price}
            <span className="text-sm font-normal text-gray-500 ml-1">
              Min Spend
            </span>
          </p>
        </div>

        <div className="flex gap-2">
          <button
            className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
            onClick={() => handleViewDetails(product)}
          >
            View Details
          </button>
          <button
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => handleMapView(product)}
          >
            Map
          </button>
        </div>
      </div>
    </div>
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && dropdownRefs.current[openDropdown]) {
        if (!dropdownRefs.current[openDropdown].contains(event.target)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Close dropdown on escape key
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
    <main className="min-h-screen bg-gray-50">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Residential Advertising Choices
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect residential advertising space for your brand across major Indian cities.
              From society gates to notice boards, we have premium locations in residential complexes.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
              <FilterDropdown
                id="location-dropdown"
                title="Location"
                options={locations}
                filterType="location"
              />

              <FilterDropdown
                id="state-dropdown"
                title="State"
                options={states}
                filterType="state"
              />

              <FilterDropdown
                id="address-dropdown"
                title="Full Address"
                options={addresses}
                filterType="address"
              />

              <FilterDropdown
                id="type-dropdown"
                title="Type"
                options={advertisingTypes}
                filterType="type"
              />

              <FilterDropdown
                id="sort-dropdown"
                title="Sort By"
                options={sortOptions}
                filterType="sortBy"
                searchable={false}
                isSortFilter={true}
              />

              <FilterDropdown
                id="price-dropdown"
                title="Price Range"
                options={priceRanges}
                filterType="priceRange"
                searchable={false}
              />
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-lg font-medium text-gray-700">
                {filteredProducts.length} Result
                {filteredProducts.length !== 1 ? "s" : ""} Found
              </p>

              {/* Clear Filters */}
              {Object.values(filters).some((filter) =>
                Array.isArray(filter) ? filter.length > 0 : filter !== ""
              ) && (
                <button
                  onClick={clearAllFilters}
                  className="text-green-600 hover:text-green-800 font-medium flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
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
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg
                className="w-24 h-24 mx-auto text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.563M15 9a6 6 0 11-6 0 6 6 0 016 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Results Found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters to find more residential advertising options
              </p>
              <button
                onClick={clearAllFilters}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Residential;
