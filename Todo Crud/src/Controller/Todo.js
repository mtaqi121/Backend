let todos = [];

const addTodo = (req, res) => {
  const { name, age } = req.body;
  todos.push({ name, age, id: Date.now() });
  return res.send({ massage: "Todo saved successfully" });
};
const deleteTodo = (req, res) => {
    var id =req.params.id;
   var filterTodos = todos.filter((obj) => obj.id != id)
    todos = filterTodos;
    return res.send ({message:"Todo Deleted Successfully"});
};
const getAllTodo = (req, res) => {
  return res.send({ todos, message: "All todos Fetched Successfully" });
};
const updateTodo = (req, res) => {};

export { addTodo, deleteTodo, getAllTodo, updateTodo };
