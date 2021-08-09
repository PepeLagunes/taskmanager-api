const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    phone: String,
    email:{
        type: String,
        required: true
    }
});

UserSchema.path("email").validate(function (value) {
    return this.model("user").count({ email: value }).then(function(count) {
        return count < 1;
    });
}, "Email is already registered!");

const User = mongoose.model("user", UserSchema);

module.exports = User;