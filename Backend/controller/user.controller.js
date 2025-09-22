import User from "../model/user.model.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

const updateUser = asyncHandler(async (req, res) => {
  if (req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  if (!updatedUser) {
    res.status(400);
    throw new Error("User was not updated");
  } else {
    res.status(201).json(updatedUser);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  if (!deleteUser) {
    res.status(400);
    throw new Error("User was not deleted successfully");
  } else {
    res.status(201).json("User was deleted successfully");
  }
});

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User Was not Found");
  } else {
    res.status(200).json(user);
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  if (!users) {
    res.status(400);
    throw new Error("there is no user to be Found");
  } else {
    res.status(200).json(users);
  }
});

export { getUser, getUsers, deleteUser, updateUser };
