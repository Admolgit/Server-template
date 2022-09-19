const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../api/routes/v1');
const { logs } = require('./vars.config');

/**
* Express instance
* @public
*/
const app = express();

// Cross Origin Resource Sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
app.use(cors({
  'Access-Control-Allow-Origin': '*',
  origin: '*',
  methods: 'GET,HEAD,POST',
  preflightContinue: false,
  optionsSuccessStatus: 204,
}));
// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// mount api v1 routes
app.use('/v1', routes);
app.get('*', (req, res) => res.json({ message: 'Route Not found' }));

module.exports = app;
