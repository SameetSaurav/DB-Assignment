import mongoose from "mongoose";

const discountSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    desc: {
        type: String,
    },
    discount_percent: {
        type: Number,
    },
    active: {
        type: Boolean,
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

export const Discount = mongoose.model("Discount", discountSchema)