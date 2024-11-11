import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
/* ====== Protected Route ====== */
/* ==== signIn Middleware ==== */
export const requireSignIn = async (req, res, next) => {
    try {
        const decode = await jwt.verify(req.headers.authorization, process.env.JWT__SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
}

/* ==== Admin Middleware ==== */
export const isAdmin = async (req, res, next) => {
    try {

        const user = await userModel.findById(req.user._id);

        if(user.role !== 1){
            return res.status(401).send({
                success : false,
                message : "UnAuthorized Access",
            })
        }else{
            next();
        }
        
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success : false,
            message : "Error in Admin Middleware",
            error,
        })
    }
}