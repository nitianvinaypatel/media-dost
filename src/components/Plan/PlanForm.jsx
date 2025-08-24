import React, { useState } from "react";
import {
  FaLightbulb,
  FaBullhorn,
  FaBullseye,
  FaTv,
  FaCheck,
} from "react-icons/fa";
import BrandSection from "./FormSections/BrandSection";
import CampaignSection from "./FormSections/CampaignSection";
import AudienceSection from "./FormSections/AudienceSection";
import MediaSection from "./FormSections/MediaSection";

const PlanForm = ({ onSubmit }) => {
  const [activeSection, setActiveSection] = useState("");
  const [completedSections, setCompletedSections] = useState([]);
  const [formData, setFormData] = useState({
    brand: {},
    campaign: {},
    audience: {},
    media: {},
  });

  const handleSectionChange = (section) => {
    // Toggle section - if clicking the active section, close it
    setActiveSection(prev => prev === section ? "" : section);
  };

  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
    if (!completedSections.includes(section)) {
      setCompletedSections((prev) => [...prev, section]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const getNextSectionId = (currentSection) => {
    const sectionOrder = ["brand", "campaign", "audience", "media"];
    const currentIndex = sectionOrder.indexOf(currentSection);
    return sectionOrder[currentIndex + 1] || "";
  };

  const sections = [
    {
      id: "brand",
      title: "About The Brand",
      icon: <FaLightbulb className="text-xl" />,
      component: (
        <BrandSection
          data={formData.brand}
          onChange={(data) => updateFormData("brand", data)}
          onNext={() => {
            const nextSection = getNextSectionId("brand");
            setCompletedSections(prev => [...new Set([...prev, "brand"])]);
          }}
        />
      ),
    },
    {
      id: "campaign",
      title: "Campaign Details",
      icon: <FaBullhorn className="text-xl" />,
      component: (
        <CampaignSection
          data={formData.campaign}
          onChange={(data) => updateFormData("campaign", data)}
          onNext={() => {
            const nextSection = getNextSectionId("campaign");
            setCompletedSections(prev => [...new Set([...prev, "campaign"])]);
          }}
        />
      ),
    },
    {
      id: "audience",
      title: "Target Audience",
      icon: <FaBullseye className="text-xl" />,
      component: (
        <AudienceSection
          data={formData.audience}
          onChange={(data) => updateFormData("audience", data)}
          onNext={() => {
            const nextSection = getNextSectionId("audience");
            setCompletedSections(prev => [...new Set([...prev, "audience"])]);
          }}
        />
      ),
    },
    {
      id: "media",
      title: "Media Preferences",
      icon: <FaTv className="text-xl" />,
      component: (
        <MediaSection
          data={formData.media}
          onChange={(data) => updateFormData("media", data)}
        />
      ),
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* <div className="flex items-center justify-between mb-8 px-4">
        {sections.map((section, index) => (
          <div key={section.id} className="flex items-center">
            <div 
              className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 cursor-pointer
                ${activeSection === section.id 
                  ? 'bg-orange-500 border-orange-500 text-white' 
                  : completedSections.includes(section.id)
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'bg-white border-gray-300 text-gray-500'}`}
              onClick={() => handleSectionChange(section.id)}
            >
              {completedSections.includes(section.id) ? (
                <FaCheck className="text-lg" />
              ) : (
                section.icon
              )}
              <span className="absolute -bottom-6 text-sm font-medium text-gray-600 whitespace-nowrap">
                {section.title}
              </span>
            </div>
            {index < sections.length - 1 && (
              <div className={`h-0.5 w-16 mx-2 transition-all duration-300
                ${completedSections.includes(section.id) ? 'bg-green-500' : 'bg-gray-300'}`}
              />
            )}
          </div>
        ))}
      </div> */}

      {sections.map((section) => (
        <div
          key={section.id}
          className={`bg-white rounded-xl border-2 transition-all duration-300 ${
            activeSection === section.id
              ? "border-orange-500 shadow-lg shadow-orange-100"
              : completedSections.includes(section.id)
              ? "border-green-500"
              : "border-gray-200"
          }`}
        >
          <button
            type="button"
            onClick={() => handleSectionChange(section.id)}
            className={`w-full flex items-center p-6 text-left transition-all cursor-pointer group ${
              activeSection === section.id
                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-xl"
                : completedSections.includes(section.id)
                ? "bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-xl"
                : "bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-xl"
            }`}
          >
            <span className="mr-4">{section.icon}</span>
            <span className="text-lg font-medium">{section.title}</span>
            <span className="ml-auto">
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  activeSection === section.id ? "rotate-180" : ""
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
            </span>
          </button>

          <div
            className={`transition-all duration-500 ease-in-out ${
              activeSection === section.id
                ? "max-h-[2000px] opacity-100 p-6"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {section.component}
          </div>
        </div>
      ))}

      <div className="flex justify-center pt-8">
        <button
          type="submit"
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 hover:shadow-lg flex items-center space-x-3"
        >
          <FaLightbulb className="text-xl" />
          <span className="text-lg">Request Your Plan</span>
        </button>
      </div>
    </form>
  );
};

export default PlanForm;
