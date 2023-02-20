const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const morgan = require('morgan');
const bootcamps = require('./routes/bootcamps');
const connectDB = require('./config/db');


//load the env variables
dotenv.config({path: './config/config.env'})

const app = express();

//mount the bootcamps route
app.use('/api/v1/bootcamps', bootcamps)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(morgan('dev'));



const PORT = process.env.PORT || 5000;
const start = async() => {
     try {
       await connectDB()
       app.listen(PORT, console.log(`The server is running in ${process.env.NODE_ENV} mode at port ${PORT}`))
        
     } catch (error) {
        console.error(error)
     }
}

start();