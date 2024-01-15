const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();

//connecting to mongodb
connectDb();

const app = express();

//connecting tp post
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
//routes for resumes
app.use('/api/resumes',require('./routes/resumeRoutes'));
//routes for users
app.use('/api/users',require('./routes/userRoutes'));
app.use(errorHandler)


//listening to port
app.listen(port, ()=>{
  console.log(`Server running on port ${port}`);
});
