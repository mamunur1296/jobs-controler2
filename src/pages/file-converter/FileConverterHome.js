// Importing necessary dependencies and utilities
import React, { useState } from 'react';
import { getFromDB, postFromDB } from '../../utillies/File-Converter-utill';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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

    // Render component
    return (
        <div className="bg-gray-900 h-screen px-32 pt-10">
            <div className="mb-4 flex justify-between">
                <input
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                    type="file"
                    onChange={handleFileUpload}
                />
                <div className="flex">
                    <input
                        className="bg-white w-96 text-gray-900 py-2 px-4 rounded-l"
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                    <button
                        className="bg-blue-500 w-28 text-white py-2 px-4 rounded-r"
                        onClick={handleSearch}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <Link to="/home" className="bg-blue-500 rounded-lg text-neutral-50 py-2 px-4 ">
                    Go To Home
                </Link>
            </div>

            <table className="border-collapse border text-white border-gray-300 mt-4">
                <thead>
                    <tr>
                        <th className="border py-3 px-6  border-gray-300 p-2">Name</th>
                        <th className="border py-3 px-6  border-gray-300 p-2">Email</th>
                        <th className="border py-3 px-6  border-gray-300 p-2">Phone</th>
                        <th className="border py-3 px-6  border-gray-300 p-2">Gender</th>
                        <th className="border py-3 px-6  border-gray-300 p-2">Address</th>
                        <th className="border py-3 px-6  border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.employees // Render table rows based on data and filter by searchQuery
                        ?.filter((data) =>
                            data.name.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((data, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 p-2">{data.name}</td>
                                <td className="border border-gray-300 p-2">{data.email}</td>
                                <td className="border border-gray-300 p-2">{data.phone}</td>
                                <td className="border border-gray-300 p-2">{data.gender}</td>
                                <td className="border border-gray-300 p-2">{data.address}</td>
                                <td className="border border-gray-300 p-2">Edit</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default FileConverterHome;
