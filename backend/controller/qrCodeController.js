const expressAsyncHandler = require("express-async-handler");
const QRCode = require("../model/qrCodeModel");
const appError = require("../utils/appError");

exports.getAllqrCode = expressAsyncHandler (async(req, res, next) => {
    const allqrCode = await QRCode.find()

    res.status(200).json({
        status: 'Success',
        result: allqrCode.length,
        data: allqrCode,
    });
})

exports.generateNomorUrut = expressAsyncHandler (async(req, res, next) => {
    const allqrCode = await QRCode.find(
        {
            digitAwal: req.body.digitAwal, 
            kodeWilayah: req.body.kodeWilayah, 
            bulan: req.body.bulan, 
            tahun: req.body.tahun
        })

    res.status(200).json({
        status: 'Success',
        urutan: allqrCode.length + 1,
    });
})

exports.createqrCode = expressAsyncHandler(async (req, res, next) => {
    const validation = await QRCode.find(
        {
            digitAwal: req.body.digitAwal, 
            kodeWilayah: req.body.kodeWilayah, 
            bulan: req.body.bulan, 
            tahun: req.body.tahun ? req.body.tahun : new Date().getFullYear(),
            
        })
    
        if((validation.length + 1) < Number(req.body.urutan)) {
            return next(new appError('No urutan tidak urut', 404));
        }

        if(validation.length >= Number(req.body.urutan)) {
            return next(new appError('No urutan sudah ada', 404));
        }



    const newDoc = await QRCode.create(req.body);
    res.status(201).json({
        status: 'Success',
        data: newDoc,
    });
});

exports.deleteqrCode = expressAsyncHandler(async (req, res, next) => {
    const doc = await QRCode.findByIdAndDelete(req.params.id);

    if (!doc) {
        return next(new appError('No qrCode found with that ID', 404));
    }

    res.status(204).json({
        status: 'Success',
        data: null,
    });
});

exports.getqrCodebyId = expressAsyncHandler (async(req, res, next) => {
    const allqrCode = await QRCode.findById(req.params.id)

    res.status(200).json({
        status: 'Success',
        result: allqrCode.length,
        data: allqrCode,
    });
})

exports.addStock = expressAsyncHandler(async (req, res, next) => {
    const qrCode = await QRCode.findById(req.params.id);

    if (!qrCode) {
        return next(new appError('No qrCode found with that ID', 404));
    }

    const updateqrCode = await QRCode.findByIdAndUpdate(req.params.id, {stock : Number(req.body.stock + qrCode.stock)})

    res.status(204).json({
        status: 'Success',
        data: updateqrCode,
    });
});