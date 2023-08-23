import React, { useContext } from 'react';
import { AuthContext } from '../../authContext/AuthProvaider';
import AdminCaird from '../../components/home/AdminCaird';
import UsersCaird from '../../components/home/UsersCaird';

// Home component
const Home = () => {
    const {users}=useContext(AuthContext)
    console.log(users);
    return (
        <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-900">
            {/* Banner */}

            <div className="text-white text-center py-4">
                <h1 className="text-4xl font-bold">Welcome to My Home Page!</h1>
            </div>
            <div className=" flex justify-center mt-8">
            {users?.role === "admin" ?  <AdminCaird /> : <UsersCaird /> }
            </div>
        </div>
    );
};

export default Home;
