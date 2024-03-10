import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    desc: {
        type: String,
    },
    SKU: {
        type: String,
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product_Category"
    },
    inventory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product_Inventory"
    },
    price:{
        type: Number,
    },
    discount_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Discount"
    },
    deleted_at: {
        type: Date,
    }
},{timestamps: 
    {
        createdAt: 'created_at',
        updatedAt: 'modified_at'
    }
})

export const Product = mongoose.model("Product", productSchema)