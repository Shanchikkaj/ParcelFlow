const User = require("../models/User");

//Deleting user
 const deleteUser = async (req,res)=>{
    try{
      await User.findByIDAndDelete(req.params.id);
      res.status(201).json("The user has been deleted sucessfully")
    }catch(error){
        res.status(500).json(error)
    }
};

//Get all users
 const getAllUsers = async(req,res)=>{
   try{
   const users = await User.find.sort({createdAt: -1});
   res.status(200).json(users)
   }catch(error){
    res.status(500).json(error)
   }
};

module.exports = {getAllUsers,deleteUser}
