import React, { createContext, useState } from 'react';
import { fetchLoginUserData } from '../utillies/auth-utill';
import { useQuery } from '@tanstack/react-query';

export const AuthContext = createContext();

const AuthProvaider = ({ children }) => {

  const [userotp, setUserotp]=useState("")
  const { data ,isLoading , refetch } = useQuery(['getLoginUsers'], () => fetchLoginUserData());
console.log(data);
  const value = {
    users:data,
    loading:isLoading,
    refetch,
    userotp, 
    setUserotp
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvaider;
