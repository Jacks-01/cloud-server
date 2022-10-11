'use strict';

const validator = ( req, res, next) => {
  console.log('validator.js');
  if (req.query) {
    console.log(req.query);
    next();

  } else {
    next('name required');
  }
  next();
};

module.exports = validator;