import { Router } from 'express';
import userDB from '../database/userDB.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const [result] = await userDB.find();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.post('/create', async (req, res) => {
  const newUser = req.body;
  try {
    const [result] = await userDB.insert(newUser);
    res.status(201).json({ message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage })
  }
});

export default router;