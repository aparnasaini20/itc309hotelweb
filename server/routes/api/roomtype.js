const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

// Load Room model
const Room = require("../../models/RoomType");
const roomtype = require("../../models/RoomType");





// CREATE RoomType
router.post("/create-roomtype", (req, res) => {
    RoomType.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

// READ Roomtype
router.route('/').get((req, res) => {
    RoomType.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get Single Roomtype
router.route('/edit-room/:type').get((req, res) => {
    RoomType.findById(req.params.type, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update Room
router.route('/update-roomtype/:type').put((req, res, next) => {
    RoomType.findByIdAndUpdate(req.params.type, {
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

// Delete Roomtype
router.route('/delete-room/:type').delete((req, res, next) => {
    RoomType.findByIdAndRemove(req.params.type, (error, data) => {
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