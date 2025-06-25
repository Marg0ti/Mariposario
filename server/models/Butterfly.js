// models/Butterfly.js
const mongoose = require('mongoose');

const butterflySchema = new mongoose.Schema({
  nombre_comun: String,
  nombre_cientifico: String,
  reino: String,
  familia: String,
  descripcion: String,
  distribucion: String,
  foto: String 
});

module.exports = mongoose.model('Butterfly', butterflySchema);
