const express = require('express');
const app = express();
const errorHandler = require('./middleware/errorHandler')
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const connectDB = require('./config/db');


//load the env variables
dotenv.config({path: './config/config.env'})
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//mount the bootcamps route
app.use('/api/v1/bootcamps', bootcamps)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
const start = async() => {
       await connectDB()
      const server = app.listen(PORT, console.log(`The server is running in ${process.env.NODE_ENV} mode at port ${PORT}`))
        
      //handle unhandle promise
      process.on('unhandle promise', (error, promise) => {
        console.log(`Error: ${error.message}`);
        server.close(() => process.exit(1));
      })
}

start();