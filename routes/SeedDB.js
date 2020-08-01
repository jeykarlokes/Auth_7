var express             = require("express"),
    router              = express.Router({mergeParams:true}),
    Master_User         = require('../models/User'),
    product_categories  = require('../load-categories'),
    Cart                = require('../models/Cart'),
    UserDetail          = require("../models/UserDetail"),
    Item                = require("../models/Item"),
    Fashion_items       = require("../sample-items")



router.get('/item',function (req,res)
{
    res.render('S_item');
})

router.post('/item',function (req,res)
{
    Item.create(Fashion_items,function (err,item)
    {
        if (err)
        {
            console.log(err)
        }
        else{
            res.send("SuccessFully Seeded in to DB ");
        }
    })

})

module.exports  = router;