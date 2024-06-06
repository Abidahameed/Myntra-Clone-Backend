const express = require("express");
const router = express.Router();
const sctn = {postsection,viewsection,updatesection,deletesection}=require("../Controllers/section");
 router.post("/",sctn.postsection)
 router.get("/view",sctn.viewsection)
 router.put("/update",sctn.updatesection)
 router.delete("/delete",sctn.deletesection)

module.exports = router;
