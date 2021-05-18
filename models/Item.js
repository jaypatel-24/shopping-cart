const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true,
    },
    price : {
        type: Number,
        required: true
    },
    image : {
        type: String,
        default: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png"
    },
    cartStatus: {
        type: Number,
        default : 0
    }
});

module.exports = mongoose.model('item', ItemSchema);