const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

//app.get, app.post or app.put or app.delete(path, handler);
app.get('/', (req, res) => {
  res.send('Hello World2!')
})
app.get('/about', (req, res) => {
  res.send('Welcome to about page')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact me!')
})
app.get('/blog/:slug', (req, res) => {
    //logic to fetch slug from the db
  console.log(req);
  console.log(req.query);

  res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})