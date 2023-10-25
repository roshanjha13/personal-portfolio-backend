const userModel = require("../models/userModel")

exports.login =async(req,res) =>{
    try {
        const {username,password} = req.body
        const user = await userModel.findOne({username,password})      
        user.password=""
        if(user){
            res.status(200).send({
                data : user,
                success:true,
                message:"Login Sucessfully"
            })
        }else {
            res.status(400).send({
                data : user,
                success:false,
                message:"Invalid credentials"
            })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}