const router = require('express-promise-router')();
const Bluebird = require('bluebird');
// const { logger } = require('../utils/logger');
// const { _404 } = require('../utils/customError');

/* GET home page. */
router.get('/', (req, res) =>
  // throw _404();
  Bluebird.try(() => {
    res.status(200).send('Welcome to the jungle!');
  })
);

module.exports = router;
