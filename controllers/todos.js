const Todo = require('../models/Todo');
const ObjectId = require('mongoose').Types.ObjectId;


function createTodo(request, response) {
    const todoitem = new Todo(request.body)
    Todo.create(todoitem)
    .then(function (todoitem) {
        response.status(201).send(todoitem);
    })
    .catch(function (error) {
        response.status(400).send({"message": error.message, "type": error.name});
    });
};


module.exports = createTodo;