import React from 'react';
import { Link } from 'react-router-dom';
import { IoMapOutline, IoPricetagOutline } from 'react-icons/io5';

const ProductCard = ({ product }) => {
  const {
    id,
    full_address,
    type,
    price,
    image_1,
    location,
    lighting
  } = product;

  const getRedirectPage = (type) => {
    const typeToPage = {
      'Wall Advertisement': 'wall-advertisement',
      'Flyer Distribution': 'flyer-distribution',
      'Gate and Entrance Branding': 'gate-entrance-branding',
      'Parking Area': 'parking-area',
      'Playground and Garden Area Ads': 'playground-garden-ads',
      'Notice Board': 'notice-board-advertising'
    };
    return typeToPage[type] || 'residential';
  };

  const handleMapView = () => {
    // Implement map view functionality
    console.log('Opening map for:', full_address);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={`/admin/uploads/product/${image_1}`}
          alt={full_address}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x300?text=Residential+Ad+Space";
          }}
        />
        <div className="absolute top-2 left-2">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            lighting === "LED" ? "bg-green-100 text-green-800" :
            lighting === "Back Lit" ? "bg-blue-100 text-blue-800" :
            lighting === "Front Lit" ? "bg-yellow-100 text-yellow-800" :
            "bg-gray-100 text-gray-800"
          }`}>
            {lighting}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {type}
        </h3>
        <p className="text-sm text-gray-600 mb-1">
          <i className="fas fa-map-marker-alt mr-1"></i>
          {location}
        </p>
        <p className="text-xs text-gray-500 mb-3">{full_address}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">
            ₹{price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500">per month</span>
        </div>

        <div className="flex space-x-2 mt-4">
          <Link
            to={`/${getRedirectPage(type)}/${id}`}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium text-center"
          >
            View Details
          </Link>
          <button
            onClick={handleMapView}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
          >
            <IoMapOutline className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 