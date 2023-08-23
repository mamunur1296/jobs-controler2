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
    <main className=" md:flex bg-gray-900 min-h-screen gap-2 text-white">
      {/* Sidebar */}
      <div className="w-full   md:w-1/5 border pb-8 pt-5 ps-5">
        <div className='flex justify-between'>
          {/* My Folders */}
          <div className= "flex text-white bg-gradient-to-r text-[10px] md:text-base  from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1 md:px-5 py-.5 md:py-2.5 text-center md:mr-2 md:mb-2">
            <FontAwesomeIcon icon={faFolder} className="text-gray-400 text-w" />
            <p className="text-sm">My Folders</p>
          </div>

          {/* Logout button */}
          <div className="text-white bg-gradient-to-r text-[10px] md:text-base  from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1 md:px-5 py-.5 md:py-2.5 text-center md:mr-2 md:mb-2">
            <button onClick={handleLogout} className="text-sm me-5">Logout</button>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex  items-center justify-between px-1 mt-4">
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
          <div>
            <VarticalNav />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-4/5 border pt-5 ps-5 py-4">
        {/* Page title and navigation */}
        <div className="flex items-center justify-between gap-5">
          <p className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-3xl px-5 py-2.5 text-center mr-2 mb-2">Data For <span>{paramsData.name}</span></p>
          <Link className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-3xl px-5 py-2.5 text-center mr-2 mb-2" to="/">Go to Home</Link>
        </div>

        {/* Search bar in main content */}
        <div className="flex items-center justify-between px-1 mt-4">
        <div className="flex">
            <input
                className="bg-white w-40 md:w-96 text-gray-900 py-2 px-4 rounded-l"
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

        {/* Content inside the main section */}
        <div className='border mt-5 me-5'>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default UiHome;
