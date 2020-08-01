var mongoose = require("mongoose");
var item = require('./Item');
var orderSchema = mongoose.Schema(
    {
        orders:[
            {
            ref:'Item',
            type:mongoose.Schema.Types.ObjectId,
            }],
        total:Number,
        date:String,
            
    });

module.exports = mongoose.model('Order',orderSchema);


