import pg from 'pg'
import './dotenv.js'

const connectionString = process.env.DATABASE_URL;

const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  connectionString
}

export const pool = new pg.Pool(config)


// for production:

// const isProduction = process.env.NODE_ENV === 'production';

// const config = {
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   host: process.env.PGHOST,
//   port: process.env.PGPORT,
//   database: process.env.PGDATABASE,
//   // Only add SSL configuration if in production
//   ...(isProduction && {
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   }),
//   connectionString: process.env.DATABASE_URL,
// };

// export const pool = new pg.Pool(config);
