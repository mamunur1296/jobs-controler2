import React, { useState } from 'react';
import VarticalNav from '../components/ui-path-com/VarticalNav';

const NaveItemUi = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div className=" w-full bg-black md:h-screen text-white">
        <div className="flex items-center justify-between py-4 px-6 md:p-0">
         <button
            onClick={toggleNav}
            className="md:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:block ${isOpen ? "block" : "hidden"}`}>
          <ul className="py-2 px-4 md:pe-0">
          <li className="py-2 ">
            <VarticalNav />
            </li>
          </ul>
        </div>
      </div>
    );
};

export default NaveItemUi;