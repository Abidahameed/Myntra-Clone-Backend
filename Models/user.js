const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {

           Name:{
            type : String ,
            required : true 
           } ,
        
           Email:{
            type: String,
            required : [true,"must be provided"]
           },
        
           Password:{
            type : String,
            required : true
           },
           
           PhoneNumber:{
            type:String,
            required: true
           },

           Login:{
            type:Number,
            required: true
           }

    }
)

module.exports= mongoose.model("User",userSchema);


