'use strict';

const express = require('express');

const PORT = 3000;
const app = express();

const MONGO_IP = process.env.MONGO_IP || 'localhost';

app.listen(PORT, function () {

  let db_state = 'connecting....';

  console.log('Express server listening on port ' + PORT);
  require('./db')(`mongodb://${MONGO_IP}:27017/testStorage`)
  .then(() => db_state = 'db connected')
  .fail(() => db_state = 'db conneciton error')

  app.get('/', (req, res) => res.send(`db state: ${db_state} ${Date.now()} `))
});