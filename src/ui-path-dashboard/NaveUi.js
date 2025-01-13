import { faFolder, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NaveItemUi from './NaveItemUi';

const NaveUi = () => {
    const navigate = useNavigate();
    // const paramsData = useParams();
  
    // Function to handle logout
    const handleLogout = () => {
      // Remove the authentication data from local storage and redirect to the home page
      localStorage.removeItem('authItem');
      navigate('/');
    };
    return (
        <div className="px-2 md:pe-0 pt-3">
        <div className='flex justify-between'>
          {/* My Folders */}
          <div className= " flex justify-center items-center gap-2 px-2 rounded-sm  text-white bg-gradient-to-r  md:text-base  from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium md:only:rounded-lg text-sm  md:px-5 py-1 md:py-2.5 text-center md:mr-2 md:mb-2">
            <FontAwesomeIcon icon={faFolder} className="text-white text-w" />
            <p className="text-sm">My Folders</p>
          </div>

          {/* Logout button */}
          <div className= " flex justify-center items-center gap-2 px-2 rounded-sm  text-white bg-gradient-to-r  md:text-base  from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium md:only:rounded-lg text-sm  md:px-5 py-1 md:py-2.5 text-center md:mr-2 md:mb-2">
            <button onClick={handleLogout} className="text-sm me-5">Logout</button>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex md:pe-2  items-center justify-between px-1 mt-4">
        <div className="flex w-full">
            <input
                className="bg-white w-full  text-gray-900 py-2 px-4 rounded-l"
                type="search"
                placeholder="Search"
                id="gsearch"
                name="gsearch"
            />
            <button
                className="bg-orange-500 w-14 md:w-28 text-white py-2 rounded-r"
                onClick={""}
            >
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>

        </div>

        {/* Vertical navigation */}
        <div className="flex items-center gap-2 mt-4">
          <div className='w-full'>
            <NaveItemUi />
          </div>
        </div>
      </div>
    );
};

export default NaveUi;