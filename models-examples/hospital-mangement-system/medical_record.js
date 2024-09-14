import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({}, {timsestamps: true});

export const MedialSchema = mongoos.model("MedicalRecord", MedialSchema);