///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const express = require('express');

///////////////////////
// ROUTER
///////////////////////
const router = express.Router();

///////////////////////
// ROUTES
///////////////////////
router.get('/', (req, res)=>{
    res.send("Say Cheese!")
})

///////////////////////
// EXPORT
///////////////////////
module.exports = router