import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const secret = "13253mjbnmbcvbnvcxur76547e3";

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
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const userObj = users.find((obj) => obj.email === email);
  if (!userObj) {
    return res.send({
      message: "User Not Found",
    });
  }

  const passwordMathed = await bcrypt.compare(password, userObj.password);
  if (!passwordMathed) {
    return res.send({
      message: "Invalid Password",
    });
  }
  const payload = {
    id: userObj?.id,
    email: userObj?.email,
  };
  const token = jwt.sign(payload, secret, { expiresIn: "1d" });
  if (token) {
    return res.send({
      token,
      message: "Login Successful",
    });
  }
};
const getAllUsers = (_, res) => {
  res.send(users);
};
export { createUser, loginUser, getAllUsers };
