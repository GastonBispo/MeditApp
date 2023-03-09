const express = require('express');
const router = express.Router();

const session = require('../models/session');
const user = require('../models/user');


// agregar todas las posibles rutas de la app, fabricar urls

// CRUD de sesiones
router.get('/api/sessions', async (req, res) => {
  try{
    const sessions = await session.find();
    res.json(sessions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las sesiones' });
  }
  });

//____________________________________________________________________

// CRUD de usuarios
router.get('/api/users', async (req, res) => {
    try {
      const users = await user.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
  });

router.post('/api/users/post', async (req, res) => {
    try {
      const newUser = new user({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });
      await newUser.save();
      res.json({ success: true, message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });

  router.put('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, lastName, email } = req.body;
    try {
      const updatedUser = await user.findByIdAndUpdate(id, { name, lastName, email }, { new: true });
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el usuario' });
    }
  });

  router.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await user.findByIdAndDelete(id);
      res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
  });


module.exports = router;