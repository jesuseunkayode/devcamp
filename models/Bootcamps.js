const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    flask: String,  
    drum: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})



module.exports = mongoose.model('bootcamp', BootcampSchema);

 