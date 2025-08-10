import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';

const PlanSuccessModal = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl z-50 w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <FaCheck className="w-8 h-8 text-green-500" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Media Plan Request
            </h3>
            <p className="text-gray-600 mb-6">
              Your media plan request has been sent successfully. We will connect with you shortly!
            </p>

            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                Okay
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanSuccessModal; 