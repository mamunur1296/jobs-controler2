import React, { useContext, useState } from 'react';
import { AuthContext } from '../../authContext/AuthProvaider';
import { maskMobileNumber, phonLogin } from '../../utillies/auth-utill';
import { useNavigate } from 'react-router-dom';

const SendOtp = () => {
  const navigate=useNavigate()  
  const { users, setUserotp } = useContext(AuthContext);
  const maskedNumber = maskMobileNumber(users?.mobile);
  const [mobileNumber, setMobileNumber] = useState('');

  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    phonLogin(mobileNumber).then(data=>{
        console.log(data);
        if(data.otp){
            setUserotp(data?.otp)
            navigate("/varifyotp")
        } 
    }).catch(err=>{
        console.log(err);
    })
    // setUserInprotPhonNumber(mobileNumber);
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <form onSubmit={handleMobileSubmit} className="bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">Enter your registered mobile number</h2>
        <h2 className="text-2xl font-bold mb-4">Last digit: {maskedNumber}</h2>
        <div className="mb-4">
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            id="mobileNumber"
            name="mobileNumber"
            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your mobile number"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default SendOtp;
