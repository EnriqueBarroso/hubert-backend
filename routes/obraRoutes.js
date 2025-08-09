const express = require('express');
const router = express.Router();
const { getObras, createObra } = require('../controllers/obraController');

router.get('/', getObras);
router.post('/', createObra);

module.exports = router;
