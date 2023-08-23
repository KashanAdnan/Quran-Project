import {
    UserModel
} from "../models/user.model.mjs"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const registerUser = async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body;
    const User = await UserModel.create({
        name,
        email,
        password,
    });
    const token = jwt.sign({
        id: User._id
    }, process.env.JWTSecret, {
        expiresIn: "5d",
    });
    const option = {
        expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };
    res.status(201).cookie("Token", token, option).json({
        succes: true,
        User,
        token,
    });
}

const loginUser = async (req, res, next) => {
    const {
        email,
        password
    } = req.body;
    if (!email || !password) {
        res.status(400).send({
            message: "Please Enter Email & Password"
        })
    }
    const user = await UserModel.findOne({
        email
    }).select("+password");
    if (!user) {
        res.status(401).send({
            message: "Invalid Email or Password"
        })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        res.status(401).send({
            message: "Invalid email or Password"
        })
    }
    console.log(process.env.JWTSecret);
    const token = jwt.sign({
        id: user._id
    }, process.env.JWTSecret, {
        expiresIn: "5d",
    });
    console.log(token);
    const option = {
        expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };
    res.status(200).cookie("Token", token, option).json({
        succes: true,
        user,
        token,
    });
}

const Logout = async (req, res, next) => {
    res.cookie("Token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        succes: true,
        message: "Logout Succesfull",
    });
}

const updateUser = async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    };

    const user = await UserModel.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
    });
}

const getUserDeteails = async (req, res, next) => {
    const user = await UserModel.findById(req.user.id);
    res.status(200).json({
        success: true,
        user,
    });
}

const getAllUsers = async (req, res, next) => {
    const users = await UserModel.find();
    res.status(200).json({
        succes: true,
        users,
    });
}

const getSingleUser = async (req, res, next) => {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
        return next(
            res.status(400).send({
                message: `User Doesnot Exits with ID : ${req.params.id}`
            })
        );
    }
    res.status(200).json({
        succes: true,
        user,
    });
}

const DeleteUser = async (req, res, next) => {
    const user = await UserModel.findById(req.params.id).select("+password");
    console.log(user);
    if (!user) {
        res.status(400).send({
            message: `User Doesnot Exits with ID : ${req.params.id}`
        })
    }
    await user.remove();
    res.status(200).json({
        succes: true,
        user,
    });
}

const updatePassword = async (req, res, next) => {
    const user = await UserModel.findById(req.user.id).select("+password");
    const isPasswordMatch = await user.comparePassword(req.body.oldPassword);
    if (!isPasswordMatch) {
        res.status(401).send({
            message: "Old Password is Incorrect"
        })
    }
    if (req.body.newPassword !== req.body.confirmPassword) {
        res.status(401).send({
            message: "Password Doesn't Match"
        })
    }
    user.password = req.body.newPassword;
    await user.save();
    const token = jwt.sign({
        id: user._id
    }, process.env.JWTSecret, {
        expiresIn: "5d",
    });
    const option = {
        expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };
    res.status(201).cookie("Token", token, option).json({
        succes: true,
        user,
        token,
    });
}

export {
    registerUser,
    Logout,
    updateUser,
    loginUser,
    getUserDeteails,
    getAllUsers,
    getSingleUser,
    DeleteUser,
    updatePassword
}