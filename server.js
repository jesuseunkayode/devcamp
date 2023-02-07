const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');

//load the env variables
dotenv.config({path: './config/config.env'})

const app = express();

//mount the bootcamps route
app.use('/api/v1/bootcamps', bootcamps)




const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`The server is running in ${process.env.NODE_ENV} mode at port ${PORT}`))