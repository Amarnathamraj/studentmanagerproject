// App.js
import React, { useState } from 'react';

import PasswordForm from './components/PasswordForm';
import PasswordList from './components/PasswordList';

function App() {
  const [passwords, setPasswords] = useState([]);

  const handleAddPassword = (newPassword) => {
    setPasswords([...passwords, newPassword]);
  };

  const handleDeletePassword = (id) => {
    setPasswords(passwords.filter((password) => password.id !== id));
  };

  return (
    <div className="container">
      <h1>Password Keeper</h1>
      <PasswordForm onAddPassword={handleAddPassword} />
      <PasswordList passwords={passwords} onDeletePassword={handleDeletePassword} />
    </div>
  );
}

export default App;
