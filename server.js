const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const rooms = require("./routes/api/rooms");
const bookings = require("./routes/api/bookings");

const app = express();

//bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

//db config
const db = require("./config/keys").mongoURI;

//connect to mongodb
mongoose.connect(
        db, { useNewUrlParser: true }
    )
    .then(() => console.log("mongodb successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/rooms", rooms);
app.use("/api/bookings", bookings);

const port = process.env.PORT || 5000;
//process.env.port is heroku port for deployment

app.listen(port, () => console.log(`server up and running on port ${port} !`));