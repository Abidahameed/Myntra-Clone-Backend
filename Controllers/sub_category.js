const sub_category = require("../Models/sub_category");

const postSub_category = async (req,res)=>
{
    try{

        const data = await sub_category.findOne(req.body).then(async data =>{
       if(data!=null){
            res.send("THIS SUB_CATEGORY IS ALREADY EXISTS ");
      }
      else{
        const success = await sub_category.create(req.body)
        res.status(200).json({success});
                  
      }
})

   }
   catch(error){
     
    res.send(error.message);
   }
}


const viewSub_category = async(req,res)=>
{

const data = await sub_category.find();
res.send(data);

}

const updateSub_category= async(req,res)=>
      {
          try{
          const id = req.query.id;
          const updates = req.body;
          const data= await sub_category.findOne(req.body).then(async data=>{
            
              if(data!=null){
              
              res.send("THIS SUB_CATEGORY iS ALREADY EXISTING ,USE A DIFFERENT ONE");
                   }
        else{

          const MyData = await sub_category.findByIdAndUpdate(id,updates) ;
          res.status(200).json({MyData});
           }
         
          })
      
      }
          catch(error){
              res.send(error.message);
          }



      };
      
      const deleteSub_category= async(req,res)=>
        {
            try{
            const id = req.query.id;
            const MyData = await sub_category.findByIdAndDelete(id) ;
            res.status(200).json({MyData});
            }
            catch(error){
                res.send(error.message);
            }
        };             


module.exports = {postSub_category,viewSub_category,updateSub_category,deleteSub_category};

