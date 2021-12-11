const express = require('express');
const { createqrCode, getAllqrCode, getqrCodebyId, generateNomorUrut } = require('../controller/qrCodeController');

const router = express.Router();

router.route('/getnomorurut').post(generateNomorUrut)

router.route('/').post(createqrCode).get(getAllqrCode)
router.route('/:id').get(getqrCodebyId)

module.exports = router;
