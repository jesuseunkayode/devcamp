const bootcamps = require('../models/Bootcamps')

// @desc  get all bootcamps
// @route  Get api/v1/bootcamps
// @ access public
const getBootcamps = async (req, res, next) => {
    // const all  = await bootcamp.find({});
    res.status(200).json({success: true, msg:"display all bootcamps"})
}


// @desc  get a single bootcamp
// @route  Get api/v1/bootcamp
// @ access public
const getBootcamp = async (req, res, next) => {
      try {
        const foundBootcamp = await bootcamps.findById(req.params.id)
        res.status(200).json({success: true, msg: foundBootcamp})
      } catch (error) {
        res.status(400).json({success: false, 
            msg: {}})
      }
    
}


// @desc   create a new bootcamp
// @route   post api/v1/bootcamps
// @ access private
const createBootcamp = async (req, res, next) => {
     try {
         const camp = await bootcamps.create(req.body);
         res.status(201).json({success: true, 
             msg: camp})
             if(!camp){
                return res.status(400).json({success: false, 
                 msg: camp})
             }

     } catch (error) {
         res.status(400).json({success: false, 
             msg: {}})
    }     
}


// @desc  update a single bootcamp
// @route  Put api/v1/bootcamps/:id
// @ access private
const updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `update bootcamp with id ${req.params.id}`})
}


// @desc  delete a single bootcamp
// @route  Get api/v1/bootcamps/:id
// @ access private
const deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `delete a single bootcamp with id ${req.params.id}`})
}

module.exports = {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp
}