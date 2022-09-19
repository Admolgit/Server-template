const session = require('express-session');
const { port, env } = require('./Config/vars.config');
const logger = require('./Config/logger.config');
const app = require('./Config/express.config');
const mongoose = require('./Config/mongoose.config');
// const routes = require('./api/routes/v1');
const routes = require('./api/routes/v1');

app.use('/', routes);

// open mongoose connection
mongoose.connect();

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET',
}));

// listen to requests
app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

/**
* Exports express
* @public
*/
module.exports = app;
