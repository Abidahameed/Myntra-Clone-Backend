const mongoose = require("mongoose");
const otpSchema = new mongoose.Schema(
   
    {
           PhoneNumber:{
            type : String,
            required : true
           },
           
           Otp:{
            type : Number,
            required : true
           },

           LogStatus:{
            type: String,
            required:true
           }

    }
)

module.exports= mongoose.model("Otp",otpSchema);
