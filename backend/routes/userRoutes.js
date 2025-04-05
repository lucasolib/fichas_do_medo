import { Router } from 'express';
import userDB from '../database/userDB.js';

const router = Router();

router.get('/getAll', async (req, res) => {
  try {
    const [result] = await userDB.findAll();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
})

router.get('/login', async (req, res) => {
  const userLogin = req.body
  try {
    const [result] = await userDB.find(userLogin);
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

router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const [result] = await userDB.update(user, id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Usuário de id ${id} atualizado com sucesso` });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage })
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await userDB.remove(id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Usuário de id ${id} excluído com sucesso` });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage })
  }
});


export default router;