const fs = require('fs');
const mongoose = require('mongoose');
const bootcamps = require('./../models/Bootcamps')
const dotenv = require('dotenv')
dotenv.config({path: `./config/config.env`})

const connectDB = async() => {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`the database is ready ${conn.connection.host}`)
}
connectDB()

////// read the json file
 const bootcamper = JSON.parse(fs.readFileSync(`${__dirname}/bootcamps-data.json`, 'utf-8'));

const importData = async() => {
      await bootcamps.create(bootcamper)
      console.log("data imported successfully")
}

const deleteData = async() => {
    await bootcamps.deleteMany()
    console.log("data deleted successfully")
}

if(process.argv[2] === '--import'){
   importData()
} else if(process.argv[2] === '--delete'){
    deleteData()
}

