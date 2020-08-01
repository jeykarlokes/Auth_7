var express             = require("express"),
    router              = express.Router({mergeParams:true}),
    Master_User         = require('../models/User'),
    product_categories  = require('../load-categories'),
    UserDetail          = require("../models/UserDetail")



router.get('/',function(req,res)
{
    res.render('Admin.ejs');
})


router.get('/showuser',function(req,res)
{
    Master_User.find({},function(err,user)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.render('ShowUser',{User:user});
        }
    })
})

module.exports = router;