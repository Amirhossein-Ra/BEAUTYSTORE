import Order from "../model/order.model.js";
import asyncHandler from "express-async-handler";

const createOrder = asyncHandler(async (req, res) => {
  const newOrder = Order(req.body);
  const savedOrder = await newOrder.save();

  if (!savedOrder) {
    res.status(400);
    throw new Error("Order was not created");
  } else {
    res.status(201).json(savedOrder);
  }
});
const getUserOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ userId: req.params.id }).reverse();
  if (!orders) {
    res.status(400);
    throw new Error("Order was not found");
  } else {
    res.status(200).json(orders);
  }
});

const updateOrder = asyncHandler(async (req, res) => {
  const updatedOrder = await Order.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  if (!updateOrder) {
    res.status(400);
    throw new Error("Order was not updated");
  } else {
    res.status(201).json(updateOrder);
  }
});

const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  if (!order) {
    res.status(400);
    throw new Error("Order was not deleted successfully");
  } else {
    res.status(200).json(order);
  }
});
const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().reverse();
  if (!orders) {
    res.status(400);
    throw new Error("Order was not found");
  } else {
    res.status(200).json(orders);
  }
});

const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).reverse();
  if (!order) {
    res.status(400);
    throw new Error("Order was not found");
  } else {
    res.status(200).json(orders);
  }
});

export {
  getAllOrders,
  getOrder,
  getUserOrders,
  updateOrder,
  deleteOrder,
  createOrder,
};
