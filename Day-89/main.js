const express = require('express')
const blog = require('./routes/blog')

const app = express()
const port = 3000

app.use(express.static("public"));
app.use('/blog',blog)

app.get('/', (req, res) => {
    console.log("Hello this is a get request!")
    res.send('Hello World of GET 21!')
}).post('/', (req, res) => {
    console.log("Hello this is a post request!")
    res.send('Hello World of POST!')
})
app.put('/', (req, res) => {
    console.log("Hello from PUT");
    res.send('Hello World of PUT')
})
app.delete('/', (req, res) => {
    console.log("Hello from DELETE");
    res.send('Hello World of DELETE')
})

app.post('/index',(req,res)=>{
    console.log("Hello from Index!");
    res.sendFile('templates/index.html',{root: __dirname});
})
app.get('/api',(req,res)=>{
    console.log("Hello returned from Json!");
    res.json({a : 1, b : 2, c : 3 , d:["Rohan", "Harry", "David J Malan"]});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})