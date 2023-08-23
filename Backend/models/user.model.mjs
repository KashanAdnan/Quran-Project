import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
const JWTSecret = process.env.JWTSecret;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Name"],
        maxLenght: [30, "Name cann't exceed 30 characters"],
        minLenght: [4, "Name Should have more than 4 characters"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a Valid Email"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Password"],
        minLenght: [8, "Password Should have greater than 8 characters"],
        select: false,
    },
}, {
    timestamps: true
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

const UserModel = mongoose.model("Users wasif", UserSchema);
export {
    UserModel
};