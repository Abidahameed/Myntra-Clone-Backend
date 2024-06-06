const mongoose = require("mongoose");
const brandSchema = new mongoose.Schema(
    {
        Name: {
            type :String,
            required:true
        
        },
        
        Image: {
            type :String,
            required:true
        
        }
    }
)
module.exports=mongoose.model("brand",brandSchema);
