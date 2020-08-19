const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

// Load User model
const Room = require("../../models/Room");



// CREATE Room
router.post("/create-room", (req, res) => {
    RoomSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

// READ Room
router.route('/').get((req, res) => {
    RoomSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get Single Room
router.route('/edit-room/:id').get((req, res) => {
    RoomSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update Room
router.route('/update-room/:id').put((req, res, next) => {
    RoomSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Room updated successfully !')
        }
    })
})

// Delete Student
router.route('/delete-room/:id').delete((req, res, next) => {
    RoomSchema.findByIdAndRemove(req.params.id, (error, data) => {
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