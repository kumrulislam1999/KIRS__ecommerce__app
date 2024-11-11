import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

/* ====== Start Create Category Controller Here ====== */
export const createCategoryController = async(req,res) => {
    try {
        const {name} = req.body;

        /* ==== Validations ==== */
        if(!name) {
            return res.status(401).send({
                success :false,
                message : "Category Name is Required",
            })
        }

        /* ==== Check Existing Category ==== */
        const existingCategory = await categoryModel.findOne({name});

        if(existingCategory) {
            return res.status(200).send({
                success :false,
                message : "Category Already Exists",
            });
        }

        /* ===== Create Category and Save ===== */

        const category = await new categoryModel({name, slug : slugify(name)}).save();

        res.status(201).send({
            success : true,
            message : "Category is created Successfully",
            category
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in create Category Controller",
            error
        })
    }
}
/* ====== End Create Category Controller Here ====== */


/* ====== Start Update Category Controller Here ====== */
export const updateCategoryController = async (req,res) => {
    try {
        const {name} = req.body;
        const {id} = req.params;
        /* ==== Validation ==== */

        if(!name){
            return res.status(401).send({
                success :false,
                message : "Category Name is required"
            })
        }

        const category = await categoryModel.findByIdAndUpdate(id,{name, slug : slugify(name)}, {new : true});

        res.status(200).send({
            success : true,
            message : "Category Updated Successfully",
            category,
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Update Category Controller",
            error
        })
    } 
}
/* ====== End Update Category Controller Here ====== */

/* ====== Start Get All Category Controller Here ====== */
export const getAllCategoryController = async (req, res) => {
    try {
        const category = await categoryModel.find({});
        res.status(200).send({
            success : true,
            message : "Get all Category Successfully",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success :false,
            message : "Error in Get All Category Controller",
            error
        })
    }
}
/* ====== End Get All Category Controller Here ====== */


/* ====== Start Get Single Category Controller Here ====== */
export const getSignleCategoryController = async (req, res) => {
    try {
        const {slug} = req.params;
        const category = await categoryModel.findOne({slug}); 
        res.status(200).send({
            success : true,
            message : "Get Single Category Successfully",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Single category Controller",
            error
        })
    }
}
/* ====== End Get Single Category Controller Here ====== */



/* ====== Start Get Single Category Controller Here ====== */
export const deleteCategoryController = async (req, res) => {
    try {
        const {id} = req.params;
        await categoryModel.findByIdAndDelete(id); 
        res.status(200).send({
            success : true,
            message : "Category is deleted Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Delete category Controller",
            error
        })
    }
}
/* ====== End Get Single Category Controller Here ====== */