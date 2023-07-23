import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


const VarticalNavChild = ({folder}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const {OrganizationUnitFullyQualifiedName,OrganizationUnitId ,Key}=folder;

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div  ref={dropdownRef}>
      <button 
        onClick={toggleDropdown}
        className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFolder} className="text-gray-400" />
            <p className="text-sm">{OrganizationUnitFullyQualifiedName}</p>
        </button>
        {isOpen && (
          <ul >
            <li>
              <Link to={`/ui-path/${OrganizationUnitFullyQualifiedName}/${OrganizationUnitId}/${Key}`} className="block ps-6  text-sm">
              Jobs
              </Link>
            </li>
            <li>
              <Link  className="block ps-6  text-sm">
              Processes
              </Link>
            </li>
            <li>
              <Link  className="block ps-6  text-sm">
              Assets
              </Link>
            </li>
            <li>
              <Link  className="block ps-6  text-sm">
              Queue
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default VarticalNavChild;

