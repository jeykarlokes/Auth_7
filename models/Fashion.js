var mongoose = require("mongoose");

var fashionSchema = mongoose.Schema(
    {
        name:String,
        desc:String,
        price:Number,
        image:String,
        status:String,
        quantity:Number,
        sex:String,

    });

module.exports = mongoose.model('Fashion',fashionSchema);


