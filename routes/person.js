const express = require('express');
const personController = require('../controllers/person');
const router = express.Router();

router.get('/persons', personController.getPersons);

module.exports = router;