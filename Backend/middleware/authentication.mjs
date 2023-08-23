import jwt from "jsonwebtoken"
import {
    UserModel
} from "../models/user.model.mjs";
const JWTSecret = process.env.JWTSecret
const isAuthenticateUser = async (req, res, next) => {
    const token = req.cookies.Token;
    console.log(token);
    if (!token) {
        res.status(401).send({
            message: "Please Login to Acess To THIS RESOURCE"
        })
    }else{

        const decodedData = jwt.verify(token, JWTSecret);
        req.user = await UserModel.findById(decodedData.id);
        
        next();
    }
}

export {
    isAuthenticateUser
}