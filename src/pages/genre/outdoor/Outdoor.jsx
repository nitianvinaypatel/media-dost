import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Mock data to replace PHP database queries
const mockProducts = [
  {
    id: 1,
    location: "Mumbai",
    full_address: "Andheri East, Mumbai",
    type: "Billboard",
    price: 25000,
    lighting: "Back Lit",
    image_1: "billboard1.jpg",
  },
  {
    id: 2,
    location: "Delhi",
    full_address: "Connaught Place, Delhi",
    type: "Hoarding",
    price: 35000,
    lighting: "LED",
    image_1: "hoarding1.jpg",
  },
  {
    id: 3,
    location: "Bangalore",
    full_address: "MG Road, Bangalore",
    type: "Digital Screen",
    price: 45000,
    lighting: "LED",
    image_1: "digital1.jpg",
  },
  {
    id: 4,
    location: "Mumbai",
    full_address: "Bandra West, Mumbai",
    type: "Unipole",
    price: 15000,
    lighting: "Front Lit",
    image_1: "unipole1.jpg",
  },
  {
    id: 5,
    location: "Chennai",
    full_address: "T. Nagar, Chennai",
    type: "Bus Shelter",
    price: 8000,
    lighting: "Non Lit",
    image_1: "bus1.jpg",
  },
  {
    id: 6,
    location: "Pune",
    full_address: "FC Road, Pune",
    type: "Metro Pillar",
    price: 20000,
    lighting: "Back Lit",
    image_1: "metro1.jpg",
  },
];

const advertisingTypes = [
  "Hoarding",
  "Billboard",
  "Digital Screen",
  "Pole Kiosks",
  "Unipole",
  "Skywalk",
  "Metro Pillar",
  "Traffic Signal",
  "Petrol Pump",
  "Bus Shelter",
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

function Outdoor() {
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
  const [openModal, setOpenModal] = useState(null);
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

  const toggleModal = (modalId) => {
    setOpenModal(openModal === modalId ? null : modalId);
    // Clear search term when closing modal
    if (openModal === modalId) {
      setSearchTerms((prev) => ({ ...prev, [modalId]: "" }));
    }
  };

  const closeModal = () => {
    setOpenModal(null);
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
      lighting: [],
      priceRange: [],
      sortBy: "",
    });
    setSearchTerms({});
    setOpenDropdown(null);
  };

  const handleViewDetails = (product) => {
    navigate(`/outdoor/product/${product.id}`);
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
          className={`flex items-center justify-between w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-lg hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
            hasActiveFilters ? "border-blue-500 bg-blue-50" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            toggleModal(id);
          }}
        >
          <span
            className={`font-medium ${
              hasActiveFilters ? "text-blue-700" : "text-gray-700"
            }`}
          >
            {displayTitle}
          </span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              openDropdown === id ? "rotate-180" : ""
            } ${hasActiveFilters ? "text-blue-700" : "text-gray-500"}`}
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

        {openModal === id && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    Select {title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    <svg
                      className="w-6 h-6"
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
                </div>
              </div>

              {/* Search Section */}
              {searchable && (
                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={`Search ${title.toLowerCase()}...`}
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) =>
                        setSearchTerms((prev) => ({
                          ...prev,
                          [id]: e.target.value,
                        }))
                      }
                    />
                    {searchTerm && (
                      <button
                        className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                        onClick={() => {
                          setSearchTerms((prev) => ({ ...prev, [id]: "" }));
                        }}
                      >
                        <svg
                          className="w-5 h-5"
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

              {/* Options Section */}
              <div className="max-h-64 overflow-y-auto p-4">
                {filteredOptions.length > 0 ? (
                  <div className="space-y-2">
                    {filteredOptions.map((option, index) => {
                      const optionValue = isSortFilter ? option.value : option;
                      const optionLabel = isSortFilter ? option.label : option;

                      return (
                        <label
                          key={index}
                          className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                        >
                          <input
                            type={isSortFilter ? "radio" : "checkbox"}
                            name={isSortFilter ? "sort" : undefined}
                            className="mr-3 text-blue-600 focus:ring-blue-500 w-4 h-4"
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
                          <span className="text-gray-700 font-medium">
                            {optionLabel}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-center py-8 text-gray-500">
                    No options found
                  </p>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Apply
                  </button>
                </div>
              </div>
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
        <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
          {product.type}
        </div>
        <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
          {product.lighting}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">
          {product.full_address}
        </h3>
        <p className="text-gray-600 mb-3 text-sm">
          Location: {product.location}
        </p>
        <div className="flex items-center justify-between mb-4">
          <p className="text-2xl font-bold text-blue-600">
            ₹{product.price.toLocaleString()}
            <span className="text-sm font-normal text-gray-500 ml-1">
              Min Spend
            </span>
          </p>
        </div>

        <div className="flex gap-2">
          <button
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            onClick={() => handleViewDetails(product)}
          >
            View Details
          </button>
          <button
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1"
            onClick={() => handleMapView(product)}
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
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
            <h1 className="text-xl font-bold text-gray-900 mb-4">
              Explore Our Outdoor Advertising Options
            </h1>
            {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect outdoor advertising space for your brand. From
              billboards to digital screens, we have premium locations across
              major cities.
            </p> */}
          </div>

          {/* Filters */}
          <div className="mb-8">
            <div className="flex overflow-x-auto scrollbar-hide gap-4 mb-6 pb-2">
              <div className="flex-shrink-0 min-w-[160px]">
                <FilterDropdown
                  id="location-dropdown"
                  title="Location"
                  options={locations}
                  filterType="location"
                />
              </div>

              <div className="flex-shrink-0 min-w-[160px]">
                <FilterDropdown
                  id="address-dropdown"
                  title="Address"
                  options={addresses}
                  filterType="address"
                />
              </div>

              <div className="flex-shrink-0 min-w-[160px]">
                <FilterDropdown
                  id="type-dropdown"
                  title="Type"
                  options={advertisingTypes}
                  filterType="type"
                />
              </div>

              <div className="flex-shrink-0 min-w-[160px]">
                <FilterDropdown
                  id="sort-dropdown"
                  title="Sort By"
                  options={sortOptions}
                  filterType="sortBy"
                  searchable={false}
                  isSortFilter={true}
                />
              </div>

              <div className="flex-shrink-0 min-w-[160px]">
                <FilterDropdown
                  id="lighting-dropdown"
                  title="Lighting"
                  options={lightingOptions}
                  filterType="lighting"
                />
              </div>

              <div className="flex-shrink-0 min-w-[160px]">
                <FilterDropdown
                  id="price-dropdown"
                  title="Price Range"
                  options={priceRanges}
                  filterType="priceRange"
                />
              </div>
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
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
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
            /* No Results */
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
                Try adjusting your filters to find more outdoor advertising
                options.
              </p>
              <button
                onClick={clearAllFilters}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
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

export default Outdoor;
