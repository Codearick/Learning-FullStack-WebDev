const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs');
//https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let siteName = "Adidas";
    let searchText = "Search Now"
    let arr = ["Hey", 12, 12, 42];
    res.render("index", { siteName: siteName, searchText: searchText, arr });
})
app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when";
    let blogContent = "Adidas is a very good brand";
    res.sendFile("index", { root: __dirname });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})