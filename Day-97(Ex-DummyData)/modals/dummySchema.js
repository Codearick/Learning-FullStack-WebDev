import mongoose from 'mongoose';
const { Schema } = mongoose;

const dummySchema = new Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});
export const Dummy = mongoose.model('Dummy', TodoSchema);
