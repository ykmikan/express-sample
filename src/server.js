const express = require('express');
const routes = require('./routes/router');
const app = express();
const router = express.Router();

routes(router);

app.use('/api', router);

module.exports = app;