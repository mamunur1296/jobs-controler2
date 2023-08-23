import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthProvaider';
import { maskMobileNumber, phonLogin } from '../../utillies/auth-utill';

const SendOtp = () => {
  const navigate = useNavigate();
  const { users, setUserotp } = useContext(AuthContext);
  const maskedNumber = maskMobileNumber(users?.mobile);
  const [mobileNumber, setMobileNumber] = useState('');

  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    phonLogin(mobileNumber)
      .then((data) => {
        console.log(data);
        if (data.otp) {
          setUserotp(data?.otp);
          navigate('/varifyotp');
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // setUserInprotPhonNumber(mobileNumber);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
    <div className=" text-white shadow-md rounded px-8 py-6 w-96">
      <h2 className="text-2xl font-bold mb-4">Welcome to Our Social Network</h2>
      <p className="mb-2 text-gray-300">
        Connect with friends and the world around you on our social network. Get updates, share
        your thoughts, and more.
      </p>
      <p className="mb-2 text-gray-300">
        To continue, please enter the mobile number associated with your account.
      </p>
      <p className="mb-2 text-gray-300">Last digit of your registered mobile number: {maskedNumber}</p>
      <form onSubmit={handleMobileSubmit}>
        <div className="mb-4">
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            id="mobileNumber"
            name="mobileNumber"
            className="w-full border rounded py-2  px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your mobile number"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white rounded-lg py-2 px-4 hover:bg-orange-600"
        >
          Send OTP
        </button>
      </form>
      <p className="mt-4 text-gray-300">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  </div>
  );
};

export default SendOtp;
