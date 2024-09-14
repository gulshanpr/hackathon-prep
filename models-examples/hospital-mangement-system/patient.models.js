import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    diagonosis: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hosptial",
        required: true,
    },
    assignedDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true,
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        required: true,
    },
    
}, {timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema);