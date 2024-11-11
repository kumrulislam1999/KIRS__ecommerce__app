import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createCategoryController, getAllCategoryController, getSignleCategoryController, updateCategoryController, deleteCategoryController } from "../controllers/categoryController.js";

/* ===== Router Object ===== */
const router = express.Router();


/* ===== All Routes ===== */

/* ==== Create Category || Post ===== */
router.post("/create-category", requireSignIn, isAdmin, createCategoryController);

/* ==== Update Category || Put ===== */
router.put("/update-category/:id", requireSignIn, isAdmin, updateCategoryController);


/* ==== Update Category || Put ===== */
router.put("/get-all-category", getAllCategoryController);

/* ==== Get All Category || Get ===== */
router.get("/get-all-category", getAllCategoryController);

/* ==== Get Single Category || Get ===== */
router.get("/get-signle-category/:slug", getSignleCategoryController);

/* ==== Delete Category || Delete ===== */
router.delete("/delete-category/:id",requireSignIn, isAdmin, deleteCategoryController);


export default router;