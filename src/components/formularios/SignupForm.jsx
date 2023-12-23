// SignupForm.js
import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    // Lógica para enviar los datos al backend y realizar el registro
  };

  return (
    <div>
      <h2>Registro</h2>
      <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Registrarse</button>
    </div>
  );
};

export default SignupForm;
