
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');


const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors(
  // {
  //   origin: 'http://localhost:3000', // Adjust this to your frontend's URL
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true,
  // }
));


app.use(express.json());
app.use('/api/students', studentRoutes);

app.use((err, req, res, next) =>{
  console.log(err.stack);
  res.status(500).send('internal error')
})

mongoose.connect('mongodb://localhost:27017/studentdb',
  { useNewUrlParser: true, useUnifiedTopology: true }
 )

// mongoose.connect('mongodb://backend-mern:xTW9zYL7U8dEinnslowGDUwRDh8C0r7RGrxZx4s9JcB2f2sfKZhyvpG2PVXykWbd2yzo93pxCJjXACDbsCvI4Q==@backend-mern.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@backend-mern@', { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
