const mongoose = require('mongoose');
const slugify = require('slugify');

const BootcampSchema = new mongoose.Schema({
    name: {
        type : String,
        required: [true, "Please enter your name here"],
        unique : true
    },  

    slug: String,
    description: {
        type: String,
        required: [true, "Please desribe your bootcamp"],
    },

    course: {
        type : [String],
        enum: ['Frontend', 'Backend', 'Fullstack'],
        required: [true, "Please select a course of your choice"],
    },

    email : {
        type : String,
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/],
        required: [true, "Please enter your email address here"],
        unique : true
    },
    phone: {
        type: Number,
        required: [true,"please provide your phone number"]
    },

    address: {
        type: String,
        required: [true, 'Please enter your current address']
    },
    location: {
        type: String,
        enum:['Point'],
        coordinates:{
            type: [Number],
            index: 'sdsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        country: String
    },
    photo: {
        type: String,
        default: "no-phone.jp"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


BootcampSchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower: true})
    next();
})



module.exports = mongoose.model('bootcamp', BootcampSchema);

 