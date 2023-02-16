import mongoose from "mongoose";

const Schema = mongoose.Schema
const coffeeshopSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        town: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
)
const coffeeshop = mongoose.model('Coffeeshop', coffeeshopSchema)

export default coffeeshop;