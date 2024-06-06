const mongoose = require("mongoose");
uri = "mongodb+srv://sreenathnomd:myiRG1BSq8wCiTfa@sampleprojectapi.2doa6ce.mongodb.net/sampleprojectapi?retryWrites=true&w=majority";

const connectDB = ()=>

{
    console.log("DB connected");
    return mongoose.connect(uri);

};

module.exports= connectDB;
 