const section= require("../Models/section");

const postsection = async (req,res)=>
{
    try{

        const postdata = await section.findOne({Name:req.body.Name}).then(async postdata =>{
       if(postdata!=null){
            res.send("THIS SECTION IS ALREADY EXISTS ");
      }
      else{
              const success = await section.create(req.body)
              res.status(200).json({success});
                  
      }
})

   }
   catch(error){
     
    res.send(error.message);
   }
}


const viewsection = async(req,res)=>
{

const data = await section.find();
res.send(data);

}

const updatesection= async(req,res)=>
      {
          try{
          const id = req.query.id;
          const updates = req.body;
          const data= await section.findOne({Name:req.body.Name}).then(async data=>{
            
              if(data!=null){
              
              res.send("THIS SECTION iS ALREADY EXISTING ,USE A DIFFERENT ONE");
                   }
        else{
          
          const MyData = await section.findByIdAndUpdate(id,updates) ;
          res.status(200).json({MyData});
           }
         
          })
      
      }
          catch(error){
              res.send(error.message);
          }



      };
      
      const deletesection= async(req,res)=>
        {
            try{
            const id = req.query.id;
            const MyData = await section.findByIdAndDelete(id) ;
            res.status(200).json({MyData});
            }
            catch(error){
                res.send(error.message);
            }
        };
                     


module.exports = {postsection,viewsection,updatesection,deletesection};

