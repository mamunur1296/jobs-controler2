import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import NaveUi from './NaveUi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const UiDashboard = () => {
    const paramsData = useParams();
    return (
        <div className='md:flex'>
            <div className='md:w-1/6 bg-black md:min-h-screen text-white'> 
                <NaveUi />
            </div>
            <div className='md:w-5/6 md:ps-10 bg-gray-700 pt-2 min-h-screen text-white'>
            <div className="flex items-center justify-between gap-5">
          <p className= " flex justify-center items-center gap-2 px-2 rounded-sm  text-white bg-gradient-to-r  md:text-base  from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium md:only:rounded-lg text-sm  md:px-5 py-1 md:py-2.5 text-center md:mr-2 md:mb-2">Data For <span>{paramsData.name}</span></p>
          <Link className= " flex justify-center items-center gap-2 px-2 rounded-sm  text-white bg-gradient-to-r  md:text-base  from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium md:only:rounded-lg text-sm  md:px-5 py-1 md:py-2.5 text-center md:mr-2 md:mb-2"
          to="/"
          >Go to Home</Link>
        </div>
            <div className="flex items-center  justify-between pb-4 px-1 mt-3">
                <div className="flex w-full">
                    <input
                        className="bg-white w-full  md:w-96 text-gray-900 py-2 px-4 rounded-l"
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
                
                <Outlet /></div>
        </div>
    );
};

export default UiDashboard;