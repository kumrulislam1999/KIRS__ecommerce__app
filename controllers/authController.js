import userModel from "../models/userModel.js";
import {  comparePassword, hashPassword } from "../helpers/authHelper.js";
import jwt from "jsonwebtoken";

/* ===== Start Register Controler Here ====== */
export const registerController = async (req, res) => {

    try {
        const {name, email, phone, password, address, answer,username} = req.body;


        /* ===== Start Validations Here ===== */
        if(!name) {
            return res.status(400).send({
                message : "Name is Required",
            })
        }
        if(!email) {
            return res.status(400).send({
                message : "Email is Required",
            })
        }
        if(!username) {
            return res.status(400).send({
                message : "Username is Required",
            })
        }
        if(!password) {
            return res.status(400).send({
                message : "Password is Required",
            })
        }
        if(!phone) {
            return res.status(400).send({
                message : "Phone is Required",
            })
        }
        if(!address) {
            return res.status(400).send({
                message : "Address is Required",
            })
        }
        if(!answer) {
            return res.status(400).send({
                message : "Answer is Required",
            })
        }
        /* ===== End Validations Here ===== */
    
    
        /* ===== Start Check User Here ====== */
            /* === Check User === */
            const existingUser = await userModel.findOne({email});
    
            /* ==== Existing User ==== */
    
            if(existingUser){
                return res.status(200).send({
                    success :false,
                    message : "Already Register. Please Login",
                })
            }
        /* ===== End Check Existion User Here ===== */
    
        /* ==== Start Hash Password Here ==== */
        const hashedPassword = await hashPassword(password);
    
        /* ==== Register User ==== */
        const user = await new userModel({name, email, phone, address, answer,username, password: hashedPassword}).save();
    
        res.status(201).send({
            success: true,
            message : "User Registered Successfully",
            user,
        })        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success :false,
            message : "Error in Register Controller",
            error
        });
    }

}
/* ===== End Register Controller Here ===== */

/* ===== Start Login Controler Here ===== */
export const loginController = async(req, res) => {
    try {
        const {email, password} = req.body;

        /* ====== Validations ====== */

        if(!email || !password){
            return res.status(400).send({
                success : false,
                message : "Invalid Email Or Password",
            })
        }

        /* ==== Check User ===== */

        const user = await userModel.findOne({email });

        if(!user) {
            return res.status(404).send({
                success : false,
                message : "Email is not Registered",
            })
        }

        const match = await comparePassword(password, user.password);

        if(!match) {
            return res.status(200).send({
                success :false,
                message : "Invalid Password",
            })
        }
        /* ===== Create Token ==== */
        const token = await jwt.sign({_id : user._id}, process.env.JWT__SECRET, {expiresIn : "7d"});

        res.status(200).send({
            success: true,
            message : "Login Successfully",
            user : {
                _id : user._id,
                name : user.name,
                email : user.email,
                phone : user.phone,
                address : user.address,
                role : user.role,
            },
            token,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success :false,
            message : "Error in Login Controller",
            error,
        })
    }
}
/* ===== End Login Controller Here ====== */



/* ===== Start ForgetPassword Controller Here ===== */
export const forgetPasswordController = async (req, res) => {
    try {
        const {email, answer, newPassword, confirmPassword} = req.body;

        /* ===== Validations  ===== */
        if(!email){
            return res.status(400).send({
                success : false,
                message : "Email is Required",
            });
        }
        if(!answer){
            return res.status(400).send({
                success : false,
                message : "Answer is Required",
            });
        }
        if(!newPassword){
            return res.status(400).send({
                success : false,
                message : "New Password is Required",
            });
        }
        if(!confirmPassword){
            return res.status(400).send({
                success : false,
                message : "Confir Password is required",
            });
        }
        if(newPassword  !== confirmPassword){
           return  res.status(200).send({
                    success :false,
                    message : "New Password and Confirm Password not matched"
            });
        }
        /* ==== check user ==== */
        const user = await userModel.findOne({email,answer});
        if(!user){
            return res.status(404).send({
                success : false,
                message : "Wrong Email or Answer",
            });
        }
    
        const hashed = await hashPassword(newPassword);
        await userModel.findByIdAndUpdate(user._id, {password : hashed});
        res.status(200).send({
            success :true,
            message : "Password Reset Successfully",
        })
        

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Forget Password Controller",
            error
        })
    }
}
/* ===== End ForgetPassword Controller Here ===== */



/* ====== Start Test Controller Here ====== */
export const testController = async (req,res) => {
    res.send("Protected Route");
}
/* ====== End Test Controller Here ====== */


