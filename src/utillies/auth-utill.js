import axios from 'axios';

export const fetchLoginUserData = async () => {
  try {
    const response = await axios.get('https://jobs-controler-server2.vercel.app/authentication/getLoginUsers', {
      withCredentials: true,
    });

    if (!response.data) {
      throw new Error('User data not available');
    }
    localStorage.setItem("isUser" ,response.data.user.email )
    return response.data.user;
  } catch (error) {
    console.error('Error fetching login user data:', error);
    return null;
  }
};

export const phonLogin = async (number) => {
  try {
    const response = await fetch('https://jobs-controler-server2.vercel.app/authentication/otp/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true,
        "cache-control":"no-cache,no-store"
      },
      credentials: 'include',
      body:JSON.stringify({number})
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  } catch (error) {
    console.error('Error sending OTP:', error);
  }
};




export const varifyOtp = async (otp) => {
  try {
    console.log("varify area ", otp );
    const response = await fetch('https://jobs-controler-server2.vercel.app/authentication/otp/varify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true,
        "cache-control":"no-cache,no-store"
      },
      credentials: 'include',
      body:JSON.stringify({otp})
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error sending OTP:', error);
  }
};

export const maskMobileNumber = (number) => {
  const length = number?.length;
  const maskedNumber = '#'?.repeat(length - 3) + number?.substring(length - 3);
  return maskedNumber;
};
