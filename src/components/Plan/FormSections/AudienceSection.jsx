import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const AudienceSection = ({ data, onChange, onNext }) => {
  const [showAgeDropdown, setShowAgeDropdown] = useState(false);
  const [geographyList, setGeographyList] = useState(data.geography || ['']);

  const ageGroups = [
    'Under 13', '13-17', '18-24', '25-34', '35-44',
    '45-54', '55-64', '65-74', '75-84', '85 and above'
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

  const handleAgeGroupClick = (ageGroup) => {
    const currentAgeGroups = data.age_groups || [];
    const newAgeGroups = currentAgeGroups.includes(ageGroup)
      ? currentAgeGroups.filter(group => group !== ageGroup)
      : [...currentAgeGroups, ageGroup];
    
    onChange({ ...data, age_groups: newAgeGroups });
  };

  const handleGeographyChange = (index, value) => {
    const newList = [...geographyList];
    newList[index] = value;
    setGeographyList(newList);
    onChange({ ...data, geography: newList });
  };

  const addGeography = () => {
    setGeographyList([...geographyList, '']);
  };

  const removeGeography = (index) => {
    const newList = geographyList.filter((_, i) => i !== index);
    setGeographyList(newList);
    onChange({ ...data, geography: newList });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Age Group */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Age Group</label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowAgeDropdown(!showAgeDropdown)}
            className="w-full px-4 py-2 text-left border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
          >
            <span className="flex items-center justify-between">
              <span>
                {data.age_groups?.length
                  ? `${data.age_groups.length} age groups selected`
                  : 'Choose Age Group'}
              </span>
              <span className={`transform transition-transform ${showAgeDropdown ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </span>
          </button>

          {showAgeDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
              {ageGroups.map((group) => (
                <div
                  key={group}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  onClick={() => handleAgeGroupClick(group)}
                >
                  <input
                    type="checkbox"
                    checked={(data.age_groups || []).includes(group)}
                    onChange={() => {}}
                    className="mr-3 rounded text-orange-500 focus:ring-orange-500"
                  />
                  <span>{group}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Gender */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <div className="flex gap-6">
          {['Male', 'Female'].map((gender) => (
            <label key={gender} className="inline-flex items-center">
              <input
                type="checkbox"
                name="gender"
                value={gender}
                checked={(data.gender || []).includes(gender)}
                onChange={handleChange}
                className="rounded text-orange-500 focus:ring-orange-500"
              />
              <span className="ml-2 text-sm text-gray-700">{gender}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Income */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Income</label>
        <div className="flex gap-6">
          {['Low Income', 'Middle Income', 'High Income'].map((income) => (
            <label key={income} className="inline-flex items-center">
              <input
                type="checkbox"
                name="income"
                value={income}
                checked={(data.income || []).includes(income)}
                onChange={handleChange}
                className="rounded text-orange-500 focus:ring-orange-500"
              />
              <span className="ml-2 text-sm text-gray-700">{income}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Geography */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Geography</label>
        {geographyList.map((location, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={location}
              onChange={(e) => handleGeographyChange(index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter geography (e.g., Country, State, City)"
            />
            <button
              type="button"
              onClick={() => removeGeography(index)}
              className="p-2 text-red-500 hover:text-red-700"
            >
              <FaTimes />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addGeography}
          className="text-orange-500 hover:text-orange-700 flex items-center gap-1"
        >
          <FaPlus /> Add Geography
        </button>
      </div>

      {/* Additional Details */}
      <div className="space-y-2">
        <label htmlFor="additional_details" className="block text-sm font-medium text-gray-700">
          Additional Details
        </label>
        <textarea
          id="additional_details"
          name="additional_details"
          value={data.additional_details || ''}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Your Comment..."
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

export default AudienceSection; 