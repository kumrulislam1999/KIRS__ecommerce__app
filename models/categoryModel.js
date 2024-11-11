import mongoose from "mongoose";
import slugify from "slugify";


const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true,
    },
    slug : {
        type : String,
        lowercase : true,
    }
},{timestamps: true});

export default mongoose.model("Categories", categorySchema);