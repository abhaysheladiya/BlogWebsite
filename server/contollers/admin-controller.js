const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async(req, res, next) =>{
    try {
        const users = await User.find({}, { password: 0 });
        console.log(users);
        if(!users || users.length === 0){
            return res.status(404).json({ message: "No user Found "});
        }
        return res.status(200).json(users);
        
    } catch (error) {
        next(error);
    }
};

//single user logic
const getUserById = async(req, res)=>{
    try {
        const id = req.params.id;
        const data =  await User.findOne({_id:id }, {password: 0});
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}
//user update logic
const updateUserById = async (req, res) =>{
    try {
        const id= req.params.id;
        const updateUserData =req.body;

        const updatedData = await User.updateOne(
            { _id: id},{ $set: updateUserData, }
        );
        return res.status(200).json(updatedData);
    } catch (error) {
        console.log(error);
        
    }
}

//delete user logic
const deleteUserById = async(req, res)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id: id});
        return res.status(200).json({ message: "User Deleted Successfully"});
    } catch (error) {
        next(error);
    }
}


//getAll contact logic
const getAllContacts = async (req, res)=>{
    try {
        const contacts = await Contact.find();
        console.log(contacts);
        if(!contacts || contacts.length ===0){
            return res.status(404).json({ message: "NO Contacts founds"});
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }

};

//delete contacts logic
const deleteContactById = async(req, res)=>{
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id: id});
        return res.status(200).json({ message: "Contact Deleted Successfully"});
    } catch (error) {
        next(error);
    }
}


module.exports = {getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById};