
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
      console.log(data);
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
export async function fetchGetData(UrlEndPoint , importId , bodyData ) {
    try {
      const token = JSON.parse(localStorage.getItem('authItem')).token;
      const newObj = {
        token,
        importId ,
        bodyData
      };
      const response = await fetch(`${UrlEndPoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newObj),
      });
      const responseData = await response.json();
      console.log(response , "insite ui-path-utill");
      if (!responseData.value ) {
        console.log("refress area");
        handleTokenRefresh(); 
        throw new Error('Request failed');
      }
      return responseData.value;
    } catch (error) {
      console.log(error);
    }
  }
  
// all post data 
// export async function fetchPostData(UrlEndPoint, importId, bodyData) {
//   try {
//     const token = JSON.parse(localStorage.getItem('authItem')).token;
//     const response = await fetch(UrlEndPoint, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${token}`,
//         'X-UIPATH-OrganizationUnitId': importId,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(bodyData)
//     });
//     if (!response.ok) {
//       localStorage.removeItem("login");
//       handleTokenRefresh(); 
//       throw new Error('Request failed');
//     }
//     const responseData = await response.json();
//     return responseData.value;
//   } catch (error) {
//     console.log(error);
//   }
// }



export const getUniqueObjects = (arr, property) => {
  const uniqueSet = new Set();
  return arr.filter((obj) => !uniqueSet.has(obj[property]) && uniqueSet.add(obj[property]));
};
