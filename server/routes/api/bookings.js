const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

// Load Room model
const Booking = require("../../models/Booking");





// CREATE booking
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

// READ booking
router.route('/').get((req, res) => {
    Booking.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get Single booking by id
router.route('/edit-booking/:id').get((req, res) => {
    Booking.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update Booking
router.route('/update-booking/:id').put((req, res, next) => {
    Booking.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Booking updated successfully !')
        }
    })
})

// Delete Booking
router.route('/delete-booking/:id').delete((req, res, next) => {
    Booking.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})




module.exports = router;