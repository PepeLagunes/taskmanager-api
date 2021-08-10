const User = require('../models/User');
const ObjectId = require('mongoose').Types.ObjectId;


function createUser(request, response) {
    const user = new User(request.body)
    User.create(user)
    .then(function (user) {
        response.status(201).send(user);
    })
    .catch(function (error) {
        response.status(400).send({"message": error.message, "type": error.name});
    });
};

function getUsers(request, response) {
    User.find().then(function (users) {
        response.send(users);
    });
}

module.exports = {createUser, getUsers};