// import ipify from 'ipify';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [error,setErrors]=useState('')
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (regesterData) => {
    const response = await axios.get('https://api.ipify.org?format=json');
      const ipAddress = response.data.ip;

    const userObj={
      ...regesterData ,
      ipAddress,
    }
    try {
      const response = await fetch('https://jobs-controler-server2.vercel.app/authentication/regester', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Credentials": true,
          "cache-control":"no-cache,no-store"
        },
        credentials: 'include',
        body: JSON.stringify(userObj),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      navigate("/authlogin")
      setErrors("")
      console.log('Registration successful:', data);
      // Do something with the response data, e.g., show a success message or redirect to another page
    } catch (error) {
      if (error.response && error.response.status === 422) {
        // If the response status is 422 (Unprocessable Entity), extract the errors and set them in the state
        setErrors(error.response.data.errors || {});
      } else {
        console.error('Error during registration:', error);
      }
    }
  };
  console.log(error);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {error && (
            <p className="text-red-500 text-xs mt-1">{error}</p>
          )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            id="name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
          />
        {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
            type="text"
            id="email"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
            Mobile
          </label>
          <input
            {...register('mobile', { required: 'Mobile is required' })}
            type="text"
            id="mobile"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your mobile number"
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
            })}
            type="password"
            id="password"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Register
          </button>
        </div>
        <p>Alrady have an account Please <Link to="/authlogin" className='text-green-400'>Login</Link></p>
      </form>
    </div>
  );
};

export default RegisterForm;
