const mongoose = require('mongoose');

//to remove deprecation warning
mongoose.set('strictQuery', true);

const connectDB = async() => {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongdoDB: ${conn.connection.host}`)
}

module.exports = connectDB;