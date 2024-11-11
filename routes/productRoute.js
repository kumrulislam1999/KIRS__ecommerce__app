import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js"
import { createProductController, deleteProductController, getAllProductController, getSingleProductController,getProductPhotoController, updateProductController, } from "../controllers/productController.js";
import formidable from "express-formidable";
/* ====== Route Object ====== */

const router = express.Router();


/* ===== All Routes ===== */

/* ===== Create Product Route || Post ===== */
router.post("/create-product", requireSignIn, isAdmin,formidable(), createProductController);

/* ===== Update Product Route || Put ===== */
router.put("/update-product/:pid", requireSignIn, isAdmin ,formidable(), updateProductController);


/* ===== Get All Products Route || Get ===== */
router.get("/get-all-products", getAllProductController);


/* ===== Get Single Product Route || Get ===== */
router.get("/get-single-product/:slug", getSingleProductController);



/* ===== Get Single Product Route || Get ===== */
router.get("/get-product-photo/:pid", getProductPhotoController );



/* ===== Delete Product Route || Delete ===== */
router.delete("/delete-product/:pid", requireSignIn, isAdmin , deleteProductController);





export default router;