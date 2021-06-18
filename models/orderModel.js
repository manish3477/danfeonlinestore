const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true,
        trim: true
    },
    mobilenumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    paymethod: {
        type: String,
        default: 0
    },
    cart: {
        type: Array,
        default: []
    },
    totalprice: {
        type: String,

    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Orders', orderSchema)