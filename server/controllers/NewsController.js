import { pool } from '../config/database.js';

export const getNews = async (req, res) => {
  const { category } = req.query;
  try {
    const query = 'SELECT * FROM news WHERE category = $1';
    const result = await pool.query(query, [category]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
