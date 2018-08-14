const { logger } = require('./logger');

// centralized error object that derives from Node’s Error
function AppError(name, httpCode, description, isOperational) {
  Error.call(this);
  Error.captureStackTrace(this);
  this.name = name;
  this.statusCode = httpCode;
  this.message = description;
  this.isOperational = isOperational;
  logger.error(`${this.statusCode || 500} - ${this.message}`, this);
}

require('util').inherits(AppError, Error);

const _200 = (message = 'Failure') => {
  logger.error(`SuccessError ${200} ${message}`);
  return new AppError('SuccessError', 200, message);
};

const _400 = (message = 'Bad Request') => {
  logger.error(`BadRequestError ${400} ${message}`);
  return new AppError('BadRequestError', 400, message);
};

const _401 = (message = 'Unauthorized') => {
  logger.error(`UnauthorizedError ${401} ${message}`);
  return new AppError('UnauthorizedError', 401, message);
};

const _402 = (message = 'Payment Required') => {
  logger.error(`PaymentRequiredError ${402} ${message}`);
  return new AppError('PaymentRequiredError', 402, message);
};

const _403 = (message = 'Forbidden') => {
  logger.error(`ForbiddenError ${403} ${message}`);
  return new AppError('ForbiddenError', 403, message);
};

const _404 = (message = 'Not Found') => {
  logger.error(`NotFoundError ${404} ${message}`);
  return new AppError('NotFoundError', 404, message);
};

const _409 = (message = 'Conflict') => {
  logger.error(`ConflictError ${409} ${message}`);
  return new AppError('ConflictError', 409, message);
};

const _429 = (message = 'Too Many Requests') => {
  logger.error(`TooManyRequestsError ${429} ${message}`);
  return new AppError('TooManyRequestsError', 429, message);
};

const _500 = (message = 'Internal Server Error') => {
  logger.error(`InternalServerError ${500} ${message}`);
  return new AppError('InternalServerError', 500, message);
};

const _666 = (message = 'The Number of the Beast') => {
  logger.error(`DEVILSDANCE ${666} ${message}`);
  return new AppError('DEVILSDANCE', 666, message);
};

module.exports = {
  AppError,
  _200,
  _400,
  _401,
  _402,
  _403,
  _404,
  _409,
  _429,
  _500,
  _666,
};
