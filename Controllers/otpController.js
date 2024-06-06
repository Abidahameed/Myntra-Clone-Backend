const otpMdl= require("../Models/otpModel");
const otpGenerator = require ('otp-generator');
const twilio= require ('twilio');
const AccountSID = "ACcfc6f04d51fff3f7a3d99b02943902bb "
const AuthToken = "93418bfaeac952d0575587565fc32ddf "
const emitter = require('events').EventEmitter.prototype._maxListeners = 100;
 
const twilioClient = new twilio (AccountSID,AuthToken);

const sendOtp = async (req,res)=>{

try{

 const otp = otpGenerator.generate(6, {upperCaseAlphabets: false, 
 lowerCaseAlphabets:false,specialChars:false})
         
 const data =  await otpMdl.findOne({PhoneNumber:req.body.PhoneNumber}).then( async data =>
     {

    if(data!=null)
         {
            const filter = {PhoneNumber: req.body.PhoneNumber };
            const update = { Otp:otp };    
            const updte = await otpMdl.findOneAndUpdate(filter, update);
            const myphone = +16315764373;
            await twilioClient.messages.create({
                body: `Your OTP is :${otp}`,
                to: `+91${req.body.PhoneNumber}`,
                from: myphone
            });

            res.send("OTP send successfully");
        }

    else
    {
       const otpMdlobj = new  otpMdl({
       PhoneNumber:req.body.PhoneNumber,
       Otp:otp,
       LogStatus:false
                                     })

       const data = await otpMdlobj.save();
       //const Twilio_nmbr = +16315764373;

       await twilioClient.messages.create({
        body: `Your OTP is :${otp}`,
        to: req.body.PhoneNumber,
        from:"+16315764373"
                                  });

        res.send("OTP send successfully");
    }
    
         })

 }              

 catch(error){

    return res.status(400).json({
    success: false,
    msg:error.message
    })
  
            } 
}

module.exports = {sendOtp};

  