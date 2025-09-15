import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        required : true,
        type: String,
    },
    email: {
        required : true,
        Type:String,
        unique :true,
    },
    password: {
        required : true,
        type: String,
    },
    createdAt:{
        type:Date,
        default : Date.now
    },
});

const User = mongoose.model("user",UserSchema);
export default User;
