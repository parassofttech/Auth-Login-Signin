const express = require("express");
const ensureAuthenticated = require("../Middlewares/Auth");


const productRouter = express.Router();

productRouter.get("/",ensureAuthenticated,(req,res)=>{
    console.log('----loged in user detail----',req.user);
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 20000
        },
    ])
});


module.exports = productRouter;