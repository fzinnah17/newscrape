import mockData from '../../../server/initialmockData/mockData.js';

export const getAllNews = async (category) => {
  try {
    return mockData;
  }
  catch (error) {
    console.error('Error fetching news', error);
    throw error;
  }
}

// // /get/news/demo

// // API == Contract
// // contract says get/endpoint ->

// // get news aritcle -> bunch articles
// // filter demo, replublic ...

// // in your case you dont need category, because there is only 3 things
// /* {
//     [articl1, article, article3]
// }

// // This is for production below because I will create a separate API_URL when I am hosting on vercel:

// // import axios from 'axios';
// // // Import mockData only if in development mode to not bundle it in production
// // import mockData from '../../server/initialmockData/mockData.js';

// // // Use environment variables to configure the API URL
// // const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/news';

// // // Check if the environment is development
// // const isDevelopment = process.env.NODE_ENV === 'development';

// // export const getAllNews = async (category) => {
// //   if (isDevelopment) {
// //     // In development, use mock data
// //     // Optionally filter by category if provided
// //     return Promise.resolve(category ? mockData.filter(news => news.category === category) : mockData);
// //   } else {
// //     // In production, fetch data from the backend
// //     try {
// //       const response = await axios.get(`${API_URL}?category=${category}`);
// //       return response.data;
// //     } catch (error) {
// //       // In production, it's a good practice to abstract the error messages and not directly throw system errors
// //       console.error('Error fetching news', error);
// //       // Throw a custom error or handle it as needed for your client-side error handling strategy
// //       throw new Error('An error occurred while fetching news. Please try again later.');
// //     }
// //   }