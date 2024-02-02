import express from 'express';
const app = express();
import mongoose from 'mongoose';
import { employee } from './modals/employee.js';

mongoose.connect('mongodb://localhost:27017/company');
const port = 3000;

app.set('view engine', 'ejs');

const getRandom = (arr)=>{
  let rno = Math.floor(Math.random() * arr.length -1);
  return arr[rno];
}
app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' });
});
 
app.get('/generate', async (req, res) => {
  //Generate a random data
  let randomNames = ["Rohan","Sohan","Mohan","Gohan"];
  let randomLang = ["Python","JS","Rust","GoLang","Java"];
  let randomCities = ["NewYork","Delhi","Melbourne","Sydney","Canberra"];
  let randomIsManager = [true,false,true,false,true];
  try {
    // Render the 'index' view with the data {foo: 'FOO'}
    res.render('index', { foo: 'FOO' });
    // Generate and save random employee data to the MongoDB database
    for (let i = 0; i < 10; i++) {
      // Create a new employee instance with specific data
      let e = new employee({
        name: getRandom(randomNames),
        salary: Math.floor(Math.random()*10000),  
        language: getRandom(randomLang),
        city: getRandom(randomCities), 
        isManager: getRandom(randomIsManager)
      });
      // Save the employee data to the 'employee' collection in the 'company' database
      await e.save();
      console.log(e);
    }

    // Send a JSON response indicating success after the loop has completed
    res.json({ success: true });
  } 
  catch (error) {
    console.error('Error generating employee data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});             