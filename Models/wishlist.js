const mongoose = require("mongoose");
const {Schema} = mongoose;

const ListSchema = new mongoose.Schema(
    { 

        user_Id:{type:Schema.Types.ObjectId , ref:'User'},
        
           products_Id:{type:Schema.Types.ObjectId, ref:'product'},
           

    });
   
   module.exports= mongoose.model("WishList",ListSchema);
