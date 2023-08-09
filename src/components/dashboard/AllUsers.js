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
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Mobile</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">IP Address</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">User Agent</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-300">
                            {data.map(user => (
                                <UserCard key={user._id} user={user} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
