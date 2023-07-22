import { faFolder, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import VarticalNav from '../../components/ui-path-com/VarticalNav';

const UiHome = () => {
  const navigate = useNavigate();
  const paramsData = useParams();

  // Function to handle logout
  const handleLogout = () => {
    // Remove the authentication data from local storage and redirect to the home page
    localStorage.removeItem('authItem');
    navigate('/');
  };

  return (
    <main className="flex bg-gray-900 h-screen gap-2 text-white">
      {/* Sidebar */}
      <div className="w-1/5 border pt-5 ps-5">
        <div className='flex justify-between'>
          {/* My Folders */}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFolder} className="text-gray-400" />
            <p className="text-sm">My Folders</p>
          </div>

          {/* Logout button */}
          <div className="flex items-center gap-2">
            <button onClick={handleLogout} className="text-sm me-5">Logout</button>
          </div>
        </div>

        {/* Search bar */}
        <div className="border rounded-md px-3 py-1 mt-4 flex items-center">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          <input
            className="bg-gray-900 ml-2 text-white placeholder-gray-400 focus:outline-none w-full"
            type="search"
            placeholder="Search"
            id="gsearch"
            name="gsearch"
          />
        </div>

        {/* Vertical navigation */}
        <div className="flex items-center gap-2 mt-4">
          <div>
            <VarticalNav />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/5 border pt-5 ps-5">
        {/* Page title and navigation */}
        <div className="flex items-center justify-between gap-5">
          <p className='text-3xl'>Data For <span className='text-green-600'>{paramsData.name}</span></p>
          <Link className='me-5' to="/home">Go to Home</Link>
        </div>

        {/* Search bar in main content */}
        <div className="flex items-center justify-between px-5 mt-4">
          <div className="border rounded-md px-3 py-1 flex items-center">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            <input
              className="bg-gray-900 ml-2 text-white placeholder-gray-400 focus:outline-none"
              type="search"
              placeholder="Search"
              id="gsearch"
              name="gsearch"
            />
          </div>
        </div>

        {/* Content inside the main section */}
        <div className='border mt-5 me-5'>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default UiHome;
