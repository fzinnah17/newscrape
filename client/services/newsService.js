




// This is for production below because I will create a separate API_URL when I am hosting on vercel:

import axios from 'axios';

// const API_URL = '/api/news';

export const getAllUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching news', error);
    throw error;
  }
};
