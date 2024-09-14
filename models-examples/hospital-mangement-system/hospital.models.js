import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: [{ // [] means array of strings
        type: String,
        required: true,
    }]
}, { timestamps: true });

export const Hospital = mongoose.model("Hospital", hospitalSchema);