const express = require('express');
const { createInventory, getAllInventory, addStock, deleteInventory } = require('../controller/inventoryController');

const router = express.Router();

router.route('/').post(createInventory).get(getAllInventory)
router.route('/:id').delete(deleteInventory)

router.route('/add/:id').put(addStock)

module.exports = router;
