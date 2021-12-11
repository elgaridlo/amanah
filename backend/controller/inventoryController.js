const expressAsyncHandler = require("express-async-handler");
const Inventory = require("../model/inventoryModel");
const appError = require("../utils/appError");

exports.getAllInventory = expressAsyncHandler (async(req, res, next) => {
    const allInventory = await Inventory.find()

    res.status(200).json({
        status: 'Success',
        result: allInventory.length,
        data: allInventory,
    });
})

exports.createInventory = expressAsyncHandler(async (req, res, next) => {
    const newDoc = await Inventory.create(req.body);
    res.status(201).json({
        status: 'Success',
        data: newDoc,
    });
});

exports.deleteInventory = expressAsyncHandler(async (req, res, next) => {
    const doc = await Inventory.findByIdAndDelete(req.params.id);

    if (!doc) {
        return next(new appError('No Inventory found with that ID', 404));
    }

    res.status(204).json({
        status: 'Success',
        data: null,
    });
});

exports.addStock = expressAsyncHandler(async (req, res, next) => {
    const inventory = await Inventory.findById(req.params.id);

    if (!inventory) {
        return next(new appError('No Inventory found with that ID', 404));
    }

    const updateInventory = await Inventory.findByIdAndUpdate(req.params.id, {stock : Number(req.body.stock + inventory.stock)})

    res.status(204).json({
        status: 'Success',
        data: updateInventory,
    });
});