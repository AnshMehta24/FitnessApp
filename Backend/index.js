
require('dotenv').config();
const express= require("express");
const app= express();
const mongoose = require('mongoose');
app.use(express.json());
const bcrypt = require("bcryptjs")


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


app.listen(5001, ()=>{
console.log("Started The Server");
})














// const express = require("express")
// const app = express();
// const mongoose = require('mongoose');
// let bodyparser = require('body-parser')
// app.use(bodyparser.urlencoded({extended:false}))
// const User = require('./models/User');
// const cors = require('cors');

// mongoose.connect(process.env.MONGO_URI).then(()=>{
//             console.log("DB connected");
//         }).catch(err=> console.log(err.message))


// app.use(cors());
// app.use(express.json())
// app.get('/', (req, res)=>{
//     res.send("Started")
// })

// app.get('/SignUp', async(req, res)=>{
//     const {name, email, password} = req.body;
//     console.log(req.body);

//     const oldUser = await User.findOne({email:email})

//     if(oldUser){
//         return res.send({data:"user already exist"})
//     }

//     try {
//         await User.create({
//             name : name,
//             email:email,
//             password:password
//         })
//         res.send({status : "okay", data:"User created"})
//     } catch (error) {
//         res.send({status:"Error", data: error.message})
//     }
// })
// app.listen(8000,()=>{
//     console.log("Gotit 8000 ");
// })


