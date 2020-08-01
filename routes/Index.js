var express             = require("express"),
    app                 = express(),
    router              = express.Router({mergeParams:true}),
    User                = require('../models/User'),
    UserDetail          = require('../models/UserDetail'),
    product_categories  = require('../load-categories');

var passport            = require("passport");

router.get('/',function (req, res) {
    res.render('landing.ejs');
})
router.get('/home',function (req, res) {
    console.log(req);
    res.render('home.ejs', {products:product_categories});
})



router.get('/login', function(req, res) {
    res.render('Logins.ejs');
});

router.post('/login',passport.authenticate('local',{
    successRedirect:"/home",
    failureRedirect:"/login"
}),function(req,res)
{

})


router.get('/register',function(req,res)
{
    res.render('Register');

})

router.post('/register',function(req,res)
{
    // console.log('register');
    User.register(new User(
        {username:req.body.username}),req.body.password,function (err,user)
        {
        if(err)
        {
            console.log(err);
            res.redirect('/register');
        }
        else
        {
            passport.authenticate('local')(req,res,function()
            {
                res.redirect('/home');
            })
        }
    })

});


//  logout functionality
router.get('/logout',function(req,res)
{
//  passport is destroying all user data in the sessions
    // console.log(req.user);
    req.logout();
    console.log('logout successfully!!');
    res.redirect('/login');
})



function isLoggedIn(req,res,next)
{
    if(req.isAuthenticated())
    {
        return next();
    }
    else
    {
        res.redirect('/login');
    }
}

module.exports = router;
