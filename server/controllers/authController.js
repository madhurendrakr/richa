// import express from 'express'
import mongoose from "mongoose";
import { User } from "../models/userModel.js";

export const register = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "Bad Request" });
  }
  const { name, email, password,phonenumber } = req.body;
  const exUser = await User.findOne({ email });
  console.log(exUser);
  if (exUser !== null) {
    return res.status(400).json({ error: "Email already exists" });
  }
  const newUser = await User.create({ name, email, phonenumber,password });
  return res.status(201).json({ message: "User Created", data: newUser });
};

export const login = async (req, res) => {
  if (req.method !== "POST")
    return res.status(400).json({ error: "Bad Request" });
  const { email, password } = req.body;
  const exUser = await User.findOne({ email });
  if (exUser === null) return res.status(404).json({ error: "User Not Found" });
  if (exUser.password !== password)
    return res.status(404).json({ error: "Password do not match" });
  res.status(200).json({ message: "You are the one", data: exUser });
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) return res.status(200).json({ error: "Users not found" });
    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(200).json({ error: "Users not found" });
  }
};
