import React from 'react';

const MediaSection = ({ data, onChange }) => {
  const mediaTypes = [
    'Outdoor',
    'Residential',
    'Retail & Mall',
    'Transit',
    'Influencer',
    'Cinema',
    'Digital',
    'Newspaper',
    'Radio',
    'Sports',
    'Television',
    'Others'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const newValue = checked
        ? [...(data[name] || []), value]
        : (data[name] || []).filter(item => item !== value);
      
      onChange({ ...data, [name]: newValue });
    } else {
      onChange({ ...data, [name]: value });
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Media Preferences */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Media Preferences</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {mediaTypes.map((type) => (
            <label key={type} className="inline-flex items-center">
              <input
                type="checkbox"
                name="media_types"
                value={type}
                checked={(data.media_types || []).includes(type)}
                onChange={handleChange}
                className="rounded text-orange-500 focus:ring-orange-500"
              />
              <span className="ml-2 text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Additional Media Preferences */}
      <div className="space-y-2">
        <label htmlFor="additional_media" className="block text-sm font-medium text-gray-700">
          Additional Media Preferences
        </label>
        <textarea
          id="additional_media"
          name="additional_media"
          value={data.additional_media || ''}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Add here..."
        />
      </div>
    </div>
  );
};

export default MediaSection; 