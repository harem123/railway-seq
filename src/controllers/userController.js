const db = require("../../models/index.js");
const userModel = db.user;

const listUsers = async(req,res) =>{  
    try{
      const data = await userModel.findAll()
    console.log(data)
      res.status(200).send(data);
      }
      catch (error) {
        console.log(error)
        res.status(500).send({status:"FAILED"});
      } 
}

module.exports = {
listUsers
}