/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomtypeSchema = new Schema({
    type: { type: String, require: true },
    price: { type: Number, require: true }

});


module.exports = RoomType = mongoose.model('roomtype', RoomtypeSchema);