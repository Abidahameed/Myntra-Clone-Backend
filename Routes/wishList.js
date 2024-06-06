const express = require("express");
const router = express.Router();
const {Postwishlist, GetwishList , removewishList} = require("../Controllers/wishList");

router.route("/").post(Postwishlist);
router.route("/viewWishList").get(GetwishList);
router.route("/deleteWishList").delete(removewishList);

// router.route("/incrmnt").put(IncrmntCartQuantity);
// router.route("/dcrmnt").put(DcrmntCartQuantity);

module.exports = router;
