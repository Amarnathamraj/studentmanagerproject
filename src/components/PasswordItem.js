// components/PasswordItem.js
import React from 'react';

const PasswordItem = ({ password, onDeletePassword }) => {
  return (
    <li>
      {password.email} - {password.password}
      <button onClick={() => onDeletePassword(password.id)}>Delete</button>
    </li>
  );
};

export default PasswordItem;
