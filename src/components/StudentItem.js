import React from 'react';

const StudentItem = ({ student, onDeleteStudent }) => {
  const handleDelete = () => {
    onDeleteStudent(student.id);
//
  };

  return (
    <li>
       {student.name} - {student.number} - {student.address} {/* Include the address field */}
      <button onClick={handleDelete}>Delete</button>
      <button >Edit</button>
    </li>
  );
};

export default StudentItem;
