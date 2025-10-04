import { Order } from "../models/order.js";

const createOrder = async (req, res) => {
  try {
    const { user, orderItems, totalPrice } = req.body;
    const NewOrder = new Order({
      user,
      orderItems,
      totalPrice,
    });
    await NewOrder.validate();
    const response = await NewOrder.save();
    res.send({
      Message: `Order Created Succeessfully Here's Your Order Details ${response}`,
    });
  } catch (error) {
    res.send({
      Message: `Can't Create Orders bcz of ${error}`,
    });
  }
};
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.qeury;
    await Order.findByIdAndDelete(id);

    res.send({
      Message: "Order Deleted Successfully",
    });
  } catch (error) {
    res.send({
      Message: `Can't Delete Order bcz of ${error}`,
    });
  }
};
const getAllOrder = async (_, res) => {
  try {
    const AllOrder = await Order.find({})
      .populate("user")
      .populate("orderItems");
    if (AllOrder) {
      res.send({
        Message: "All Orders Fetched",
        Orders: AllOrder,
      });
    }
  } catch (error) {
    res.send({
      Message: `Can't Fethced Orders bcz of ${error}`,
    });
  }
};

export { createOrder, getAllOrder, deleteOrder };
