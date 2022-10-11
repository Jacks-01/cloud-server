'use strict';

const express = require('express');

const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const notFound = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(logger);

app.get('/person', validator, (req, res, next) => {
  let { name } = req.query;
  try {
    if (name) {
      res.status(200).json({ name: name });
    } else { res.status(500).send('SERVER ERROR'); }

  } catch (err) {
    next(err.message);
  }
});

app.get('/', (req, res, next) => {
  res.status(200).send('hello world');
});

// catch all if the route is not /person
app.use('*', notFound);
// final catch if something other than a routing issue happened
app.use(serverError);


// wrapper for starting the server, this is exported and called in index.js
function start() {
  app.listen(PORT, () => { console.log(`you are listening on port ${PORT}`); });
}

/**
 * app: express app and all of its routes
 * start: start function
 */
module.exports = { app, start };