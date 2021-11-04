//////////////////////
// DEPENDENCIES
//////////////////////
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require('dotenv').config();

//////////////////////
// ROUTERS
//////////////////////

const CheeseRouter = require("../controllers/cheese")
const BaseRouter = require("../controllers/base")

//////////////////////
// MIDDLEWARE FUNCTION
//////////////////////
const middleware = (app)=>{
    app.use(morgan("tiny"));
    app.use(express.json());
    app.use(cors());

    app.use('/cheese', CheeseRouter);
    app.use('/', BaseRouter);
}

//////////////////////
// EXPORT
//////////////////////
module.exports = middleware;