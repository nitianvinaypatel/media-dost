import React from 'react';

const CampaignSection = ({ data, onChange, onNext }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const newValue = checked
        ? [...(data[name] || []), value]
        : (data[name] || []).filter(item => item !== value);
      
      onChange({ ...data, [name]: newValue });
    } else if (type === 'radio') {
      onChange({ ...data, [name]: value });
    } else if (name === 'campaign_budget') {
      // Remove non-numeric characters except decimal point
      const numericValue = value.replace(/[^0-9.]/g, '');
      onChange({ ...data, [name]: numericValue });
    } else {
      onChange({ ...data, [name]: value });
    }
  };

  return (
    <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-6 max-w-2xl mx-auto">
      {/* Marketing Objective */}
      <div className="space-y-3">
        <label className="block text-base sm:text-sm font-semibold text-gray-700 mb-2">Marketing Objective</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {['Awareness', 'Consideration', 'Trial'].map((objective) => (
            <label key={objective} className="relative flex cursor-pointer">
              <input
                type="radio"
                name="marketing_objective"
                value={objective}
                checked={data.marketing_objective === objective}
                onChange={handleChange}
                className="sr-only"
              />
              <div className={`flex-1 text-center px-3 py-3 sm:px-4 sm:py-2 border-2 rounded-lg transition-all duration-200 ${
                data.marketing_objective === objective
                  ? 'bg-orange-500 text-white border-orange-500 shadow-md'
                  : 'border-gray-300 hover:border-orange-500 hover:bg-orange-50'
              }`}>
                <span className="text-sm sm:text-base font-medium">{objective}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Business Objective */}
      <div className="space-y-3 pt-2">
        <label className="block text-base sm:text-sm font-semibold text-gray-700 mb-2">Business Objective</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {['Sales', 'Website Traffic', 'Store Footfall', 'App Install'].map((objective) => (
            <label key={objective} className="relative flex cursor-pointer">
              <input
                type="radio"
                name="business_objective"
                value={objective}
                checked={data.business_objective === objective}
                onChange={handleChange}
                className="sr-only"
              />
              <div className={`flex-1 text-center px-3 py-3 sm:px-4 sm:py-2 border-2 rounded-lg transition-all duration-200 ${
                data.business_objective === objective
                  ? 'bg-orange-500 text-white border-orange-500 shadow-md'
                  : 'border-gray-300 hover:border-orange-500 hover:bg-orange-50'
              }`}>
                <span className="text-sm sm:text-base font-medium">{objective}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Campaign Budget */}
      <div className="space-y-3 pt-2">
        <label htmlFor="campaign_budget" className="block text-base sm:text-sm font-semibold text-gray-700 mb-2">
          Campaign Budget
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 text-lg">₹</span>
          <input
            type="text"
            id="campaign_budget"
            name="campaign_budget"
            value={data.campaign_budget || ''}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 sm:py-2 text-base sm:text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
            placeholder="Enter Your Budget"
            required
          />
        </div>
      </div>

      {/* Campaign Duration */}
      <div className="space-y-3 pt-2">
        <label className="block text-base sm:text-sm font-semibold text-gray-700 mb-2">Campaign Duration</label>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <input
            type="number"
            name="duration_days"
            value={data.duration_days || ''}
            onChange={handleChange}
            min="1"
            className="flex-1 px-4 py-3 sm:py-2 text-base sm:text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
            placeholder="Number of days"
            required
          />
          <select
            name="duration_unit"
            value={data.duration_unit || 'days'}
            onChange={handleChange}
            className="px-4 py-3 sm:py-2 text-base sm:text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </select>
        </div>
      </div>

      {/* Ad Type */}
      <div className="space-y-3 pt-2">
        <label className="block text-base sm:text-sm font-semibold text-gray-700 mb-2">Available Ad Type</label>
        <div className="grid grid-cols-1 sm:flex sm:flex-row gap-4 sm:gap-6">
          {['Video', 'Audio', 'Image'].map((type) => (
            <label key={type} className="inline-flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-all duration-200">
              <input
                type="checkbox"
                name="ad_type"
                value={type}
                checked={(data.ad_type || []).includes(type)}
                onChange={handleChange}
                className="w-5 h-5 rounded text-orange-500 border-2 border-gray-300 focus:ring-orange-500"
              />
              <span className="ml-3 text-base sm:text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Campaign Start Date */}
      <div className="space-y-3 pt-2">
        <label htmlFor="campaign_start_date" className="block text-base sm:text-sm font-semibold text-gray-700 mb-2">
          Campaign Start Date
        </label>
        <input
          type="date"
          id="campaign_start_date"
          name="campaign_start_date"
          value={data.campaign_start_date || ''}
          onChange={handleChange}
          className="w-full px-4 py-3 sm:py-2 text-base sm:text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
          required
        />
      </div>

      {/* Campaign Requirements */}
      <div className="space-y-3 pt-2">
        <label htmlFor="campaign_requirements" className="block text-base sm:text-sm font-semibold text-gray-700 mb-2">
          Campaign Requirements
        </label>
        <textarea
          id="campaign_requirements"
          name="campaign_requirements"
          value={data.campaign_requirements || ''}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-3 text-base sm:text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 resize-none"
          placeholder="Describe your campaign requirements"
          required
        />
      </div>

      {/* Next Button */}
      <div className="flex justify-end pt-6">
        <button
          type="button"
          onClick={onNext}
          className="w-full sm:w-auto bg-orange-500 text-white px-6 py-3 sm:py-2 text-base sm:text-sm font-medium rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CampaignSection; 