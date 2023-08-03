import React from "react";
import { Navigate, useLocation } from "react-router-dom";


// PrivateRoute component to protect routes that require authentication
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const token = JSON.parse(localStorage.getItem('authItem'));
  
  // Check if the user is authenticated (token exists)
  if (token?.token ) {
    // Render the children (protected component) if authenticated
    return children;
  }

  // Redirect the user to the login page if not authenticated
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

