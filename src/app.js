'use strict';

const express = require('express');

const PORT = 3000;
const app = express();

//if web container is linked with mongo-db MONGO_DB_NAME will be set
//in order to communicated with mongodb we use 'mongo-db' alias added by docker link
const MONGO_IP = process.env.MONGO_DB_NAME ? 'mongo-db' : 'localhost';

app.listen(PORT, function () {

  let db_state = 'connecting....';

  console.log('Express server listening on port ' + PORT);
  require('./db')(`mongodb://${MONGO_IP}:27017/testStorage`)
  .then(() => db_state = 'db connected')
  .fail(() => db_state = 'db conneciton error')

  app.get('/', (req, res) => {
    const conf = {
      time: Date.now(),
      db_state: db_state,
      db_ip: MONGO_IP
    };
    res.send(conf);
  })
});