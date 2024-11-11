import { error } from "console";
import productModel from "../models/productModel.js"
import fs from "fs";
import slugify from "slugify";
/* ===== Start Create Product Controller Here ===== */
export const createProductController = async (req, res) => {
    try {
        const {pid} = req.params;
        const {name, slug, description, price, category, quantity, shipping, } = req.fields;
        const {photo} = req.files;
        /* ===== Validations ===== */
        switch(true){
            case !name : 
                return res.status(500).send({error : "Name is Required"});
            case !description : 
                return res.status(500).send({error : "Description is Required"});
            case !price : 
                return res.status(500).send({error : "Price is Required"});
            case !category : 
                return res.status(500).send({error : "Category is Required"});
            case !quantity : 
                return res.status(500).send({error : "Quantity is Required"});
            case photo && photo.size > 1000000 : 
                return res.status(500).send({error : "Photo is Required and should be less then 1mb"});
        }
        const product = new productModel.findByIdAndUpdate(pid,{...req.fields, slug : slugify(name)},{new : true});
        if (photo) {
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type;
        }
        await product.save();

        res.status(201).send({
            success : true,
            message : "Product is Created Successfully",
            product,
        })
    } catch(error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Create Product Controller",
            error,
        })
    }
}
/* ===== End Create Product Controller Here ===== */


/* ===== Start Update Product Controller Here ===== */
export const updateProductController = async (req, res) => {
    try {
        const {name, slug, description, price, category, quantity, shipping, } = req.fields;
        const {photo} = req.files;
        /* ===== Validations ===== */
        switch(true){
            case !name : 
                return res.status(500).send({error : "Name is Required"});
            case !description : 
                return res.status(500).send({error : "Description is Required"});
            case !price : 
                return res.status(500).send({error : "Price is Required"});
            case !category : 
                return res.status(500).send({error : "Category is Required"});
            case !quantity : 
                return res.status(500).send({error : "Quantity is Required"});
            case photo && photo.size > 1000000 : 
                return res.status(500).send({error : "Photo is Required and should be less then 1mb"});
        }
        const product = new productModel({...req.fields, slug : slugify(name)});
        if (photo) {
            product.photo.data = fs.readFileSync(photo.path);
            product.photo.contentType = photo.type;
        }
        await product.save();

        res.status(201).send({
            success : true,
            message : "Product is Updated Successfully",
            product,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Update Product Controller",
            error,
        })
    }
}
/* ===== End Update Product Controller Here ===== */


/* ===== Start Get All Product Controller Here ===== */
export const getAllProductController = async (req, res) => {
    try {

        const products = await productModel.find({}).populate("category").select("-photo").limit(12).sort({createdAt : -1});
        
        if(!products) {
            return res.status(401).send({
                success :false,
                message : "No Product Available Now",
            })
        }

        res.status(200).send({
            success : true,
            message : "Get All Product Successfully",
            countTotal : products.length,
            products,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Get All Product Controller",
            error,
        })
    }
}
/* ===== End Get All Product Controller Here ===== */

/* ===== Start Get Single Product Controller Here ===== */
export const getSingleProductController = async (req, res) => {
    try {
        const {slug} = req.params;

        const product = await productModel.findOne({slug}).select("-photo").populate("category");

        if(!product){
            return res.status(401).send({
                success : false,
                message : "No Product Available on this Slug",
            })
        }
        res.status(200).send({
            success : true,
            message : "Get Single Product Successfully",
            product,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Get Signle Product Controller",
            error,
        })
    }
}
/* ===== End Get Single Product Controller Here ===== */


/* ===== Start Get Product Photo Controller Here ===== */
export const getProductPhotoController = async (req, res) => {
    try {
        const {pid} = req.params;

        const product = await productModel.findById(pid).select("photo");

        if(product.photo.data){
            res.set("Content-type", product.photo.contentType);
            return res.status(200).send(product.photo.data)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Get Signle Product Controller",
            error,
        })
    }
}
/* ===== End Get Product Photo Controller Here ===== */



/* ===== Start Delete Product Controller Here ===== */
export const deleteProductController = async (req, res) => {
    try {
        const {pid} = req.params;

        await productModel.findByIdAndDelete(pid).select("-photo");

        res.status(200).send({
            success : true,
            message : "Product Deleted Successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : "Error in Delete Product Controller",
            error,
        })
    }
}
/* ===== End Delete Product Controller Here ===== */
