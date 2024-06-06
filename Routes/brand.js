const express = require("express");
const router = express.Router();
const brnd = {postbrand,viewbrand,updatebrand,deletebrand}=require("../Controllers/brand");
 router.post("/",brnd.postbrand)
 router.get("/view",brnd.viewbrand)
 router.put("/update",brnd.updatebrand)
 router.delete("/delete",brnd.deletebrand)

 

module.exports = router;
