/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    id: { type: String, require: true },
    name: { type: String, require: true },
    price: { type: Number, require: true },
    type: String
});


module.exports = Room = mongoose.model('rooms', RoomSchema);