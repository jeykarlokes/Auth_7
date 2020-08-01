var express = require("express");
var app = express();
var mongoose            = require("mongoose"),
    bodyParser          = require("body-parser"),
    Item                = require("./models/Item"),
    Order               = require("./models/Order"),
    User                = require("./models/User"),
    Fashion_items       = require("./sample-items.js"),
    Cart                = require("./models/Cart"),
    UserDetail          = require("./models/UserDetail"),
    product_categories  = require("./load-categories");


var adminRoute      = require("./routes/Admin");
var cartRoute       = require("./routes/Cart");
var fashionRoute    = require("./routes/Fashion");
var userRoute       = require("./routes/User");
var indexRoute      = require("./routes/Index");
var seedRoute       = require("./routes/SeedDB");


var passport                = require("passport"),
    bodyParser              = require("body-parser"),
    LocalStrategy           =  require("passport-local"),
    expressSessions         = require("express-session"),
    passportLocalMongoose   = require("passport-local-mongoose");
 
   
mongoose.connect('mongodb://localhost:27018/Shop_v5_Auth', {useNewUrlParser: true, useUnifiedTopology: true});


app.set('view engine','ejs');
app.use(require("express-session")({
    //  encode and decode the information in the sessions using secret
    secret:"lokesh is going to develop web",
    resave:false,
    saveUninitialized:false
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended:true}));

//  encode
passport.serializeUser(User.serializeUser());
//  decode
passport.deserializeUser(User.deserializeUser());

passport.use(new LocalStrategy(User.authenticate()));

// app.use(function())

app.use(function(req,res,next)
{
    res.locals.currentUser = req.user;
    next();
});



app.use("/",indexRoute);
app.use("/user/:name/",userRoute);


app.use("/seed",seedRoute);
app.use("/admin",adminRoute);
app.use("/fashions",fashionRoute);







app.listen(process.env.PORT, process.env.IP, function ()
{
    console.log(process.env.PORT,process.env.IP)
    console.log('server started SuccessFully !!');

});