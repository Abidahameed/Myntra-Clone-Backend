const category = require("../Models/category");

const postcategory = async (req,res)=>
{
    try{

        const data = await category.findOne({Name:req.body.Name,section:req.body.section}).then(async data =>{
       if(data!=null){
            res.send("THIS CATEGORY IS ALREADY EXISTS ");
      }
      else{
        const success = await category.create(req.body)
        res.status(200).json({success});
                  
      }
})

   }
   catch(error){
     
    res.send(error.message);
   }
}


const viewcategory = async(req,res)=>
{

const data = await category.find();
res.send(data);

}

const updatecategory= async(req,res)=>
      {
          try{
          const id = req.query.id;
          const updates = req.body;
          const prdimg = await category.findOne({Name:req.body.Name,section:req.body.section}).then(async prdimg =>{
            
              if(prdimg!=null){
              
              res.send("THIS CATEGORY NAME IS ALREADY EXISTING ,USE A DIFFERENT ONE");
                   }
        else{
          
          const MyData = await category.findByIdAndUpdate(id,updates) ;
          res.status(200).json({MyData});
           }
         
          })
      
      }
          catch(error){
              res.send(error.message);
          }



      };
      const deletecategory= async(req,res)=>
        {
            try{
            const id = req.query.id;
            const MyData = await category.findByIdAndDelete(id) ;
            res.status(200).json({MyData});
            }
            catch(error){
                res.send(error.message);
            }
        };
      
                     


module.exports = {postcategory,viewcategory,updatecategory,deletecategory};

