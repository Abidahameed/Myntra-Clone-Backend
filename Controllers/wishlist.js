const List = require("../Models/wishList")

const Postwishlist =async(req,res) =>
  {
     try{
 const emptyvalue = req.query.user_Id;
 if(emptyvalue!=null){
  const item = await List.findOne({user_Id:req.query.user_Id,products_Id:req.query.products_Id}).then( async items=>
    { if(items!=null){
             res.send("THIS PRODUCT IS ALREADY EXISTS IN YOUR WISHLIST");
          
          }
              else{
       const list = await List.create(req.query)
        res.status(200).json({list});

                 }
             })
 }
 else{
  res.send("PLEASE LOGIN/REGISTER");
 }


     }
     catch(error){

      res.send(error.message);
     }
               }



 const GetwishList= async(req,res) =>
   {
const value = req.query.user_Id;
if(value!=null){
  const Items = await List.find({user_Id:req.query.user_Id}).populate({path:'products_Id'});
  res.status(200).json({Items});
    }
    else{
        res.send("YOU ARE NOT LOGGED IN, PLEASE LOGIN/SIGNUP")
    }
   };


const removewishList= async(req,res) =>
  {     
         
  await List.deleteOne({user_Id:req.query.user_Id,products_Id:req.query.products_Id});
         
  };

module.exports ={Postwishlist,GetwishList,removewishList};



