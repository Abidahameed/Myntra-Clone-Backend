const mongoose = require("mongoose");
const {Schema} = mongoose;

const orderSchema = new mongoose.Schema(
    { 

        user_Id:{type:Schema.Types.ObjectId , ref:'User'},
        
           products_Id:{type:Schema.Types.ObjectId, ref:'product'},

           quantity: {
            type:Number,
            required: true
           },

           subtotal:{
            type:Number,
            required:true
           }


    });
   
   module.exports= mongoose.model("order",orderSchema);
