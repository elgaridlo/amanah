const mongoose = require('mongoose')

const inventorySchema = mongoose.Schema({
    code: {
        type: String,
        required:true,
        unique: true 
    },
    name: {
        type: String,
        required:true,
    },
    price: {
        type: Number,
        required:true,
        min: 500
    },
    stock: {
        type: Number,
        require: true,
        default: 0
    }
}, {
    timestamps: true
})


const Inventory = mongoose.model('Inventory', inventorySchema)

module.exports = Inventory