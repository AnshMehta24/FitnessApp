const mongoose = require('mongoose');


const UserDetailSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
}, {
    collection:"UserInfo"
})

mongoose.model("UserInfo", UserDetailSchema)


// const userSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required: true,
//         unique: true,
//     },
//     password:{
//         type:String,
//         required : true,
//     }
// }, {
//     collection : "UserInfo"
// })
// module.exports =mongoose.model('User', userSchema)
// // mongoose.model("UserInfo", userSchema)

// // userSchema.statics.isThisEmailInUse = async function(email){
// //     if(!email) throw new Error('Invalid Email')
// //   try {
// //     const user = await this.findOne({email})

// //     if(user) return false

// //     return true;
// //   } catch (error) {
// //     console.log('err', err.message);
// //     return false;
// //   }
// // }

// // module.exports =mongoose.model('User', userSchema)