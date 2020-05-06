const express = require('express');
const personController = require('../controllers/person');
const router = express.Router();

router.get('/persons', personController.getPersons);

router.get('/persons/:id', personController.getPersonById);

module.exports = router;