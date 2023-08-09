// SideNav.js
import React, { useContext, useState } from 'react';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthProvaider';
import Logout from '../authentication/Logout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';

const DashBoirdNave = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {users}=useContext(AuthContext)

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:w-80 bg-black md:h-screen text-white">
      <div className="flex items-center justify-between py-4 px-6 md:p-0">
        <span className="text-xl  font-semibold bg-orange-600 py-5 px-10 md:px-20 ">Admin Dashboird</span>
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
      <div class="relative mt-5 flex flex-col items-center justify-center ">
        <img class="w-20 h-20  rounded-full" src={users.avatar} alt=""/>
        <p>{users.role}</p>
        <h6 className='text-2xl'>{users.name}</h6>
        <button  ><Logout /></button>
      </div>
      <hr className='mt-5 w-10/12 mx-auto'/>
      <div className={`md:block ${isOpen ? "block" : "hidden"}`}>
        <ul className="py-2 px-4 md:pe-0">
        <li className="py-2 ">
            <NavLink
              to="/dashboard"
              activeClassName="bg-gray-700"
              className={({ isActive, isPending }) =>
              isActive ? "bg-gray-700  md:rounded-full md:rounded-e-none text-white px-4  py-2  block" : "text-white hover:bg-gray-700 px-4 py-2 block"
            }
            >
            <FontAwesomeIcon className='pe-5' icon={faUsersViewfinder} />
             All Users
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoirdNave;
