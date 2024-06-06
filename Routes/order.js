const express = require("express");
const router = express.Router();
const { postorder,  getorder, userorderhistory } = require("../Controllers/order");


router.route("/order").get(getorder);
router.route("/").post(postorder);
router.route("/userorder").get(userorderhistory);

 module.exports = router;
