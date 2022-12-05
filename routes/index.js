const express = require('express');
const Users = require('./users');

const router = express.Router();

router.use('/users/', Users);

module.express = router;