import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import StudentCount from './components/StudentCount';

function App() {
  const [studentList, setStudentList] = useState([]);

  const handleAddStudent = (newStudent) => {
    if (!newStudent.address) {
      // Address field is empty, handle this case (e.g., show an error message)
      
      return;
    }
    setStudentList([newStudent, ...studentList]); // Add the new student to the list
  };
  
  const handleDeleteStudent = (id) => {
    setStudentList(studentList.filter((student) => student.id !== id));
  };




  return (
    <div className="container" >
      <h1>Student Details</h1>
      <StudentForm onAddStudent={handleAddStudent} />
      <StudentList
       studentList={studentList}
       
        onDeleteStudent={handleDeleteStudent} 
      />
      <StudentCount count={studentList.length} />
    </div>
  );
}

export default App;
