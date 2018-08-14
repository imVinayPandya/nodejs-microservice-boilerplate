const express = require('express');
// const { _404 } = require('../utils/customError');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // throw _404();
  res.status(200).send('Welcome to the jungle!');
});

module.exports = router;
