const path = require('path');
const fs = require('fs');
const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const { createLogger, format, transports } = winston;
const { combine, timestamp, printf, colorize } = format;
const logFolderPath = path.join(__dirname, '..', 'logs');
const errorLogFileName = `${logFolderPath}/error-%DATE%.log`;
const applicationLogFileName = `${logFolderPath}/application-%DATE%.log`;

if (!fs.existsSync(logFolderPath)) {
  fs.mkdir(logFolderPath);
}

const logFormat = printf(info => `${info.timestamp} ${info.level}: ${info.message}`);

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5,
};

const logger = createLogger({
  levels,
  format: format.prettyPrint(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new DailyRotateFile({
      filename: errorLogFileName,
      datePattern: 'YYYY-MM-DD-HH', // rotate file based on hours
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      level: 'error',
      json: false,
      humanReadableUnhandledException: true,
      handleExceptions: true,
    }),
    new DailyRotateFile({
      filename: applicationLogFileName,
      datePattern: 'YYYY-MM-DD-HH', // rotate file based on hours
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      humanReadableUnhandledException: true,
      handleExceptions: true,
    }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: combine(colorize(), timestamp(), logFormat),
      humanReadableUnhandledException: true,
      level: 'silly',
    })
  );
}

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: message => {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

module.exports = {
  logger,
};
