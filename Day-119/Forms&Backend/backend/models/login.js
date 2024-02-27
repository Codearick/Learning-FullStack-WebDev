import mongoose from "mongoose"; 

const LoginSchema = new mongoose.Schema({
    username: {type: String ,required:true},
    password: String
});
export const Login = mongoose.model('Login', LoginSchema);