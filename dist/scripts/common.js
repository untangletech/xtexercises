var express=require("express"),router=express.Router();router.get("/",function(e,r,t){r.render("index",{title:"testing"})}),module.exports=router;