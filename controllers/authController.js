const User=require("../models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

exports.register=async(req,res)=>{

try{

const {name,email,password}=req.body;

const existingUser=
await User.findOne({email});

if(existingUser){

return res.status(400).json({

message:"Email already registered"

});

}

const hashedPassword=
await bcrypt.hash(password,10);

await User.create({

name,
email,
password:hashedPassword,
role:req.body.role || "user"

});

res.status(201).json({

message:"Registration Successful 🎉"

});

}catch(error){

res.status(500).json({

message:"Server Error"

});

}

};

exports.login=async(req,res)=>{

try{

const {email,password}=req.body;

const user=
await User.findOne({email});

if(!user){

return res.status(404).json({

message:"Email not registered"

});

}

const isMatch=
await bcrypt.compare(
password,
user.password
);

if(!isMatch){

return res.status(400).json({

message:"Incorrect Password"

});

}

const token=jwt.sign(

{
id:user._id,
role:user.role
},

process.env.JWT_SECRET,

{
expiresIn:"1d"
}

);

res.json({

message:"Login Successful 🚀",
token

});

}catch(error){

res.status(500).json({

message:"Server Error"

});

}

};