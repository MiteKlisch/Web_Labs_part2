const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const spacestationSchema = new Schema({
    spacestationname: { type: String, required: true },
    needs: { type: Number, required: true },
    capasity: { type: Number, required: true },
}, {
  timestamps: true,
});

const SpaceStation = mongoose.model('SpaceStation', spacestationSchema);

module.exports = SpaceStation;