// Fo the initial development mode:

import mockData from '../../../server/initialmockData/mockData.js';

export const getAllNews = async () => {
  try {
    return mockData;
  }
  catch (error) {
    console.error('Error fetching news', error);
    throw error;
  }
}

/* {
/get/news/demo

API == Contract
contract says get/endpoint ->

get news aritcle -> bunch articles
filter demo, replublic ...

in your case you dont need category, because there is only 3 things

[articl1, article, article3]
}
*/

// // This is for production below because I will create when I am hosting on vercel:
//    Once backend and database are set up and there are endpoints to fetch data, makew newsService.js to make HTTP requests to backend.

// export const getAllNews = async () => {
//   try {
//     // Replace the URL with your actual backend endpoint
//     const response = await fetch('http://localhost:3001/api/news');
//     if (!response.ok) {
//       throw new Error(`Network response was not ok: ${response.statusText}`);
//     }
//     const articles = await response.json();
//     return articles; // This is now dynamic data from your backend
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     throw error;
//   }
// };
