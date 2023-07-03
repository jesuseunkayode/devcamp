const bootcamps = require('../models/Bootcamps')

// @desc  get all bootcamps
// @route  Get api/v1/bootcamps
// @ access public
const getBootcamps = async (req, res, next) => {
    let query;
    //basic filtering
    //copy the query obj
     let queryObj = {...req.query}
     let removedFileds = ['page', 'sort', 'select', 'limit']
         removedFileds.forEach(el => delete queryObj[el])

   //advance filtering
     let queryStr = JSON.stringify(queryObj);
     queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    
     query = bootcamps.find(JSON.parse(queryStr));

    //sorting
    if(req.query.sort){
        const sortBy = req.query.sort.split(',').join(' ');
        query = query.sort(sortBy)
    } else{
        query = query.sort('-createdAt')
    }

    //Select the certain fields
    if(req.query.select){
        const selectBy = req.query.select.split(',').join(' ');
        query = query.select(selectBy)
    }

    //pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 2;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let total = await bootcamps.countDocuments();

    query = query.skip(startIndex).limit(limit)

const all = await query
      //pagination result

      let pagination = {}

      if(endIndex < total){
        pagination.next = {
            page: page + 1,
            limit
        }
      } 

      if(startIndex > 0){
        pagination.prev = {
            page: page - 1,
            limit
        }
      }
    

    res.status(200).json({success: true, pagination, count: all.length, msg: all})
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