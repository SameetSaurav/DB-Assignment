import mongoose from "mongoose";

const product_inventorySchema = new mongoose.Schema({
    quantity: {
        type: Number,
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

export const Product_Inventory = mongoose.model("Product_Inventory", product_inventorySchema)