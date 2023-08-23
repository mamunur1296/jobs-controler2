import axios from 'axios';

export const header={
    'Content-Type': 'application/json',
    "Access-Control-Allow-Credentials": true,
    "cache-control":"no-cache,no-store"
  }
  const apiRequest = async (method, url, data = null, headers = {}) => {
    try {
      const apiUrl = `${process.env.React_App_LOCAL_HOST}${url}`;
      let config = {
        method,
        url: apiUrl,
        headers,
        withCredentials:true,
      };
  
      if (data) {
        config.data = data;
      }
  
      console.log(config);
  
      const response = await axios(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Example usage of the apiRequest function with different HTTP methods
  const fetchData = async () => {
    try {
      const getData = await apiRequest('GET', '/api/data');
      console.log('GET response:', getData);
  
      const postData = await apiRequest('POST', '/api/data', { key: 'value' });
      console.log('POST response:', postData);
  
      const deleteData = await apiRequest('DELETE', '/api/data/123');
      console.log('DELETE response:', deleteData);
  
      const putData = await apiRequest('PUT', '/api/data/123', { key: 'updatedValue' });
      console.log('PUT response:', putData);
  
      const updateData = await apiRequest('UPDATE', '/api/data/123', { key: 'newValue' });
      console.log('UPDATE response:', updateData);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  


export default apiRequest;
// const { data, isLoading } = useQuery(['getUsers'], () => apiRequest("GET" , process.env.React_App_GET_USERS , null, {}, true));
export const maskMobileNumber = (number) => {
    const length = number?.length;
    const maskedNumber = '#'?.repeat(length - 3) + number?.substring(length - 3);
    return maskedNumber;
  };