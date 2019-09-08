const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    item: {
        type: String,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;