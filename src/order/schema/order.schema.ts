import * as mongoose from "mongoose";

export const ProductCartSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    product_title: String,
    count: Number,
    price: Number
})

export const OrderSchema = new mongoose.Schema({
    products: [ProductCartSchema],
    transaction_id: {},
    amount: {
        type: Number
    },
    address: String,
    status: {
        type: String,
        default: "Received",
        enum: ["Cancelled", "Delivered", "Shipped", "Processing", "Received"]
    },
    updated: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true}
);