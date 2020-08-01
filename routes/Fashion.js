var express             = require("express"),
    router              = express.Router({mergeParams:true}),
    User                = require('../models/User'),
    product_categories  = require('../load-categories'),
    Item                = require('../models/Item'),
    Cart                = require('../models/Cart'),
    UserDetail          = require("../models/UserDetail")




router.get('/',function (req,res)
{
    Item.find({},function (err,item)
    {
        if (err)
        {
            console.log(err)
        }
        else
        {
            res.render('Fashion',{items:item})
        }
    })
})



router.get('/add-to-cart/:id',isLoggedIn,function (req,res)
{
    var id = req.params.id;
    // console.log('username is =====',req.user.username);
    // console.log(req.user,currentUser);
    User.find(
        {username:req.user.username},function (err,foundUser)
        {
        if(err)
        {
            console.log(err);
        }
        else
        {
            Item.findById(id,"name price desc image" ,function (err, foundItem)
            {
                if (err)
                {
                    console.log(err);
                }
                else
                {
                    Cart.create({
                            name:foundItem.name,
                            price:foundItem.price,
                            desc:foundItem.desc,
                            image:foundItem.image
                    },function (err,cart)
                    {
                    if(err)
                    {
                        console.log(err);
                    }
                    else
                    {
                        console.log(foundUser[0],'asdfljafj');
                        foundUser[0].carts.push(cart)
                        foundUser[0].save(function (err,data)
                        {
                        if(err)
                        {
                            console.log(err)
                        }
                        else
                        {

                            // console.log("the final",data)
                            res.redirect(`/user/${req.user.username}/cart`);
                            // res.redirect(`/user/${foundUser[0].username}/cart`);
                        }
                     })
                    }
                })
                }

            })
        }
    })
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
