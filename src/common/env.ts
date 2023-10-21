import * as dotenv from 'dotenv';

dotenv.config();

export const {
  PORT,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  JWT_SECRET,
} = process.env;
