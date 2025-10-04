import mongoose from "mongoose";

const Userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
      select: false,
    },
  },
  { timeseries: true }
);

export const User = mongoose.model("User", Userschema);
