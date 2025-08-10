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
    <div className="p-6 space-y-6">
      {/* Marketing Objective */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Marketing Objective</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
              <div className={`flex-1 text-center px-4 py-2 border rounded-lg ${
                data.marketing_objective === objective
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'border-gray-300 hover:border-orange-500'
              }`}>
                {objective}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Business Objective */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Business Objective</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <div className={`flex-1 text-center px-4 py-2 border rounded-lg ${
                data.business_objective === objective
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'border-gray-300 hover:border-orange-500'
              }`}>
                {objective}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Campaign Budget */}
      <div className="space-y-2">
        <label htmlFor="campaign_budget" className="block text-sm font-medium text-gray-700">
          Campaign Budget
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">₹</span>
          <input
            type="text"
            id="campaign_budget"
            name="campaign_budget"
            value={data.campaign_budget || ''}
            onChange={handleChange}
            className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter Your Budget"
            required
          />
        </div>
      </div>

      {/* Campaign Duration */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Campaign Duration</label>
        <div className="flex gap-4">
          <input
            type="number"
            name="duration_days"
            value={data.duration_days || ''}
            onChange={handleChange}
            min="1"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Number of days"
            required
          />
          <select
            name="duration_unit"
            value={data.duration_unit || 'days'}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </select>
        </div>
      </div>

      {/* Ad Type */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Available Ad Type</label>
        <div className="flex gap-6">
          {['Video', 'Audio', 'Image'].map((type) => (
            <label key={type} className="inline-flex items-center">
              <input
                type="checkbox"
                name="ad_type"
                value={type}
                checked={(data.ad_type || []).includes(type)}
                onChange={handleChange}
                className="rounded text-orange-500 focus:ring-orange-500"
              />
              <span className="ml-2 text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Campaign Start Date */}
      <div className="space-y-2">
        <label htmlFor="campaign_start_date" className="block text-sm font-medium text-gray-700">
          Campaign Start Date
        </label>
        <input
          type="date"
          id="campaign_start_date"
          name="campaign_start_date"
          value={data.campaign_start_date || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      {/* Campaign Requirements */}
      <div className="space-y-2">
        <label htmlFor="campaign_requirements" className="block text-sm font-medium text-gray-700">
          Campaign Requirements
        </label>
        <textarea
          id="campaign_requirements"
          name="campaign_requirements"
          value={data.campaign_requirements || ''}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Describe your campaign requirements"
          required
        />
      </div>

      {/* Next Button */}
      <div className="flex justify-end pt-4">
        <button
          type="button"
          onClick={onNext}
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CampaignSection; 