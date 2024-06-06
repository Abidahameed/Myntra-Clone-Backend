const express = require("express");
const router = express.Router();
const ctrgry = {postcategory,viewcategory,updatecategory,deletecategory}=require("../Controllers/category");
 router.post("/",ctrgry.postcategory)
 router.get("/view",ctrgry.viewcategory)
 router.put("/update",ctrgry.postcategory)
 router.delete("/delete",ctrgry.deletecategory)


module.exports = router;
