const express = require('express');
const router = express.Router();
const Student = require('../models/Student')


//retrive all students
router.get('/', async(req,res) =>{
  try{

  const students = await Student.find()
  res.json(students);

  }catch(err){
    res.status(500).json({ message: 'Error fetching students', error: err.message });
    // res.send('Error'+err)
  }
})

//retrive a specific student by id
router.get('/:id', async(req,res) =>{
  try{

  const student = await Student.findById(req.params.id)
  res.json(student);
  if(student){
    res.json(student);
  }else{
    res.status(404).json({ message: 'Student not found', error: err.message });
  }

  }catch(err){
    // res.send('Error'+err)
    res.status(500).json({ message: 'Error fetching students', error: err.message });
  
  }
})
//create a new student
//database router to store the data
router.post('/',async(req,res)=>{
  const student = new Student({
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
  })

  try {
     const savedStudent = await student.save()
    //  res.json(s1)
    res.status(201).json(savedStudent);
    
  } catch (err) {
    // res.send("Error")
    res.status(400).json({ message: 'Error creating student', error: err.message });
    
  }

})

//delete a student by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (deletedStudent) {
      res.json(deletedStudent);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting student', error: err.message });
  }
});


//update a student data by id
router.put('/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    }, { new: true });

    if (updatedStudent) {
      res.json(updatedStudent);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (err) {
    res.status(400).json({ message: 'Error updating student', error: err.message });
  }
});


module.exports = router;


// // routes/students.js
// const express = require('express');
// const router = express.Router();
// const Student = require('../models/Student');

// // Create a new student
// router.post('/', async (req, res) => {
//   try {
//     const student = new Student(req.body);
//     const savedStudent = await student.save();
//     res.status(201).json(savedStudent);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Get all students
// router.get('/', async (req, res) => {
//   try {
//     const students = await Student.find();
//     res.json(students);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get a specific student
// router.get('/:id', getStudent, (req, res) => {
//   res.json(res.student);
// });

// // Update a student
// router.patch('/:id', getStudent, async (req, res) => {
//   try {
//     if (req.body.name) res.student.name = req.body.name;
//     if (req.body.email) res.student.email = req.body.email;
//     if (req.body.phone) res.student.phone = req.body.phone;
//     if (req.body.age) res.student.age = req.body.age;
//     if (req.body.grade) res.student.grade = req.body.grade;

//     const updatedStudent = await res.student.save();
//     res.json(updatedStudent);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete a student
// router.delete('/:id', getStudent, async (req, res) => {
//   try {
//     await res.student.remove();
//     res.json({ message: 'Deleted Student' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// async function getStudent(req, res, next) {
//   try {
//     const student = await Student.findById(req.params.id);
//     if (!student) {
//       return res.status(404).json({ message: 'Cannot find student' });
//     }
//     res.student = student;
//     next();
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }

// module.exports = router;
