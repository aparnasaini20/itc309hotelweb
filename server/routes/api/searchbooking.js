const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

// Load Room model
const Booking = require("../../models/Booking");


//search for available rooms
router.post("/create-booking", (req, res) => {
    Booking.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

app.get('/user', function(req, res) {

    // use mongoose to get all users in the database
    User.find({ region: "NA" }, function(err, user) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        // return all todos in JSON format
        console.log(user);
        res.json(user);

    });
});



module.exports = router;