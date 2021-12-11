const mongoose = require('mongoose')

const qrCodeSchema = mongoose.Schema({
    digitAwal: {
        type: String,
        required:true
    },
    kodeWilayah: {
        type: String,
        required:true,
    },
    bulan: {
        type: String,
        required:true
    },
    tahun: {
        type: String,
        require: true,
        minlength: [4, 'Tahun harus 4 digit'],
        maxlength: [4, 'Tahun harus 4 digit'],
        default: new Date().getFullYear()
    },
    urutan: {
        type: String,
        required:true
    },
    kodeQR: {
        type: String,
        require: true
    }

}, {
    timestamps: true
})


const QRCode = mongoose.model('QRCode', qrCodeSchema)

module.exports = QRCode