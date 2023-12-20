import express from "express";
import {PORT, mongoDB} from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';  // importing cors for secure policy

const app = express();

//middleware for parsing request body
app.use(express.json());

//middleware for handling CORS POLICY
// 1) allow all origins with default of cors(*)
     app.use(cors());
// 2) allow custom origins
// app.use(
//   cors({
//     origin:'http://localhost:3000',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );


app.get('/', (request, response) =>{
  console.log(request);
  return response.status(234).send('welcome to MERN Stack')
});

//using middleware to get /books
app.use('/books', booksRoute);

mongoose
.connect(mongoDB)
.then(() =>{
  console.log('app connected to database');
  app.listen(PORT , () => {
    console.log(`App is listening to port:${PORT}`)
  });
})
.catch((error) =>{
  console.log(error);

})

