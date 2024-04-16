// components/PasswordList.js
import React from 'react';
import PasswordItem from './PasswordItem';

const PasswordList = ({ passwords, onDeletePassword }) => {
  return (
    <ul>
      {passwords.map((password) => (
        <PasswordItem key={password.id} password={password} onDeletePassword={onDeletePassword} />
      ))}
    </ul>
  );
};

export default PasswordList;
