const mongoose = require('mongoose');

let scoreSchema = new mongoose.Schema({
    username: String,
    list: []
});

module.exports = mongoose.model("scoreModel", scoreSchema, "score");