const contactModel = require("../Models/contact")


const contactInsert = async (req,res)=>{
    try{
        const {name, email, message} = req.body
    const contact = new contactModel({
        name,
        email,
        message
    })
     await contact.save()
    res.status(200).json({message:"message send successfully",success:true})
    } catch(err){
         res.status(400).json({message:"message not send",success:false , error: err})
    }


}

module.exports = {contactInsert}