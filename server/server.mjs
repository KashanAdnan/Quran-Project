import express from "express";
import mongoose from "mongoose";
import userModel from "./models/userModel.mjs";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./setupEnv.mjs";
import { hashPassword, comparePassword } from "./helpers/auth.mjs";
import connectDatabase from "./DB/connectDB.mjs";
import jsonwebtoken from "jsonwebtoken";

connectDatabase(process.env.MONGODB_URI);
const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    credentials: true
  })
);

app.use(express.json());

app.get("/api/v1/users", async (req, res) => {
  const allUsers = await userModel.find({});
  res.status(200).send({
    sucess: true,
    allUsers,
  });
});

app.post("/api/v1/register", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    if (!name) {
      res.status(430).send({ error: `Please Fill Name` });
    }
    if (!phone) {
      res.status(430).send({ error: `Please Fill Phone` });
    }
    if (password < 6) {
      res.status(430).send({ error: `Please ` });
    }
    const data = await userModel.findOne({ email });
    if (data) {
      res.status(430).send({ error: `Email Already Exits !` });
    }
    const hashPasswords = await hashPassword(password);
    const user = await userModel.create({
      name,
      phone,
      email,
      password: hashPasswords,
    });
    res.status(200).send({
      sucess: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/v1/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.send({
      error: "No user found",
    });
  }
  const matchPassword = comparePassword(password, user.password);
  if (matchPassword) {
    const token = jsonwebtoken.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.cookie('token', token, { expires: new Date(Date.now() + 600000), httpOnly: true, secure: true, withCredentials: true });
    res.json({ token });
  }
  else {
    res.status(200).send({
      message: "Password Do Not Matched",
    });
  }
});

app.get("/api/v1/profile/:token", (req, res) => {
  const token = req?.params?.token;
  if (token === "undefined") {
    res.status(404).send({
      message: "Token Not Found !"
    })
  } else if (!token) {
    res.status(404).send({
      message: "Token Not Found !"
    })
  }
  else {
    jsonwebtoken.verify(token, process.env.JWT_SECRET, {}, async (err, decodedToken) => {
      if (err) throw err;
      const user = await userModel.findOne({ _id: decodedToken._id });
      res.json(user)
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is Running http://localhost:${process.env.PORT}`);
});
