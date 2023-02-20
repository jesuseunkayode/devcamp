const mongoose = require('mongoose');

//to remove deprecation warning
mongoose.set('strictQuery', true);

const connectDB = async() => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb is connected: ${conn.connection.host}`);
}

module.exports = connectDB;