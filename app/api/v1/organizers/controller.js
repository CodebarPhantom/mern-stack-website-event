// import services categories
const {
    createOrganizer,
    createUsers
  } = require('../../../service/mongoose/users');
  
  const { StatusCodes } = require('http-status-codes');
  
  const createCMSOrganizer = async (req, res, next) => {
    try {
      const result = await createOrganizer(req);
  
      res.status(StatusCodes.CREATED).json({
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };

  const createCMSUser = async (req, res, next) => {
    try {
      const result = await createUsers(req);
  
      res.status(StatusCodes.CREATED).json({
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = {
    createCMSOrganizer,
    createCMSUser
  };