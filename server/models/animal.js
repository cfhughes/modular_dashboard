var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 2},
    color: { type: String, required: true, minlength: 2},
    pack_size: { type: Number, min: 1},
}, {timestamps: true });

var Animal = mongoose.model('Animal', AnimalSchema);
module.exports = Animal;