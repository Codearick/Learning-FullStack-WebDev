const express = require('express')
const app = express()
const port = 3000
const fs = require("fs");
const blog = require('./routes/blog')



app.use('/blog', blog)
app.use(express.static("public"));

//Middleware 1:
app.use((req, res, next)=>{
    console.log(req.headers);
    req.rohan = "I am Rohan bhai"; 
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method} request\n`)
    console.log('Middleware 1')
    // res.send("Middleware 1 ka aatank hai!")
    next()
})

//Middleware 2:
app.use((req, res, next)=>{
    console.log('Middleware 2')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!' + req.rohan);
})
app.get('/about', (req, res) => {
    res.send('Hello World from contact!')
})
app.get('/contact', (req, res) => {
    res.send('Hello World from about!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
