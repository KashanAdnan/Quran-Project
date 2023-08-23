import {
    Logout,
    getAllUsers,
    getSingleUser,
    getUserDeteails,
    loginUser,
    registerUser,
    updateUser,
    DeleteUser
} from "../controllers/user.controller.mjs";
import express from "express";
import {
    isAuthenticateUser
} from "../middleware/authentication.mjs";
const UserRoute = express.Router();


UserRoute.post("/register", registerUser)

UserRoute.post("/login", loginUser)

UserRoute.get("/logout", Logout)

UserRoute.put("/user", isAuthenticateUser, updateUser)

UserRoute.get("/me", isAuthenticateUser, getUserDeteails)

UserRoute.get("/users", getAllUsers)

UserRoute.get("/user/:id", getSingleUser)

UserRoute.delete("/user/:id", DeleteUser)


export {
    UserRoute
}