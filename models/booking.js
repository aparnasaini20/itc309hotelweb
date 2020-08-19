/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BookingSchema = new Schema({
    id: { type: String, require: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    room_no: { Number }
});


module.exports = Booking = mongoose.model("bookings", BookingSchema);