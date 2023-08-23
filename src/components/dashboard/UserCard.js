import React from 'react';

const UserCard = ({ user , i }) => {
    return (
        <tr key={i} className={i % 2 === 0 ? "" : "bg-gray-100"}>
            <td className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">{user.name}</td>
            <td className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">{user.email}</td>
            <td className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">{user.mobile}</td>
            <td className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">{user.ipAddress}</td>
            <td className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">
                <p>{user.userAgent.browser + user.userAgent.version }</p>
                <p>{user.userAgent.platform}</p>
            </td>
            <td className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">{user.role}</td>
            <td className="border border-gray-300 text-[8px] p-0 md:text-base md:p-2">
            <button type="button" className="text-white bg-gradient-to-r text-[9px] md:text-base  from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1 md:px-5 py-.5 md:py-2.5 text-center md:mr-2 md:mb-2">Edit</button>
            <button type="button" className="text-white bg-gradient-to-r text-[9px] md:text-base  from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1 md:px-5 py-.5 md:py-2.5 text-center md:mr-2 md:mb-2">Delet</button>
               
            </td>
        </tr>
    );
};

export default UserCard;
