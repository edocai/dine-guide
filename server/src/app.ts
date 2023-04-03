import express, { Request, Response } from 'express';

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/api/v1/restaurants', (req: Request, res: Response) => {
  res.send('Successful');
});

export default app;
