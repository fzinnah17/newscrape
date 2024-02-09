import dotenv from 'dotenv';
dotenv.config();

const development = {
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  dialect: 'postgres',
};

const test = {
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE + "_test",
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  dialect: 'postgres',
};

const production = {
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE + "_production",
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

export { development, test, production };
