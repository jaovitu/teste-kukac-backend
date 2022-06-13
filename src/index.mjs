import dotenv from 'dotenv';
import express from 'express';

import cors from 'cors';

import router from './routes.mjs';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => console.log('Server is running...'));
