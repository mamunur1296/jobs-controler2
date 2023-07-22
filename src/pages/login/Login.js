import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = React.useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  // Function to handle the login form submission
  const handleLogin = async (data) => {
    const newObj = {
      grant_type: 'refresh_token',
      client_id: data.client_id,
      refresh_token: data.refresh_token,
      organization: data.organization,
      environment: data.environment
    };
    try {
      // Make the API request using fetch
      const response = await fetch(`${process.env.React_App_LOCAL_HOST}${process.env.React_App_LOGIN_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newObj),
      });

      // Handle the API response
      const responseData = await response.json();
      if(responseData.access_token){
          const storeData = {
            token: responseData.access_token,
            client_id: data.client_id,
            refresh_token: data.refresh_token,
          };
          localStorage.setItem('authItem', JSON.stringify(storeData));
          navigate(from, { replace: true }); // Navigate to the previous page after successful login
      } else{
        setError('internal server error ');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching the API data');
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl text-white font-bold mb-6">Sign In</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className='flex gap-x-3' >
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="organization">
                  Organization
                </label>
                <input
                  {...register('organization', { required: true })}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Organization"
                />
                {errors.organization && <p className="text-red-500 mt-2">Organization is required</p>}
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="environment">
                  Environment
                </label>
                <input
                  {...register('environment', { required: true })}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Environment"
                />
                {errors.environment && <p className="text-red-500 mt-2">Environment is required</p>}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="client_id">
                client_id
              </label>
              <input
                {...register('client_id', { required: true })}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="client_id"
              />
              {errors.client_id && <p className="text-red-500 mt-2">Client ID is required</p>}
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="refresh_token">
                refresh_token
              </label>
              <input
                {...register('refresh_token', { required: true })}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="refresh_token"
              />
              {errors.refresh_token && <p className="text-red-500 mt-2">Refresh Token is required</p>}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
