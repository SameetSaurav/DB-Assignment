import mongoose from "mongoose";

const product_categorySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    desc: {
        type: String,
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

export const Product_Category = mongoose.model("Product_Category", product_categorySchema)