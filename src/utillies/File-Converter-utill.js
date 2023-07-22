import axios from "axios";

export const postFromDB = async (UrlEndPoint, formData) => {
    console.log(UrlEndPoint, 'end point');
    try {
      await axios.post(`${process.env.React_App_LOCAL_HOST}${UrlEndPoint}`, formData);
      console.log('File uploaded and saved to MongoDB');
      return 'File uploaded and saved to MongoDB';
    } catch (error) {
      console.error('Error uploading and saving file:', error);
      throw error; // Rethrow the error to handle it in the calling function
    }
  };
  export const getFromDB = async (UrlEndPoint) => {
    try {
      const response = await axios.get(`${process.env.React_App_LOCAL_HOST}${UrlEndPoint}`);
      // Handle the response data as needed
      console.log('Team members retrieved:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error retrieving team members:', error);
      throw error; // Rethrow the error to handle it in the calling function
    }
  };
  