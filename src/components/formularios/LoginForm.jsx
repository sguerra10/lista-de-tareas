// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Enviar los datos de inicio de sesión al backend
      const response = await axios.post('http://localhost:3000/signup', {
        email,
        password,
      });

      // Extraer el token desde la respuesta del backend
      const token = response.data.token;
      // Almacenar el token (puedes utilizar el estado local, el contexto de React, etc.)
      // En este ejemplo, se usa el estado local del componente
      localStorage.setItem('token', token);
      setEmail('');
      setPassword('');

      // TODO:  Lógica adicional después del inicio de sesión (por ejemplo, redireccionar a otra página)

      console.log('Inicio de sesión exitoso');
    } catch (error) {
      // Manejar errores durante el inicio de sesión
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginForm;
