// const mongoose = require('mongoose');

// const studentSchema = new mongoose.Schema({

//   name:{
//     type:String,
//     required: true
//   },
//    email:{
//     type:String,
//     required:true
//    },
//    phone:{
//     type:Number,
//     required:true
//    },


// })
// module.exports = mongoose.model('Student', studentSchema)




// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

