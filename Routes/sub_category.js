const express = require("express");
const router = express.Router();
const subctrgry = {postSub_category,viewSub_category,updateSub_category,deleteSub_category}=require("../Controllers/sub_category");
 router.post("/",subctrgry.postSub_category)
 router.get("/view",subctrgry.viewSub_category)
 router.put("/update",subctrgry.updateSub_category)
 router.delete("/delete",subctrgry.deleteSub_category)

module.exports = router;
