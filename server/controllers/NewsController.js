import Newsarticle from '../models/newsarticle.js';

export const getNews = async (req, res) => {
  try {
    const articles = await Newsarticle.findAll(); // Retrieves all articles
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// import { pool } from '../config/database.js';

// export const getNews = async (req, res) => {
//   const { category } = req.query;
//   try {
//     const query = 'SELECT * FROM news'; 
//     // const query = 'SELECT * FROM news WHERE category = $1';
//     // never write the query, find parameters and pass it as a variable, DB gives a variable, what if you want to add another query variation
//     // db usually provides an api
//     // you provide the parameters to that api
//     // for example: fetch from news articple
//     // db provides api 
//     // table, arg1, arg2
//     // spring db -< findByColor(blue)
//     const result = await pool.query(query);
//     res.json(result.rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
