import sequelize from './database.js';
import Newsarticle from '../models/newsarticle.js';
import mockData from '../initialmockData/mockData.js';

const insertMockData = async () => {
  try {
    await sequelize.sync({ force: true });
    await Newsarticle.bulkCreate(mockData);
    console.log('Mock data inserted successfully');
  } catch (error) {
    console.error('Error inserting mock data:', error);
  }
};

insertMockData().catch(console.error);


// with pg module

// import { pool } from './database.js';
// import mockData from '../initialmockData/mockData.js';

// const insertMockData = async () => {
//   const client = await pool.connect();

//   try {
//     await client.query('BEGIN');
//     for (const item of mockData) {
//       await client.query('INSERT INTO Article (title, description, category) VALUES ($1, $2, $3)', [item.title, item.description, item.category]);
//     }
//     await client.query('COMMIT');
//     console.log('Mock data inserted successfully');
//   } catch (error) {
//     await client.query('ROLLBACK');
//     console.error('Error inserting mock data:', error);
//   } finally {
//     client.release();
//   }
// };

// insertMockData().catch(console.error);


// class Article
// string name
// string link
// string snippet
// string name2


// article1 = new Article()

// postgres.save(article1)