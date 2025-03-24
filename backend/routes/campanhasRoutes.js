import { Router } from 'express';
import campanhasDB from '../database/campanhasDB.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const [result] = await campanhasDB.findAll();
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

export default router;