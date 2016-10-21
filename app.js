'use strict';

const express = require('express');

const PORT = 3000;
const app = express();


app.listen(PORT, function () {

  console.log('Express server listening on port ' + PORT);
  require('./db')('mongodb://localhost:27017/testStorage');

});