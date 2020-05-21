const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const planetSchema = new Schema({
    planetname: { type: String, required: true },
    stationname: { type: String, required: true },
    capasity: { type: Number, required: true },
    mass: { type: Number, required: true },
}, {
  timestamps: true,
});

const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;