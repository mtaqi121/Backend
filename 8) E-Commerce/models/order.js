import mongoose from "mongoose";

const orderschema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enums: ["Pending", "Delivered"],
      required: true,
      default: "Pendind",
    },
  },
  { timeseries: true }
);

export const Order = mongoose.model("order", orderschema);
