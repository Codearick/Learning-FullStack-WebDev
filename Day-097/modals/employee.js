import mongoose from 'mongoose';
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});
const employee = mongoose.model('employee', employeeSchema);
export {employee};