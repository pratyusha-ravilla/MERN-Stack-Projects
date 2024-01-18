
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentForm.css';

const StudentForm = () => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({
    name: '',
    email: '',
    phone: '',
    age: 0,
    grade: '',
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleAddStudent = async () => {
    try {
      const response = await axios.post(
        'http://localhost:9000/api/students'
        , student);
      console.log('Student added:', response.data);
      // Refresh the list of students after adding a new one
      fetchStudents();
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:9000/api/students/${id}`);
      console.log('Student deleted:', response.data);
      // Refresh the list of students after deleting one
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleUpdateStudent = async (id) => {
    try {
      const response = await axios.put(`http://localhost:9000/api/students/${id}`,student);
      console.log('Student updated:', response.data);
      // Refresh the list of students after updating one
      fetchStudents();
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleSelectStudent = (selectedStudent) => {
    // Set the form fields with the selected student's data
    setStudent({
      name: selectedStudent.name,
      email: selectedStudent.email,
      phone: selectedStudent.phone,
      age: selectedStudent.age,
      grade: selectedStudent.grade,
    });
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    // Fetch the list of students when the component mounts
    fetchStudents();
  }, []);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Name:</label>
        <input type="text" name="name" value={student.name} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={student.email} onChange={handleChange} />

        <label>Phone:</label>
        <input type="phone" name="phone" value={student.phone} onChange={handleChange} />

        <label>Age:</label>
        <input type="number" name="age" value={student.age} onChange={handleChange} />

        <label>Grade:</label>
        <input type="text" name="grade" value={student.grade} onChange={handleChange} />

        <button type="button" onClick={handleAddStudent}>
          Add Student
        </button>
        </form>
     

         <div className='result'>

        {students.map((student) => (
          <li key={student._id}
            onClick={() => handleSelectStudent(student)}>
           Name: {student.name}<br/>
            Email: {student.email}<br/>
            Phone: {student.phone}<br/>
            Age: {student.age}<br/>
            Grade: {student.grade}<br/><br/>

            <button onClick={() => handleDeleteStudent(student._id)}>Delete</button>
            <button onClick={() => handleUpdateStudent(student._id)}>Update</button><br/><br/>
          </li>
        ))}
     
      </div>
     
    </div>

  );
};

export default StudentForm;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './StudentForm.css';

// const StudentForm = () => {
//   const [students, setStudents] = useState([]);
//   const [student, setStudent] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     age: 0,
//     grade: '',
//   });

//   const handleChange = (e) => {
//     setStudent({ ...student, [e.target.name]: e.target.value });
//   };

//   const handleAddStudent = async () => {
//     try {
//       const response = await axios.post('http://localhost:9000/api/students', student);
//       console.log('Student added:', response.data);
//       // Refresh the list of students after adding a new one
//       fetchStudents();
//       // Clear the form fields after adding a new student
//       setStudent({
//         name: '',
//         email: '',
//         phone: '',
//         age: 0,
//         grade: '',
//       });
//     } catch (error) {
//       console.error('Error adding student:', error);
//     }
//   };

//   const handleDeleteStudent = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:9000/api/students/${id}`);
//       console.log('Student deleted:', response.data);
//       // Refresh the list of students after deleting one
//       fetchStudents();
//     } catch (error) {
//       console.error('Error deleting student:', error);
//     }
//   };

//   const handleUpdateStudent = async (id) => {
//     try {
//       const response = await axios.put(`http://localhost:9000/api/students/${id}`, student);
//       console.log('Student updated:', response.data);
//       // Refresh the list of students after updating one
//       fetchStudents();
//       // Clear the form fields after updating a student
//       // setStudent({
//       //   name: '',
//       //   email: '',
//       //   phone: '',
//       //   age: 0,
//       //   grade: '',
//       // });
//     } catch (error) {
//       console.error('Error updating student:', error);
//     }
//   };

//   const handleSelectStudent = (selectedStudent) => {
//     // Set the form fields with the selected student's data
//     setStudent({
//       name: selectedStudent.name,
//       email: selectedStudent.email,
//       phone: selectedStudent.phone,
//       age: selectedStudent.age,
//       grade: selectedStudent.grade,
//     });
//   };

//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get('http://localhost:9000/api/students');
//       setStudents(response.data);
//     } catch (error) {
//       console.error('Error fetching students:', error);
//     }
//   };

//   useEffect(() => {
//     // Fetch the list of students when the component mounts
//     fetchStudents();
//   }, []);

//   return (
//     <div>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <label>Name:</label>
//         <input type="text" name="name" value={student.name} onChange={handleChange} />

//         <label>Email:</label>
//         <input type="email" name="email" value={student.email} onChange={handleChange} />

//         <label>Phone:</label>
//         <input type="phone" name="phone" value={student.phone} onChange={handleChange} />

//         <label>Age:</label>
//         <input type="number" name="age" value={student.age} onChange={handleChange} />

//         <label>Grade:</label>
//         <input type="text" name="grade" value={student.grade} onChange={handleChange} />

//         <button type="button" onClick={handleAddStudent}>
//           Add Student
//         </button>
//         {/* <button type="button" onClick={() => handleUpdateStudent(student._id)}>
//           Update Student
//         </button> */}
//       </form>

//       <ul>
//         {students.map((student) => (
//           <li key={student._id} onClick={() => handleSelectStudent(student)}>
//             {student.name} - {student.email} - {student.phone} - {student.age} - {student.grade}
//             <button onClick={() => handleDeleteStudent(student._id)}>Delete</button>
//             <button type="button" onClick={() => handleUpdateStudent(student._id)}>
//           Update Student
//         </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentForm;


