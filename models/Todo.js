const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    Owner_id:{
        type: String,
        required: true
    },
    title: String,
    listOwner: String,
    elements:[ ]
});

const Todo = mongoose.model("todoitem", TodoSchema);

module.exports = Todo;