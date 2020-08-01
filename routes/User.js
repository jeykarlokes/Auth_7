var express             = require("express"),
    router              = express.Router({mergeParams:true}),
    User         = require('../models/User'),
    product_categories  = require('../load-categories'),
    Cart                = require('../models/Cart'),
    UserDetail          = require("../models/UserDetail")



router.get('/cart', isLoggedIn, function (req,res)
{
    var name = req.params.name;
    console.log(name);
    User.find({username:name}).populate('carts').exec(function(err,found_cart_items)
    {
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(found_cart_items)
            var carts = found_cart_items[0].carts;
            var name = found_cart_items[0].username;
            res.render("Cart",{cart_items:carts,name:name});
        }
    })

});


router.get('/address/',isLoggedIn,function (req,res)
{
    
})


router.get('/address/new',isLoggedIn,function (req,res)
{
    res.render('Address',{name:req.user.username});
})


router.post('/address',isLoggedIn, function (req,res)
{
    // console.log(req.body);


    User.find({username:req.user.username},function (err,foundUser)
    {
        if (err)
        {
            console.log(err);
        }
        else
        {
            // console.log(foundUser)
            const {Name,Address,phone,city,country} = req.body;
            UserDetail.create({name:Name,address:Address,
            phone:phone,city:city,country:country},function (err,userdetails)
            {
                if (err)
                {
                    console.log(err);
                }
                else{
                    console.log(foundUser)
                    foundUser[0].userdetails.push(userdetails);
                    foundUser[0].save(function (err,foundUser)
                    {
                        if(err)
                        {
                            console.log(err)
                        }
                        else
                        {
                            console.log('address added successfully');
                        }
                    })
                }
            })
        }

    })
});



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
