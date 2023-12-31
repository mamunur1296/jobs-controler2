import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthProvaider';

const Logout = () => {
    const navigate = useNavigate();
    const {refetch }=useContext(AuthContext)
    const handleLogout = async () => {
        try {
          // Call the logout endpoint on the server using fetch
          const response = await fetch('https://jobs-controler-server2.vercel.app/authentication/logout', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Credentials": true,
              "cache-control":"no-cache,no-store"
            },
            credentials: 'include', 
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          refetch().then(()=>{
              navigate('/')  
          })
        } catch (error) {
          console.error('Error during logout:', error);
          // Handle any errors during the logout process
        }
      };
    return (
        <button onClick={handleLogout} className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >
        Log Out 
        </button>
    );
};

export default Logout;