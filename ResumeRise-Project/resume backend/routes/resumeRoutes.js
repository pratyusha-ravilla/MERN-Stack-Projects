const express = require("express");
const router = express.Router();

const {
  getResumes,
  createResume,
  getResume,
  updateResume,
  deleteResume,
} = require("../controllers/resumeController");
const validateToken = require("../middleware/validateTokenHandler")

router.use(validateToken);
router.route("/").get(getResumes).post(createResume);

router.route("/:id").get(getResume).put(updateResume).delete(deleteResume);



module.exports = router;





// routes/resumeRoutes.js

// const express = require('express');
// const router = express.Router();
// const resumeController = require('../controllers/resumeController');

// // Get all resumes
// router.get('/resumes', resumeController.getAllResumes);

// // Create a new resume
// router.post('/resumes', resumeController.createResume);

// // Get a specific resume by ID
// router.get('/resumes/:id', resumeController.getResumeById);

// // Update a resume by ID
// router.put('/resumes/:id', resumeController.updateResume);

// // Delete a resume by ID
// router.delete('/resumes/:id', resumeController.deleteResume);

// module.exports = router;
