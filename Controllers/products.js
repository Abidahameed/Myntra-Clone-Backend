const product = require("../Models/products");
   
const postAllProducts = async(req,res)=>
{  
    try{
        const data = await product.findOne({Name:req.body.Name}).then(async data =>
         {
      
          if(data!=null){

             res.send("THIS PRODUCT NAME IS ALREADY EXISTING ,USE A DIFFERENT ONE");
                         }
          else{

          const MyData = await product.create(req.body)
         res.status(200).json({MyData});
            }
        })
          }           
    catch(error)
    {
        res.send(error.message);
    }    


};




const getAllProducts= async(req,res)=>
{ 
     try{
    const MyData = await product.find({}) ;

    res.status(200).json({MyData});
    }
catch(error){
    res.send(error.message);
}
};



const deleteproducts= async(req,res)=>
{
    try{
    const id = req.query.id;
    const MyData = await product.findByIdAndDelete(id) ;
    res.status(200).json({MyData});
    }
    catch(error){
        res.send(error.message);
    }
};


const getfilteredproducts= async(req,res)=>
{
    try{
    const MyData = await product.find(req.query) ;
    if(MyData!=null){
        res.status(200).json({MyData});

    }
else{
    res.send("NO SUCH PRODUCT IS AVAILABLE")
}
    }
    catch(error){
        res.send(error.message);
    }
};



const updateproducts= async(req,res)=>
{
    try{
    const id = req.query.id;
    const updates = req.body;
    const prdimg = await product.findOne({Name:req.body.Name}).then(async prdimg =>{
      
        if(prdimg!=null){
        
        res.send("THIS PRODUCT NAME IS ALREADY EXISTING ,USE A DIFFERENT ONE");
             }
  else{
    
    const MyData = await product.findByIdAndUpdate(id,updates) ;
    res.status(200).json({MyData});
     }
   
    })

}
    catch(error){
        res.send(error.message);
    }
};


module.exports={postAllProducts,getAllProducts,deleteproducts,getfilteredproducts,updateproducts};
         