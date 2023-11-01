import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:false,
        default:false
    }
})

export const User = mongoose.model('User',UserSchema);