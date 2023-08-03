// src/components/LoginPage.js
import React, {   useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link,  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthProvaider';
import { phonLogin } from '../../utillies/auth-utill';
const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const {refetch}=useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      const response = await fetch('https://jobs-controler-server2.vercel.app/authentication/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "cache-control":"no-cache,no-store"
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      refetch().then( async ()=>{
        phonLogin().then(()=>{
          navigate("/otpauth")

        })
      })
      console.log('Registration successful:', data);
      // Do something with the response data, e.g., show a success message or redirect to another page
    } catch (error) {
      console.log(error);
    }
    setError('Invalid credentials. Please try again.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
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
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
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
            Login
          </button>
          
        </div>
      <p>Alrady have an account Please <Link to="/regester" className='text-green-400'>Regester</Link></p>
      </form>
    </div>
  );
};

export default LoginPage;
