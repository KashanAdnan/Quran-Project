import express from "express";
import mongoose from "mongoose";
import userModel from "./models/userModel.mjs"
import cors from "cors"
import "./setupEnv.mjs"
import connectDatabase from "./DB/connectDB.mjs"

connectDatabase(process.env.MONGODB_URI)
const app = express()

app.use(cors({ origin: "*" }))
app.use(express.json())

app.get("/api/v1/users", async (req, res) => {
    const allUsers = await userModel.find({});
    res.status(200).send({
        sucess: true,
        allUsers
    })
})
app.post("/api/v1/register", async (req, res) => {
    const user = await userModel.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
    });
    res.status(200).send({
        sucess: true,
        user
    })
})
app.post("/api/v1/login", async (req, res) => {
    const user = await userModel.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
    });
    res.status(200).send({
        sucess: true,
        user
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is Running http://localhost:${process.env.PORT}`);
})