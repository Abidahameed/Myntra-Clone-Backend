const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
const app = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(
    cors({
            origin:"*",
        })
);

const PORT = process.env.PORT||5000;

//const mobOtp_routes = require("./Routes/otpRoute");
const product_routes = require("./Routes/products");
const user_routes = require("./Routes/user");
const cart_routes = require("./Routes/cart");
const category_routes = require("./Routes/category");
const order_routes = require("./Routes/order");
const section_routes = require("./Routes/section");
const sub_category_routes = require("./Routes/sub_category");
const brand_routes = require("./Routes/brand");
const wishList_routes = require("./Routes/wishList");




app.get("/",(req,res)=>{
    res.send("HIII WELCOME TO PORT 5000");
});

//app.use("/api/otp", mobOtp_routes);

app.use("/api/products", product_routes);
app.use("/api/user",user_routes);  
app.use("/api/cart",cart_routes);
app.use("/api/category",category_routes);
app.use("/api/orders",order_routes);
app.use("/api/section",section_routes);
app.use("/api/subCategory",sub_category_routes);
app.use("/api/brand",brand_routes);
app.use("/api/WishList",wishList_routes);




const start = async()=>{
    try{ 
        await connectDB(); 
        app.listen(PORT,()=>
             {
    console.log(`${PORT} connected`);
              });
}
catch(error){
    console.log(error);
           }
      };
      start();

