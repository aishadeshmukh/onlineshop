import * as mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    product_title: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    description:{
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    },
    price: {
        type: Number,
        required: true,
        maxlength: 32,
        trim: true
    },
    picture: {
        data: Buffer,
        contentType: String
    }

}, {timestamps: true});