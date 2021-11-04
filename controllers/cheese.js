///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const express = require("express");
const Cheese = require("../models/cheese");

///////////////////////////////
// ROUTER
////////////////////////////////
const router = express.Router();

///////////////////////////////
// ROUTES
////////////////////////////////

// Index
router.get('/', async(req, res)=>{
    try{
        res.json(await Cheese.find({}));
    }catch(error){
        res.status(400).json(error)
    }
})

// New - NOT NEEDED FOR API

// Delete
router.delete('/:id', async(req, res)=>{
    try {res.json(await Cheese.findByIdAndRemove(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})

// Update
router.put('/:id', async(req, res)=>{
    try {res.json(await Cheese.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    }catch(error){
        res.status(400).json(error);
    }
})

// Create
router.put('/', async(req, res)=>{
    try{res.json(await Cheese.create(req.body))
    } catch(error){
        res.status(400).json(error)
    }
})

// Edit - NOT NEEDED FOR API

// Show
router.get('/:id', async(req, res)=>{
    try{res.json(await Cheese.findById(req.params.id))
    } catch(error){
        res.status(400).json(error)
    }
})

///////////////////////////////
// EXPORT
////////////////////////////////

module.exports = router;