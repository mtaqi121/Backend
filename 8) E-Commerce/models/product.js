import mongoose from "mongoose";

const Productschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 100,
    },
    image: {
      type: String,
    },
    image_id: {
      type: String,
    },
    decsription: {
      type: String,
      required: true,
    },
  },
  { timeseries: true }
);

export const Product = mongoose.model("Product", Productschema);
