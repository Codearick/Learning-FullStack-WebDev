import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser';
import { Login } from './models/login.js';

mongoose.connect("mongodb://localhost:27017/LoginForm");
const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log(req.body);
    let login = new Login({ username: req.body.username, password: req.body.password })
    login.save();
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})