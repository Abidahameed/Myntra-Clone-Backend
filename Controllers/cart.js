const cart =require("../Models/cart");
const product=require("../Models/products");

const PostCartProducts =async(req,res) =>
  {
     try{
 const emptyvalue = req.query.user_Id;
 if(emptyvalue!=null){
  const item = await cart.findOne({user_Id:req.query.user_Id,products_Id:req.query.products_Id}).then( async items=>
    { if(items!=null){
             res.send("THIS PRODUCT IS ALREADY EXISTS IN CART");
          
          }
              else{

               const prdctdatadata  =  await product.findById(req.query.products_Id).then(async data =>{
                 if(data!=null){
                         if(data.Availability==0){
                             res.send("out of stock")
                         }
                        else{
             
             const prdprice = await product.findById(req.query.products_Id)
             const obj = prdprice.Price;
             
                   const cartobj = new cart({
             
                     user_Id:req.query.user_Id,
                     products_Id:req.query.products_Id,
                      quantity:1,
                      totalprice:obj
             
                   })
               const data =  await cartobj.save();
               res.status(200).json({data});

             
                        }
                 }     
                      })
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



 const GetCart = async(req,res) =>
   {

    const value = req.query.user_Id;
    if(value!=null){
      const Items = await cart.find({user_Id:req.query.user_Id}).populate({path:'products_Id'});
      res.status(200).json({Items});
        }
        else{
            res.send("YOU ARE NOT LOGGED IN, PLEASE LOGIN/SIGNUP")
        }   
   };


const removecartitem = async(req,res) =>
  {     
         
  await cart.deleteOne({user_Id:req.query.user_Id,products_Id:req.query.products_Id});
         
  };
  

module.exports ={PostCartProducts,GetCart,removecartitem};



