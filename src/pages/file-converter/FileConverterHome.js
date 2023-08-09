// Importing necessary dependencies and utilities
import React, {  useState } from 'react';
import { getFromDB, postFromDB } from '../../utillies/File-Converter-utill';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Logout from '../../components/authentication/Logout';
// FileConverterHome component
const FileConverterHome = () => {
    // State for managing the search query
    const [searchQuery, setSearchQuery] = useState('');
    // Function to handle file upload
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        if (file) {
            const fileExtension = file.name.split('.').pop();
            console.log(file);
            if (fileExtension === 'xlsx') {
                try {
                    // Upload and save Excel file to MongoDB
                    postFromDB(process.env.React_App_xl_Post, formData).then(data => {
                        refetch(); // Trigger data refetch after successful upload
                    });
                    console.log('File uploaded and saved to MongoDB');
                } catch (error) {
                    console.error('Error uploading and saving file:', error);
                }
            } else if (fileExtension === 'json') {
                try {
                    // Upload and save JSON file to MongoDB
                    postFromDB(process.env.React_App_JSON_POST, formData).then(data => {
                        refetch(); // Trigger data refetch after successful upload
                    });
                    console.log('File uploaded and saved to MongoDB');
                } catch (error) {
                    console.error('Error uploading and saving file:', error);
                }
            } else {
                console.log("This file type is not supported");
            }
        } else {
            console.log("There is a server-side error");
        }
        console.log(file);
    };

    // Query data from the server using useQuery hook
    const { data, refetch } = useQuery(['App_JSON_GET'], () => getFromDB(process.env.React_App_JSON_GET));

    // Function to handle search based on searchQuery
    const handleSearch = () => {
        // Handle search logic based on searchQuery
    };

    // Pagination
    const itemsPerPage = 10; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1); // Current page number

    // Calculate total number of pages
    const totalPages = Math.ceil(data?.employees?.length / itemsPerPage);

    // Calculate the index range for items to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Render component
   
    return (
        <div className="bg-gray-900 h-screen px-6 md:px-12 pt-6 md:pt-10">
            <div className="mb-4 flex flex-col md:flex-row md:justify-between items-center">
                <input
                    className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 md:mb-0 mb-2"
                    type="file"
                    onChange={handleFileUpload}
                />
                <div className="flex">
                    <input
                        className="bg-white w-40 md:w-96 text-gray-900 py-2 px-4 rounded-l"
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                    <button
                        className="bg-orange-500 w-14 md:w-28 text-white py-2 rounded-r"
                        onClick={handleSearch}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <div className="flex mt-2 md:mt-0">
                    <Link
                        to="/"
                        className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 md:mr-2 mb-2"
                    >
                        Go To Home
                    </Link>
                    <Logout />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y bg-orange-500 divide-gray-300 text-white">
                    {/* Table Headers */}
                    <thead>
                        <tr>
                            <th className="border py-3 px-6 border-gray-300 p-2">Name</th>
                            <th className="border py-3 px-6 border-gray-300 p-2">Email</th>
                            <th className="border py-3 px-6 border-gray-300 p-2">Phone</th>
                            <th className="border py-3 px-6 border-gray-300 p-2">Gender</th>
                            <th className="border py-3 px-6 border-gray-300 p-2">Address</th>
                            <th className="border py-3 px-6 border-gray-300 p-2">Actions</th>
                        </tr>
                    </thead>
                    {/* Table Rows */}
                    <tbody className="bg-white divide-y text-black divide-gray-300">
                    {data?.employees
                        ?.filter((data) =>
                            data?.name?.toLowerCase()?.includes(searchQuery.toLowerCase())
                        )
                        .slice(startIndex, endIndex) // Apply pagination to the filtered data
                        .map((data, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                                <td className="border border-gray-300 p-2">{data.name}</td>
                                <td className="border border-gray-300 p-2">{data.email}</td>
                                <td className="border border-gray-300 p-2">{data.phone}</td>
                                <td className="border border-gray-300 p-2">{data.gender}</td>
                                <td className="border border-gray-300 p-2">{data.address}</td>
                                <td className="border flex items-center justify-center border-gray-300 p-2">
                                <button type="button" className="text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button>
                                </td>
                            </tr>
                        ))}
                </tbody>

                </table>
                {/* Pagination */}
                <div className="flex justify-center mt-4">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            className={`mx-1 py-2 px-4 rounded-lg ${
                                page === currentPage ? 'text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' : 'bg-gray-700 text-white text-sm px-5 py-2.5 text-center mr-2 mb-2'
                            }`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ))}
                </div>

            </div>
        </div>

    );
};

export default FileConverterHome;

