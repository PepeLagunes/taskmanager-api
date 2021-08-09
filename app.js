/** TaskManager Api */

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require("./routes");

// Global app object
const app = express();

//middleware config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

mongoose.connect(
    'mongodb+srv://gerardolagunes:pollo@cluster0.un9m5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true }
)

app.use("/", router);

//Not found errors
app.use(function (req, res, next) {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

//Bootstrap
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('App runing. Listening on port 3000')
});