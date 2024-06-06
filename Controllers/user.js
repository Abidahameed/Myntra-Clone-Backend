const user = require("../Models/user");
const bcrypt = require ("bcrypt");
const PostAllUser = async(req,res)=>
{

 const Mydata =  await user.findOne({PhoneNumber:req.body.PhoneNumber}).then( async Mydata =>
   {
     if(Mydata!= null) {

           res.send (" THIS PHONENUMBER IS ALREADY EXISTING , USE ANOTHER NUMBER");
                       }

     else{
           req.body.Password =  await bcrypt.hash(req.body.Password,10)
          
           const userobj = new user
           ({
               Name:req.body.Name,
               Email:req.body.Email,
               PhoneNumber:req.body.PhoneNumber,
               Password: req.body.Password ,
               Login:1

           })
           const data =  await userobj.save()
           res.status(200).json({data});
         }

   })
         
};



const GetAllUser= async(req,res)=>

{ 
    const MyData = await user.find({}) ;
    res.status(200).json({MyData});

};
  

const GetLogin= async(req,res)=>
{
    
 const MyData = await user.findOne({PhoneNumber:req.body.PhoneNumber}).then(MyData=>
  {
    
    if (MyData!=null)
      
      {
          bcrypt.compare(req.body.Password,MyData.Password).then( async status =>
            {
               if(status)
                {
                  const total = await user.findOneAndUpdate({Phonenumber:req.query.Phonenumber},{$inc:{"Login":+1}},{multi:true});
                   res.status(200).json({MyData});

                 }

                else  
                 {
                    res.send("INCORRECT PASSWORD ");
                 }
            })

      }

    else
      {
          res.send("INCORRECT PHONENUMBER ");
      }
  

})
    

};
const Logout= async(req,res)=>

    { 
       const id = req.query.id
       const total = await user.findByIdAndUpdate(id,{$inc:{"Login":-1}},{multi:true});
         console.log("working");
    
    };
    const deleteUser= async(req,res)=>
      {
          try{
          const id = req.query.id;
          const MyData = await user.findByIdAndDelete(id) ;
          res.status(200).json({MyData});
          }
          catch(error){
              res.send(error.message);
          }
      };


module.exports = {PostAllUser,GetAllUser,GetLogin,Logout,deleteUser};

