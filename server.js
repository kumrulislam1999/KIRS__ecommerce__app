import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { dot } from "node:test/reporters";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";

/* ==== Import all Routes File Here ===== */

import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoute.js"


/* ===== DotEnv Config ===== */
dotenv.config();


/* ==== Database Config ==== */
connectDB();

/* ==== Rest Object ===== */
const app = express();



/* ==== Middlewares ===== */
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

/* ==== Routes ==== */
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);


/* ==== Rest Api ==== */
app.get("/", (req,res) => {
    res.send({
        message : "Welcome to Ecommerce App",
    })
})


const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV__MODE} mode at http://www.localhost:${PORT}`.bgCyan.white);
})