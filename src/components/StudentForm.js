import React, { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address,setAddress]=useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number || !address) return;
    const newStudent = {
      id: Math.floor(Math.random() * 10000),
      name: name,
      number: number,
      address:address
    };
    onAddStudent(newStudent);
    setName('');
    setNumber('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter student name"
      />
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter mobile number"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
   
        placeholder="Enter address"
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
