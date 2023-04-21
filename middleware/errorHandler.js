const ErrorResponse = require("../utility/errorResponse")
const errorHnadler = (err, req, res, next) => {
     let error = {...err}

      console.log(err.stack)

      if(err.name === "CastError"){
         const message = `The id ${error.value} entered does not exist`
         error = new ErrorResponse(message, 404)
      }


      if(err.code === 11000){
        const message = `Duplicate field valued entered`
        error = new ErrorResponse(message, 400)
     }

     if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).filter(val => val.message)
        error = new ErrorResponse(message, 403)
     }




      res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
      })
}

module.exports = errorHnadler;