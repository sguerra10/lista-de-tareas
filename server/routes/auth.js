const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Configurar tu modelo de usuario y otros elementos necesarios
const User = require('../models/User');
const secretKey = 'tu_clave_secreta_super_secreta';

// Ruta de registro
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  user.save((err, user) => {
    if (err) {
      res.status(500).send("Error al registrar el usuario");
    } else {
      const payload = { username };
      const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
      res.cookie('token', token, { httpOnly: true }).sendStatus(200);
    }
  });
});

// Ruta de inicio de sesión
router.post('/login', async (req, res) => {
        try {
          const { email, password } = req.body;
      
          // Verificar si el usuario existe en la base de datos
          const user = await User.findOne({ email });
      
          if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
          }
      
          // Verificar la contraseña
          const isPasswordValid = await bcrypt.compare(password, user.password);
      
          if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
          }
      
          // Generar el token JWT
          const token = jwt.sign({ user_id: user._id, email: user.email }, secretKey, {
            expiresIn: '1h', 
          });
      
          // Enviar el token como respuesta
          res.status(200).json({ token });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Error en el servidor' });
        }   
});

module.exports = router;