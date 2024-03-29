
require('dotenv').config();
const express= require("express");
const app= express();
const mongoose = require('mongoose');
app.use(express.json());
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');


const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt7239329383uhefiuh78ttq3ifi78272jdsds039[]]pou89ywe";

mongoose.connect(process.env.MONGO_URI).then(()=>{
                console.log("DB connected");
            }).catch(err=> console.log(err.message))

require('./models/user')
const User = mongoose.model("UserInfo");
app.get("/",(req , res)=>{
    res.send({status:"Started"})
})


app.post('/signup', async(req, res)=>{
    const {name,email,password} = req.body;
    console.log(req.body);
    const oldUser = await User.findOne({email:email});

    if(oldUser){
        return res.send({data:"User Already Exists"});
    }
    const encryptedPassword = await bcrypt.hash(password,10);

    try {
        await User.create({
            name:name,
            email:email,
            password: encryptedPassword,
        })

        res.send({status:"ok", data:"User Created"});
    } catch (error) {
        res.send({status:"Error", data:error.message});
    }
})

app.post('/signin', async(req , res)=>{
    const {email, password} = req.body;

    const oldUser= await User.findOne({email:email});

    if(!oldUser){
        return res.send({data:"User Doesnt Exist Go Register First!!"})
    }

    if(await bcrypt.compare(password,oldUser.password)){
        const token = jwt.sign({email:oldUser.email}, JWT_SECRET);

        if(res.status(201)){
            return res.send({status:"ok", data:token});
        }else{
            return res.send({error:"error"});
        }
    }
})

app.post('/userdata', async(req, res)=>{
    const {token}= req.body;
    try {
        const user = jwt.verify(token, JWT_SECRET)
        const useremail= user.email;

        User.findOne({email:useremail}).then(data=>{
            return res.send({status:"ok", data:data});
        });
    } catch (error) {
        return res.send({error:"error"});
    }
})

app.listen(5001, ()=>{
console.log("Started The Server");
})

