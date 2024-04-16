// components/PasswordForm.js
import React, { useState } from 'react';

const PasswordForm = ({ onAddPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    const newPassword = {
      id: Math.floor(Math.random() * 10000), // Generate a random ID for now
      email: email,
      password: password
    };
    onAddPassword(newPassword);
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default PasswordForm;
