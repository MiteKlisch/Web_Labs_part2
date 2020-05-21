const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goodsSchema = new Schema({
    code: { type: Number, required: true },
    goodsname: { type: String, required: true },
    mass: { type: Number, required: true },
}, {
  timestamps: true,
});

const Goods = mongoose.model('Goods', goodsSchema);

module.exports = Goods;