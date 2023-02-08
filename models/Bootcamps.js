const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'Please enter your name'],
        unique: true, 
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },

     slug: String,

     description:{
        type: String,
        required:[true, 'Please describe your bootcamp here'],
        unique: true,
        maxlength:[500, 'Description can not be more than 500 character long']
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})



module.exports = mongoose.model('Bootcamp', BootcampSchema)