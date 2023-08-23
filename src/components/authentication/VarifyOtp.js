import React, { useContext, useState } from 'react';
import { AuthContext } from '../../authContext/AuthProvaider';
import { varifyOtp } from '../../utillies/auth-utill';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const VerifyOtps = () => {
  const [otp, setOTP] = useState('');
  const { userotp } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    varifyOtp(otp)
      .then((data) => {
        if (data) {
          console.log(data);
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className=" text-white shadow-md rounded px-8 py-6 w-96">
        <h2 className="text-2xl  font-bold mb-4">Enter the OTP</h2>
        <p className="mb-2 text-gray-300">
          To verify your account, please enter the OTP sent to your registered mobile number.
        </p>
        <p className="mb-2 text-gray-300">OTP: {userotp}</p>
        <form onSubmit={handleOTPSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter OTP"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white rounded-lg py-2 px-4 hover:bg-orange-600"
          >
            Verify OTP
          </button>
        </form>
        <p className="mt-4 text-gray-300">
          Didn't receive the OTP? <Link>Resend OTP</Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtps;
