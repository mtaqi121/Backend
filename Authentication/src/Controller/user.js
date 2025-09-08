import bcrypt from "bcrypt";
const users = [];

const createUser = async (req, res) => {
  var { name, email, password } = req.body;

  const isUserExist = users.find((obj) => obj.email === email);
  if (isUserExist) {
    return res.send({ massege: "User already exist" });
  }
  const saltrounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltrounds);
  const userobj = {
    name,
    email,
    password: hashedPassword,
    id: Date.now(),
    Token: "",
  };
  users.push(userobj);
  res.send({ message: "User created successfully", users: userobj });
};
export { createUser };