const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    date: String,
    hour: String,
    adultos: Number,
    ninos: Number,
    residente: Boolean,
    nombre: String,
    email: String,
    precio: Number
});

const itemModel = mongoose.model('Item', itemSchema);
module.exports = itemModel;