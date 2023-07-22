import React from 'react';
import { Link } from 'react-router-dom';

// Home component
const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            {/* Banner */}
            <div className="text-white text-center py-4">
                <h1 className="text-4xl font-bold">Welcome to My Home Page!</h1>
            </div>

            {/* Card Section */}
            <div className="flex justify-center mt-8">
                <div className="grid grid-cols-3 gap-4">
                    {/* Link to UI Path page */}
                    <Link to="/ui-path" className="bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg p-4 hover:to-orange-300 hover:transition  hover:duration-700 hover:ease-in-out">
                        <h2 className="text-3xl font-semibold">UI Path</h2>
                        <p className="mt-2">This is the content of Card 1.</p>
                    </Link>

                    {/* Link to File Converter page */}
                    <Link to="/file-converter" className="bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg p-4 hover:to-orange-300 hover:transition  hover:duration-700 hover:ease-in-out">
                        <h2 className="text-3xl font-semibold">File Reader</h2>
                        <p className="mt-2">This is the content of Card 1.</p>
                    </Link>

                    {/* Placeholder link */}
                    <Link className="bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg p-4 hover:to-orange-300 hover:transition  hover:duration-700 hover:ease-in-out">
                        <h2 className="text-3xl font-semibold">Test File</h2>
                        <p className="mt-2">This is the content of Card 1.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
