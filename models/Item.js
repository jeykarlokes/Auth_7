var mongoose = require("mongoose");
//   name:'shoes',
//         price:200,
//         p_id:'shoe3',
//         available:true,
//         desc:'Shoes are made in India and Only to be sold in India ',
//         image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSHDmTw6MwOFoM-18EFC9NQ0hzjW5ZqNsChrVrDosC_mmKxyYM-XspZPRzXrGJM&usqp=CAc',
//         quantity:20,
//         sex:"Fe-Male"
var itemSchema = mongoose.Schema(
    {
        name:String,
        desc:String,
        price:Number,
        image:String,
        available:Boolean,
        sex:String,
        quantity:Number,
        p_id:String,
    });

module.exports = mongoose.model('Item',itemSchema);


