import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authContext/AuthProvaider";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { users, loading } = useContext(AuthContext);
  console.log(users, "private");
  if (loading) {
    return <p>Loading...</p>;
  }
  // Check if the user is authenticated (user object exists)
  if (users?.role === "admin") {
      // Render the children (protected component) if authenticated
      return children;
    }

  // Redirect the user to the login page if not authenticated
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
