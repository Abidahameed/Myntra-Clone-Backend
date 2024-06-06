const express = require("express");
const router = express.Router();

const prdct= {postAllProducts,getAllProducts,deleteproducts,
    getfilteredproducts, updateproducts} = require("../Controllers/products");

router.post("/add",prdct.postAllProducts);
router.get("/",prdct.getAllProducts);
router.delete("/delete",prdct.deleteproducts);
router.get("/filter",prdct.getfilteredproducts);
router.put("/update",prdct.updateproducts);
module.exports= router;   
 
