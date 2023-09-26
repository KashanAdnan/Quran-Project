import express from "express";
import mongoose from "mongoose";
import userModel from "./models/userModel.mjs"
import cors from "cors"
import cookieParser from "cookie-parser";
import "./setupEnv.mjs"
import { hashPassword, comparePassword } from "./helpers/auth.mjs"
import connectDatabase from "./DB/connectDB.mjs"
import jwt from 'jsonwebtoken'

connectDatabase(process.env.MONGODB_URI)
const app = express()
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

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
    try {
        const { name, email, phone, password } = req.body;
        if (!name) {
            res.status(430).send({ error: `Please Fill Name` })
        }
        if (!phone) {
            res.status(430).send({ error: `Please Fill Phone` })
        }
        if (password < 6) {
            res.status(430).send({ error: `Please ` })
        }
        const data = await userModel.findOne({ email })
        if (data) {
            res.status(430).send({ error: `Email Already Exits !` })
        }
        const hashPasswords = await hashPassword(password)
        const user = await userModel.create({
            name,
            phone,
            email,
            password: hashPasswords,
        });
        res.status(200).send({
            sucess: true,
            user
        })
    } catch (error) {

    }
})
app.post("/api/v1/login", async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (!user) {
        return res.send({
            error: "No user found"
        })
    }
    const matchPassword = comparePassword(password, user.password)
    if (matchPassword) {
        jwt.sign({ name: user.name, email: user.email, phone: user.phone, id: user._id }, process.env.JWT_SECRET, {}, (err, token) => {
            if (err) {
                throw err
            }
            console.log(token);
            res.cookie(' token', token, { expires: new Date(Date.now() + 9999999), httpOnly: false }).send({ user, token })
        })
    }
    if (!matchPassword) {

        res.status(200).send({
            message: "Password Do Not Matched"
        })
    }
})

app.get("/api/v1/profile", (req, res) => {
    const token = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) {
                throw err
            }

            res.json(user)
        })
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server is Running http://localhost:${process.env.PORT}`);
})