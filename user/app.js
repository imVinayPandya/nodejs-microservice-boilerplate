const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const swaggerUi = require('swagger-ui-express');

const { logger } = require('./utils/logger');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const { _404 } = require('./utils/customError');

const options = {
  swaggerUrl: 'http://petstore.swagger.io/v2/swagger.json',
  customCss: '.swagger-ui .topbar { display: none }',
};

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet());
app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));

app.get('/favicon.ico', (req, res) => res.status(204));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = _404('not found');
  return next(err);
});

// error handler
app.use((err, req, res) => {
  // add this line to include winston logging
  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  return res.status(err.statusCode || 500).json({
    // errorCode: err.errorCode || 500,
    reason: err.statusCode === 500 ? 'Something went wrong' : err.message,
    success: false,
  });
});

module.exports = app;
