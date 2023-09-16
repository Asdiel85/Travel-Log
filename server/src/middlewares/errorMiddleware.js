const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
     err: {
         message: err.message
     }
    })
 }
 
 module.exports = {
     errorHandler
 }