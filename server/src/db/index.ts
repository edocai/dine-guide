// eslint-disable-next-line import/no-extraneous-dependencies
import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'restaurantfinder',
  password: 'test',
  port: 5432,
});

