import axios from "axios";

// handle handleTokenRefresh 
export const handleTokenRefresh = async () => {
    const allStoreData = JSON.parse(localStorage.getItem('authItem'));
    
    
    const newObj = {
      grant_type: 'refresh_token',
      client_id:allStoreData.client_id,
      refresh_token:allStoreData.refresh_token
    };
    try {
      const response = await fetch(`${process.env.React_App_LOCAL_HOST}${process.env.React_App_LOGIN_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newObj),
      });

      const data = await response.json();
      const storeData={
        token:data.access_token,
        client_id:allStoreData.client_id,
        refresh_token:allStoreData.refresh_token,
      }
      localStorage.setItem('authItem', JSON.stringify(storeData)); 
      console.log("insite refress token");
    } catch (error) {
      console.error('Error:', error);
    }
  };

// all get api fetch data 
export async function fetchGetData(UrlEndPoint , importId ) {
    try {
      const token = JSON.parse(localStorage.getItem('authItem')).token;
      const newObj = {
        token,
        importId
      };
      const response = await fetch(`${UrlEndPoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newObj),
      });
      if (!response.ok) {
        localStorage.removeItem("login");
        handleTokenRefresh(); 
        throw new Error('Request failed');
      }
      const responseData = await response.json();
      return responseData.value;
    } catch (error) {
      console.log(error);
    }
  }
  
// all post data 
export async function fetchPostData(UrlEndPoint, importId, bodyData) {
  try {
    const token = JSON.parse(localStorage.getItem('authItem')).token;
    const response = await fetch(`${process.env.React_App_LOCAL_HOST}${UrlEndPoint}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'X-UIPATH-OrganizationUnitId': importId,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    });
    if (!response.ok) {
      localStorage.removeItem("login");
      handleTokenRefresh(); 
      throw new Error('Request failed');
    }
    const responseData = await response.json();
    return responseData.value;
  } catch (error) {
    console.log(error);
  }
}
// my server data 
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

export const getUniqueObjects = (arr, property) => {
  const uniqueSet = new Set();
  return arr.filter((obj) => !uniqueSet.has(obj[property]) && uniqueSet.add(obj[property]));
};
