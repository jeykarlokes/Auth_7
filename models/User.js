var mongoose = require('mongoose');
var UserDetail = require('./UserDetail');
var Order = require('./Order');
var Cart = require('./Cart');

//  auth
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema(
    {
        username:String,
        carts:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Cart'
            }],

        userdetails:[
            {
                type:mongoose.Schema.Types.ObjectId,

                ref:'UserDetail'
            }]

        // orders:[
        //     {
        //         type:mongoose.Schema.Types.ObjectId,
        //         ref:'Order'
        //     }]



    });
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User',userSchema);
