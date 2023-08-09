import React from 'react';

const UserCard = ({ user }) => {
    return (
        <tr className="hover:bg-gray-200 ">
            <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.mobile}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.ipAddress}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                <p>{user.userAgent.browser}</p>
                <p>{user.userAgent.version}</p>
                <p>{user.userAgent.platform}</p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
            <td className="px-6 py-4 whitespace-nowrap">
            <button type="button" className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button>
            <button type="button" className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delet</button>
               
            </td>
        </tr>
    );
};

export default UserCard;
