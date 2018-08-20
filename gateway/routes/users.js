const router = require('express-promise-router')();
const Bluebird = require('bluebird');
/* GET users listing. */
router.get('/', (req, res) =>
  Bluebird.try(() => {
    res.send('respond with a resource');
  })
);

module.exports = router;
