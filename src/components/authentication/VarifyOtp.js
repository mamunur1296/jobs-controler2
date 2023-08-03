import React, { useContext, useState } from 'react';
import { AuthContext } from '../../authContext/AuthProvaider';
import { varifyOtp } from '../../utillies/auth-utill';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyOtp = () => {
  const [otp, setOTP] = useState('');
  const {userotp}=useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    varifyOtp(otp).then(data=>{
        if(data){
            console.log(data);
            navigate(from, { replace: true });  
        }
    }).catch(err=>{
        console.log(err);
    })
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleOTPSubmit}
        className="bg-white shadow-md rounded px-8 py-6"
        style={{ width: '300px' }}
      >
        <h2 className="text-2xl font-bold mb-4">Enter the OTP {userotp}</h2>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4"
          placeholder="OTP"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
