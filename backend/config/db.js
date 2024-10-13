import mongoose from "mongoose"
 
const connectDB = async()=>{
    await mongoose.connect(process.env.mongo_uri).then(()=>{
        console.log("database connected")

    }).catch((error)=>{
        console.log(error)
    })
}

export default connectDB;