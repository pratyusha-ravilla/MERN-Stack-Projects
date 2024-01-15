//to handler async requests using express async handler
const asyncHandler = require('express-async-handler');
//importing resume from schema here
const Resume = require("../models/resumeModel")

//@desc Get all resumes
//route GET/api/resumes
//@access private
//wrapping asyncHandler to get errors
const getResumes = asyncHandler(async(req, res) => {
  const resumes = await Resume.find(
    //need to fetch the all the resumes of a login user
    { user_id:req.user.id }
  );
  res.status(200).json(resumes);
    // { message: "Getting all details" }
    
});

//@desc Create new resume
//route POST/api/resume
//@access private
const createResume = asyncHandler(async(req, res) => {
 console.log("the request body is :",req.body);
 
  //error handling
   const {name, email, phone} = req.body;
   if(!name || !email || !phone){
    res.status(400);
    throw new Error("all fields are mandatory !");
   }
    //if no error we can proceed to create a new resume
   // creating a new resume
   const resume = await Resume.create({
    name,
    email,
    phone,
    user_id:req.user.id,
   })

  res.status(201).json(resume);
});

//@desc Get resume
//route GET/api/resume/:id
//@access private
const getResume = asyncHandler(async(req, res) => {
const resume = await Resume.findById(req.params.id);
  if(!resume) {
    res.status(404);
    throw new Error("resume not found");
  }
  res.status(200).json(resume);
    
});

//@desc Update resume
//route PUT/api/resume/:id
//@access private
const updateResume = asyncHandler(async(req, res) => {

  const resume = await Resume.findById(req.params.id);
  if(!resume) {
    res.status(404);
    throw new Error("resume not found");
  }
  //checking when having user id or not 
  if(resume.user_id.toString() !== req.user.id){
    //if different user trying to update a another user details
    res.status(403);
    throw new Error("User don't have permission to update other user details")

  }

  const updatedResume = await Resume.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new:true }
  )
  res.status(200).json(updatedResume);
});


//@desc Delete new resume
//route DELETE/api/resume/:id
//@access private
const deleteResume = asyncHandler(async(req, res) => {
  const resume = await Resume.findById(req.params.id);
  if(!resume) {
    res.status(404);
    throw new Error("resume not found");
  }

  if(resume.user_id.toString() !== req.user.id){
    //if different user trying to update a another user details
    res.status(403);
    throw new Error("User don't have permission to delete other user details")

  }
 await Resume.deleteOne({_id: req.params.id});
  res.status(200).json(resume);

// try {
//   await Resume.deleteOne(); // Use remove() on the specific resume instance
//   res.status(200).json({ message: "Resume deleted successfully", deletedResume: resume });
// } catch (error) {
//   console.error(error);
//   res.status(500).json({ error: "Internal Server Error" });
// }

});

module.exports = {
  getResumes,
  createResume,
  getResume,
  updateResume,
  deleteResume,
};