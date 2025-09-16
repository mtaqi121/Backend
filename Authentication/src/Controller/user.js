import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/user.js";
const secret = "13253mjbnmbcvbnvcxur76547e3";

const createUser = async (req, res) => {
  var { name, email, password } = req.body;

  const isUserExist = await User.findOne({ email: email });
  if (isUserExist) {
    return res.send({ massege: "User already exist" });
  }
  const saltrounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltrounds);
  const userobj = {
    name,
    email,
    password: hashedPassword,
  };
  await User.create(userobj);
  return res.send({
    message: "User Created Successfully",
    User: userobj,
  });
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const userObj = await User.findOne({ email });
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
const getAllUsers = async (_, res) => {
  const AllUser = await User.find({});
  return res.send({
    AllUser,
  });
};
export { createUser, loginUser, getAllUsers };
