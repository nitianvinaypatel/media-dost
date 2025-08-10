import React, { useState, useRef, useEffect } from 'react';
import { IoChevronDownOutline, IoClose } from 'react-icons/io5';

const FilterDropdown = ({
  id,
  title,
  options,
  selectedOptions,
  onOptionChange,
  searchable = true,
  isSortFilter = false,
  errorMessage = '* Please select an option'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = searchable && searchTerm
    ? options.filter(option => 
        typeof option === 'string' 
          ? option.toLowerCase().includes(searchTerm.toLowerCase())
          : option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const handleOptionClick = (option, checked) => {
    if (isSortFilter) {
      onOptionChange([option]);
    } else {
      const value = typeof option === 'string' ? option : option.value;
      if (checked) {
        onOptionChange([...selectedOptions, value]);
      } else {
        onOptionChange(selectedOptions.filter(item => item !== value));
      }
    }
  };

  const getDisplayTitle = () => {
    if (isSortFilter && selectedOptions.length > 0) {
      const selectedOption = options.find(opt => 
        opt.value === selectedOptions[0]
      );
      return selectedOption ? selectedOption.label : title;
    }
    return selectedOptions.length > 0 ? `${title} (${selectedOptions.length})` : title;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-full cursor-pointer rounded-lg border px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
          selectedOptions.length > 0
            ? 'bg-blue-50 border-blue-300 text-blue-900'
            : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex items-center justify-between">
          <span className="block truncate">{getDisplayTitle()}</span>
          <IoChevronDownOutline
            className={`transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {searchable && !isSortFilter && (
            <div className="sticky top-0 bg-white px-3 py-2 border-b border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={`Search ${title.toLowerCase()}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
                {searchTerm && (
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchTerm('')}
                  >
                    <IoClose />
                  </button>
                )}
              </div>
            </div>
          )}

          <div className="py-1">
            {filteredOptions.length === 0 ? (
              <div className="px-3 py-2 text-gray-500 text-sm">
                No options found
              </div>
            ) : (
              filteredOptions.map((option, index) => {
                const value = typeof option === 'string' ? option : option.value;
                const label = typeof option === 'string' ? option : option.label;
                
                return (
                  <label
                    key={index}
                    className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <input
                      type={isSortFilter ? 'radio' : 'checkbox'}
                      checked={selectedOptions.includes(value)}
                      onChange={(e) => handleOptionClick(option, e.target.checked)}
                      className={`mr-3 ${
                        isSortFilter
                          ? 'text-blue-600 focus:ring-blue-500'
                          : 'rounded text-blue-600 focus:ring-blue-500'
                      }`}
                    />
                    <span className="text-gray-900">{label}</span>
                  </label>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown; 