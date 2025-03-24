import express from 'express';
import campanhasRoutes from './routes/campanhasRoutes.js';

const app = express();

app.use(express.json());

app.use('/campanhas', campanhasRoutes)

export default app;