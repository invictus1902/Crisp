import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    passwordHesh:{
        type:String,
        required:true
    },
    avatarUrl:String

},
    {timestamps:true})

export default mongoose.model('User', UserSchema);