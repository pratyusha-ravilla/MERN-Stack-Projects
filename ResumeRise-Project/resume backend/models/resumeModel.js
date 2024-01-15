const mongoose = require('mongoose');

const resumeSchema = mongoose.Schema(
  {
    // this id is for who is creating the resume
    user_id:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"

    },
  name:{
    type:String,
    required:[true,"please add the user name"]
  },
  email:{
    type:String,
    required:[true, "please add the user email"]
  },
  phone:{
    type:String,
    required:[true, "please add the user phone"]
  }
},{
  timestamps: true,
})

module.exports = mongoose.model("resume", resumeSchema)






// const mongoose = require('mongoose');

// const educationSchema = new mongoose.Schema({
//   degree: String,
//   institution: String,
//   location: String,
//   graduationDate: Date,
// });

// const experienceSchema = new mongoose.Schema({
//   title: String,
//   company: String,
//   location: String,
//   startDate: Date,
//   endDate: Date,
//   responsibilities: [String],
// });

// const resumeSchema = new mongoose.Schema({
//   personalInformation: {
//     firstName: String,
//     lastName: String,
//     email: String,
//     phone: String,
//     address: String,
//     linkedin: String,
//     github: String,
//   },
//   summary: {
//     content: String,
//   },
//   education: [educationSchema],
//   experience: [experienceSchema],
//   skills: {
//     technical: [String],
//     soft: [String],
//   },
//   projects: [
//     {
//       name: String,
//       description: String,
//       technologies: [String],
//     },
//   ],
//   certifications: [
//     {
//       name: String,
//       authority: String,
//       date: Date,
//     },
//   ],
//   languages: [
//     {
//       language: String,
//       proficiency: String,
//     },
//   ],
//   interests: [String],
// });

// const Resume = mongoose.model('Resume', resumeSchema);