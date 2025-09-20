import Todo from "../Models/Todo.js";

const addTodo = async(req, res) => {
  const { name, age } = req.body;
  const newRecord = {
    name,
    age,
  };
  await Todo.create(newRecord);
  return res.send({ message: "Todo saved successfully" });
};
const deleteTodo = async(req, res) => {
  var id = req.query.id;
  await Todo.findByIdAndDelete(id);
  return res.send({ message: "Todo Deleted Successfully" });
};
const getAllTodo = async (_, res) => {
  const AllTodos = await Todo.find({});

  return res.send({ AllTodos, message: "All todos Fetched Successfully" });
};

const updateTodo = async(req, res) => {
  const { id , name , age}= req.body;
 await Todo.findByIdAndUpdate(id , {
  name,
  age
 });
 return res.send ({
  message : "Todo Updated Successfully" 
 });
};

export { addTodo, deleteTodo, getAllTodo, updateTodo };
