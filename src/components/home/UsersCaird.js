import React from 'react';
import { Link } from 'react-router-dom';

const UsersCaird = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Link to="/ui-path" className="text-white  bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <h2 className="text-3xl font-semibold">UI Path</h2>
            <p className="mt-2">This is the content of Card 1.</p>
        </Link>
        <Link to="/file-converter" className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <h2 className="text-3xl font-semibold">File Reader</h2>
            <p className="mt-2">This is the content of Card 1.</p>
        </Link>
        <Link  className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <h2 className="text-3xl font-semibold">Test File </h2>
            <p className="mt-2">This is the content of Card 1.</p>
        </Link>
    </div>
    );
};

export default UsersCaird;