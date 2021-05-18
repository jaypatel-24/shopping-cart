const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CartSchema = mongoose.Schema({
    itemId : {
        type: Schema.Types.ObjectId, 
        ref: 'item'
    },
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
    quantity : {
        type : Number 
    }
});

module.exports = mongoose.model('cart', CartSchema);