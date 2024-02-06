// Identify Requirements: 
//   1. Understand what I have to accomplish:
//         I am going to get the data based on category to show in the client setImmediate. So, I am getting all the news from the backend to show on the frontend based on it's category.
//         That's why, I am making the connection of the backend and frontend so that when the client side url has the category as republic it will fetch republic data from the backend only using axios library
//   2. Do you need to fetch data from an API? 
//         yes, I have to fetch data from an API endpoint which I have registered in app.use('/api/news', newsRoutes); in server.js file that has the newsRoutes in it 
//   3. Will you have different behaviors for development and production? 
//         For now, yes because as i am in development module, I am fetching data from mock data for now. In the future when I am done working on the ML model and can fetch data from there,
//         I will change both my development and production versions. Those will be fetching data from the database that gets data from the ML model server. But for now, both prduction and development works the same WebAssembly. But I am just running my project in development mode right now.
//   4. Do you need to handle errors?
//         Yes as I am in the development mode now, I want to show that if the news is not being FileSystemDirectoryHandle, it will show error. But in the production, I will handle the error in a different way and show the error is an internal error""


import axios from 'axios'; // we are still not using it as we are in the development mode
import mockData from '../../server/initialmockData/mockData.js';

export const getAllNews = async (category) => {
  try {
    // Filter mock data based on the category if provided, otherwise return all mock data
    const filteredData = category ? mockData.filter(news => news.category === category) : mockData;

    return filteredData;
  }
  catch (error) {
    console.error('Error fetching news', error);
    throw error;
  }
}



// This is for production below because I will create a separate API_URL when I am hosting on vercel:

// import axios from 'axios';
// // Import mockData only if in development mode to not bundle it in production
// import mockData from '../../server/initialmockData/mockData.js';

// // Use environment variables to configure the API URL
// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/news';

// // Check if the environment is development
// const isDevelopment = process.env.NODE_ENV === 'development';

// export const getAllNews = async (category) => {
//   if (isDevelopment) {
//     // In development, use mock data
//     // Optionally filter by category if provided
//     return Promise.resolve(category ? mockData.filter(news => news.category === category) : mockData);
//   } else {
//     // In production, fetch data from the backend
//     try {
//       const response = await axios.get(`${API_URL}?category=${category}`);
//       return response.data;
//     } catch (error) {
//       // In production, it's a good practice to abstract the error messages and not directly throw system errors
//       console.error('Error fetching news', error);
//       // Throw a custom error or handle it as needed for your client-side error handling strategy
//       throw new Error('An error occurred while fetching news. Please try again later.');
//     }
//   }
// };

