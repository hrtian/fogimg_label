const mongoose = require('mongoose');

var usernameSchema = new mongoose.Schema({
    username: String
});

module.exports = mongoose.model("usernameModel", usernameSchema, "username");