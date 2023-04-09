/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { pool } from './db';

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

//GET: Get All Restaurants
app.get('/api/v1/restaurants', async (req: Request, res: Response) => {
  try {
    const results = await pool.query('select * from restaurants');
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//GET: Get a Restaurant
app.get('/api/v1/restaurants/:id', async (req: Request, res: Response) => {
  try {
    const results = await pool.query('select * from restaurants where id = $1', [req.params.id]);
    res.status(200).json({
      status: 'success',
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

//POST: Create a Restaurant
app.get('/api/v1/restaurants', (req: Request, res: Response) => {
  console.log(req.body);
});

//PUT: Update Restaurants
app.put('/api/v1/restaurants/:id', (req: Request, res: Response) => {
  console.log(req.params);
  console.log(req.body);
});

export default app;
