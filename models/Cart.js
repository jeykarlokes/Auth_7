var mongoose = require("mongoose");

var cartSchema = mongoose.Schema(
    {
        name:String,
        desc:String,
        price:Number,
        image:String,
        quantity:Number,
        total:Number,
    });

module.exports = mongoose.model('Cart',cartSchema);


