import mongoose from 'mongoose'
const usermodel = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,

    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true  
    },
    profilephoto:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:['Male', 'female' , 'Gay'],
        required:true
    }
} , {timestamps:true})
const User = mongoose.model('User', usermodel)

export default User


