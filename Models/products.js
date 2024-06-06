const mongoose  = require("mongoose");
const productSchema = new mongoose.Schema({
  
    Name :{
    type : String ,
    required : [true,"must be provided"]
   } ,

   Sub_Name:{
      type: String,
      required:true   
   },

  Section:{
    type: String,
    required:[true,"must be provided"]
   },

  Brand :{
    type : String ,
    required : [true,"must be provided"]
   } ,

   Price:{
    type: Number,
    required : [true,"must be provided"]
   },

   Category:{
    type : String,
    required : [true,"must be provided"]
   },

    Sub_category :{
    type : String ,
    required : [true,"must be provided"]
   } ,
   
   Size:{
    type : String,
    required : [true,"must be provided"]
   },  

   Colour:{
    type : String,
    required : [true,"must be provided"]
   },  

   Availability:{
    type : Number,
    required : [true,"must be provided"]
   }  ,

     Image:{
    type : String,
    required : [true,"must be provided"]
   } 

})

module.exports= mongoose.model("product",productSchema);
