const express = require("express");
const router = express.Router();
const {PostAllUser, GetAllUser, GetLogin,Logout, deleteUser} = require("../Controllers/user");


router.route("/").post(PostAllUser);
router.route("/allusers").get(GetAllUser);
router.route("/userlogin").post(GetLogin);
router.route("/userlogout").put(Logout);
router.route("/removeuser").delete(deleteUser);


 module.exports = router;
