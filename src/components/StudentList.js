import React from 'react';

import StudentItem from './StudentItem';

const StudentList = ({ studentList, onDeleteStudent }) => {
  return (
    <ul>
      {studentList.map((student) => (
        <StudentItem key={student.id} student={student}  onDeleteStudent={onDeleteStudent} />
      ))}
    </ul>
  );
};

export default StudentList;
