import express from 'express';
import cors from 'cors';
import campanhasRoutes from './routes/campanhasRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/campanhas', campanhasRoutes)
app.use('/users', userRoutes)

export default app;