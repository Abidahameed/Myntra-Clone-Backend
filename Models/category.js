const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
    {
        Name: {
            type :String,
            required:true
        
        },
          image:{
            type: String,
            required:true
        },
        section:{
            type: String,
            required:true,
    }
}
)
module.exports=mongoose.model("category",categorySchema);
