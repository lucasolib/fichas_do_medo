import express from 'express';
import cors from 'cors';
import campanhasRoutes from './routes/campanhasRoutes.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/campanhas', campanhasRoutes)

export default app;