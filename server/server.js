import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { pool } from './config/database.js';
import newsRoutes from './routes/NewsRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json()); // JSON parsing

// Registering the API routes
app.use('/api/news', newsRoutes);

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// get /news/articles
// get /news/articles?category=games