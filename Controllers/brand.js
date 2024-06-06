const brand= require("../Models/brand");

const postbrand = async (req,res)=>
{
    try{

        const data = await brand.findOne({Name:req.body.Name}).then(async data =>{
       if(data!=null){
            res.send("THIS BRAND IS ALREADY EXISTS ");
      }
      else{
        const success = await brand.create(req.body)
        res.status(200).json({success});
                  
      }
})

   }
   catch(error){
     
    res.send(error.message);
   }
}


const viewbrand = async(req,res)=>
{

const data = await brand.find();
res.send(data);

}

const updatebrand= async(req,res)=>
      {
          try{
          const id = req.query.id;
          const updates = req.body;
          const data= await brand.findOne({Name:req.body.Name}).then(async data=>{
            
              if(data!=null){
              
              res.send("THIS BRAND iS ALREADY EXISTING ,USE A DIFFERENT ONE");
                   }
        else{
          
          const MyData = await brand.findByIdAndUpdate(id,updates) ;
          res.status(200).json({MyData});
           }
         
          })
      
      }
          catch(error){
              res.send(error.message);
          }



      };
      const deletebrand= async(req,res)=>
        {
            try{
            const id = req.query.id;
            const MyData = await brand.findByIdAndDelete(id) ;
            res.status(200).json({MyData});
            }
            catch(error){
                res.send(error.message);
            }
        };
                     


module.exports = {postbrand,viewbrand,updatebrand,deletebrand};

