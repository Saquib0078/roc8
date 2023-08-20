const express = require('express');
const router = express.Router();
const urlController = require("../controller/urlController");



router.get('/data',urlController.data)


module.exports = router;


