// Import axios to make HTTP requests
import axios from "axios";

/**
 * Function to post a file to the server and save it to MongoDB.
 *
 * @param {string} UrlEndPoint - The API endpoint to post the file to.
 * @param {FormData} formData - The FormData object containing the file to be uploaded.
 * @returns {Promise<string>} - A promise that resolves to a success message if the file is uploaded and saved successfully.
 * @throws {Error} - Throws an error if there is any issue with the HTTP request or file upload.
 */
export const postFromDB = async (UrlEndPoint, formData) => {
    console.log(UrlEndPoint, 'end point');
    try {
        // Make a POST request to the specified endpoint with the FormData
        await axios.post(`${process.env.React_App_LOCAL_HOST}${UrlEndPoint}`, formData);
        console.log('File uploaded and saved to MongoDB');
        return 'File uploaded and saved to MongoDB';
    } catch (error) {
        console.error('Error uploading and saving file:', error);
        throw error; // Rethrow the error to handle it in the calling function
    }
};

/**
 * Function to get data from the server by making a GET request.
 *
 * @param {string} UrlEndPoint - The API endpoint to fetch data from.
 * @returns {Promise<any>} - A promise that resolves to the response data from the server.
 * @throws {Error} - Throws an error if there is any issue with the HTTP request or data retrieval.
 */
export const getFromDB = async (UrlEndPoint) => {
    try {
        // Make a GET request to the specified endpoint
        const response = await axios.get(`${process.env.React_App_LOCAL_HOST}${UrlEndPoint}`);
        // Handle the response data as needed
        console.log('Team members retrieved:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error retrieving team members:', error);
        throw error; // Rethrow the error to handle it in the calling function
    }
};

  