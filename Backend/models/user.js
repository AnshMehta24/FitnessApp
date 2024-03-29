const mongoose = require('mongoose');


const UserDetailSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
}, {
    collection:"UserInfo"
})

mongoose.model("UserInfo", UserDetailSchema)


