var mongoose = require("mongoose");
var userdetail_schema = mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        address:String,
        city:String,
        phoneno:String,
        country:String,
    });

module.exports = mongoose.model('UserDetail',userdetail_schema);


