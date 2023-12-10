import mongoose from 'mongoose';
const { Schema } = mongoose;

const DoctorsSchema = new Schema({
    title: { type: String, required: true },
    Number: { type: String, required: true },
    history:{type: String, required: true},
})

export const doctorModel = mongoose.models?.doctor || mongoose.model('doctor', DoctorsSchema)