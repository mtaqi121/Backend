import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  public_url: {
    type: String,
    required: [true, "Please enter url"],
  },

  secure_url: {
    type: String,
    required: [true, "Please enter url"],
  },
});

export const Image = mongoose.model("Image", imageSchema);
