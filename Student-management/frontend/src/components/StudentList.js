// // StudentList.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';



// const StudentList = () => {
//   const [students, setStudents] = useState([]);


//     useEffect(() => {
//     // Fetch the list of students from the backend when the component mounts
//     axios.get('http://localhost:9000/api/students')
//       .then(response => setStudents(response.data))
//       .catch(error => console.error('Error fetching students:', error));
//   }, []); // The empty dependency array ensures the effect runs only once, like componentDidMount

//   return (
//     <div>
//       <form>
//       <h2>Student List</h2>
//       <ul>
//         {students.map(student => (
//           <li key={student._id}> 

//           {student.name} - {student.age} - {student.grade}
//           </li>
//         ))}
//       </ul>
//       </form>
//     </div>
//   );
// };

// export default StudentList;





// // src/components/StudentList.js
// import React, { useState, useEffect } from 'react';
// import '../components/StudentList.css';
// import axios from 'axios';

// const StudentList = () => {
//   const [students, setStudents] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:9000/api/students');
//       setStudents(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('Error fetching data. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <h2>Student List</h2>
//       {error ? (
//         <p>{error}</p>
//       ) : (
//         <ul>
//           {students.map((student) => (
//             <li key={student._id}>
//               {student.name} - {student.age} years - Grade: {student.grade}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default StudentList;



// src/components/StudentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} - {student.age} years - Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
