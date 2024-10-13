import mongoose from 'mongoose'

const messagemodel = new mongoose.Schema({
    senderid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    reciverid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    message:{
        type:String,
        required: true
    } 
}, {timestamps:true});

export const Message = mongoose.model('Message' , messagemodel)

