const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    flask: {
        type: String,
        unique: true
    },
    drum: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})



module.exports = mongoose.model('bootcamp', BootcampSchema);

 