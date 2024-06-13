import { useState, useEffect, useRef } from 'react';
import '../Css/Dropdown.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const categories = [
      'Electronics',
      'Books',
      'Clothing',
      'Home & Kitchen',
      'Toys & Games',
      'Beauty & Personal Care',
      'Sports & Outdoors',
      'Automotive',
      'Health & Household',
      'Grocery & Gourmet Food',
      'Pet Supplies',
      'Tools & Home Improvement',
      'Office Products'
    ];
  
    return (
      <div className="dropdown" ref={dropdownRef}>
        <button onClick={toggleDropdown} className="dropdown-toggle">
          All<span>▼</span>
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {categories.map((category, index) => (
              <div key={index} className="dropdown-item">
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Dropdown;