import mongoose from "mongoose";
const Schema = mongoose.Schema;
const coffeeshopSchema = new Schema({
    _id: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: true,
    },
    town: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const Coffeeshop = mongoose.model("Coffeeshop", coffeeshopSchema);
export default Coffeeshop;
