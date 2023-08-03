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
          localStorage.removeItem("isUser")
          refetch().then(()=>{
              navigate('/')  
          })
        } catch (error) {
          console.error('Error during logout:', error);
          // Handle any errors during the logout process
        }
      };
    return (
        <button onClick={handleLogout} className="bg-blue-500 rounded-lg text-neutral-50 py-2 px-4 ">
        Log Out 
    </button>
    );
};

export default Logout;