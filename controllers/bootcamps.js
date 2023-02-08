const bootcamp = require('../models/Bootcamps')

// @desc  get all bootcamps
// @route  Get api/v1/bootcamps
// @ access public
exports.getBootcamps = async(req, res, next) => {
    const all  = await bootcamp.find({});
    res.status(200).json({success: true, msg:"display all bootcamps"})
}


// @desc  get a single bootcamp
// @route  Get api/v1/bootcamp
// @ access public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `display a single bootcamp with id ${req.params.id}`})
}


// @desc   create a new bootcamp
// @route   post api/v1/bootcamps
// @ access private
exports.createBootcamp = (req, res, next) => {
    console.log(req.body)
    res.status(200).json({success: true, msg: `create a new bootcamp`})
}


// @desc  update a single bootcamp
// @route  Put api/v1/bootcamps/:id
// @ access private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `update bootcamp with id ${req.params.id}`})
}


// @desc  delete a single bootcamp
// @route  Get api/v1/bootcamps/:id
// @ access private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `delete a single bootcamp with id ${req.params.id}`})
}