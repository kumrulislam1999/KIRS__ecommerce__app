import express from "express";

/* ==== Import Controller ==== */
import {  forgetPasswordController, loginController, registerController, testController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";



/* ==== Router Object ==== */

const router = express.Router();



/* ==== Routing ==== */


/* ==== Register Method || Post ==== */

router.post("/register", registerController);

/* ===== Login Method || Post ===== */
router.post("/login", loginController);


/* ==== Forget Password || Post ===== */
router.post("/forget-password", forgetPasswordController);

/* ==== Protected Route ==== */
router.get("/test", requireSignIn,isAdmin, testController);


/* ===== Auth User Protected Route ====== */
router.get("/user-auth", requireSignIn ,(req, res) => {
    res.status(200).send({
        ok : true,
    });
});


/* =====  Auth Admin Protected Route ====== */
router.get("/admin-auth", requireSignIn, isAdmin ,(req, res) => {
    res.status(200).send({
        ok : true,
    });
});



export default router;