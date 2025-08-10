import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const BrandSection = ({ data, onChange, onNext }) => {
  const [socialMediaLinks, setSocialMediaLinks] = useState(data.socialMediaLinks || ['']);
  const [competitors, setCompetitors] = useState(data.competitors || ['']);

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

  const handleSocialMediaChange = (index, value) => {
    const newLinks = [...socialMediaLinks];
    newLinks[index] = value;
    setSocialMediaLinks(newLinks);
    onChange({ ...data, socialMediaLinks: newLinks });
  };

  const handleCompetitorChange = (index, value) => {
    const newCompetitors = [...competitors];
    newCompetitors[index] = value;
    setCompetitors(newCompetitors);
    onChange({ ...data, competitors: newCompetitors });
  };

  const addSocialMediaLink = () => {
    setSocialMediaLinks([...socialMediaLinks, '']);
  };

  const addCompetitor = () => {
    setCompetitors([...competitors, '']);
  };

  const removeSocialMediaLink = (index) => {
    const newLinks = socialMediaLinks.filter((_, i) => i !== index);
    setSocialMediaLinks(newLinks);
    onChange({ ...data, socialMediaLinks: newLinks });
  };

  const removeCompetitor = (index) => {
    const newCompetitors = competitors.filter((_, i) => i !== index);
    setCompetitors(newCompetitors);
    onChange({ ...data, competitors: newCompetitors });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email ID
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Brand Name */}
      <div className="space-y-2">
        <label htmlFor="brandName" className="block text-sm font-medium text-gray-700">
          Brand Name
        </label>
        <input
          type="text"
          id="brandName"
          name="brandName"
          value={data.brandName || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter your brand name"
          required
        />
      </div>

      {/* Sales Channel */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Sales Channel</label>
        <div className="space-x-4">
          {['App', 'Website', 'Offline'].map((channel) => (
            <label key={channel} className="inline-flex items-center">
              <input
                type="checkbox"
                name="salesChannels"
                value={channel}
                checked={(data.salesChannels || []).includes(channel)}
                onChange={handleChange}
                className="rounded text-orange-500 focus:ring-orange-500"
              />
              <span className="ml-2 text-sm text-gray-700">{channel}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Social Media Links</label>
        {socialMediaLinks.map((link, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={link}
              onChange={(e) => handleSocialMediaChange(index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter social media link (e.g., LinkedIn, FB, IG)"
            />
            <button
              type="button"
              onClick={() => removeSocialMediaLink(index)}
              className="p-2 text-red-500 hover:text-red-700"
            >
              <FaTimes />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addSocialMediaLink}
          className="text-orange-500 hover:text-orange-700 flex items-center gap-1"
        >
          <FaPlus /> Add Social Media Link
        </button>
      </div>

      {/* Sector */}
      <div className="space-y-2">
        <label htmlFor="sector" className="block text-sm font-medium text-gray-700">
          Sector
        </label>
        <input
          type="text"
          id="sector"
          name="sector"
          value={data.sector || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter your sector"
          required
        />
      </div>

      {/* Competitors */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Competitors</label>
        {competitors.map((competitor, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={competitor}
              onChange={(e) => handleCompetitorChange(index, e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter competitor name"
            />
            <button
              type="button"
              onClick={() => removeCompetitor(index)}
              className="p-2 text-red-500 hover:text-red-700"
            >
              <FaTimes />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addCompetitor}
          className="text-orange-500 hover:text-orange-700 flex items-center gap-1"
        >
          <FaPlus /> Add Competitor
        </button>
      </div>

      {/* Product Description */}
      <div className="space-y-2">
        <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">
          Describe your product
        </label>
        <textarea
          id="productDescription"
          name="productDescription"
          value={data.productDescription || ''}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Describe your product"
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

export default BrandSection; 