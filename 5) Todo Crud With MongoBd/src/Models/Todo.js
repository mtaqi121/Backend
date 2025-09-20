import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    name: {
        required : true,
        type: String,
    },
    age: {
        required : true,
        type: Number,
    },
    createdAt:{
        type:Date,
        default : Date.now
    },
});

const Todo = mongoose.model("Todo",TodoSchema);
export default Todo;
