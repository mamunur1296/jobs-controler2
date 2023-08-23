import React from 'react';
import UserCard from './UserCard';
import { useQuery } from '@tanstack/react-query';
import { fetchallUsers } from '../../utillies/auth-utill';

const AllUsers = () => {
    const { data, isLoading } = useQuery(['getUsers'], () => fetchallUsers());
    
    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="bg-gray-200 text-gray-800 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold mb-4">Users Table</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-orange-500">
                            <tr>
                                <th className="border md:py-3 md:px-6 border-gray-300 py-2 text-[8px] md:text-base">Name</th>
                                <th className="border md:py-3 md:px-6 border-gray-300 py-2 text-[8px] md:text-base">Email</th>
                                <th className="border md:py-3 md:px-6 border-gray-300 py-2 text-[8px] md:text-base">Mobile</th>
                                <th className="border md:py-3 md:px-6 border-gray-300 py-2 text-[8px] md:text-base">IP Address</th>
                                <th className="border md:py-3 md:px-6 border-gray-300 py-2 text-[8px] md:text-base">User Agent</th>
                                <th className="border md:py-3 md:px-6 border-gray-300 py-2 text-[8px] md:text-base">Role</th>
                                <th className="border md:py-3 md:px-6 border-gray-300 py-2 text-[8px] md:text-base">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-300">
                            {data?.map((user,i) => (
                                <UserCard i={i} key={user._id} user={user} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
