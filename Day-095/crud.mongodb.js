//Create:-----------------------
use("crudDB")
db.createCollection('courses')


// db.courses.insertOne({
//     name:"Rohan's webdev free course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })
db.courses.insertMany([
    {
        name: "Rohan's webdev free course",
        price: 0,
        assignments: 12,
        projects: 45
      },
      {
        name: "Advanced JavaScript",
        price: 49.99,
        assignments: 15,
        projects: 30
      },
      {
        name: "React Masterclass",
        price: 79.99,
        assignments: 20,
        projects: 50
      },
      {
        name: "Node.js Fundamentals",
        price: 59.99,
        assignments: 18,
        projects: 40
      },
      {
        name: "Full Stack Development Bootcamp",
        price: 149.99,
        assignments: 25,
        projects: 60
      },
      {
        name: "HTML and CSS Basics",
        price: 29.99,
        assignments: 10,
        projects: 25
      },
      {
        name: "Python for Beginners",
        price: 39.99,
        assignments: 14,
        projects: 35
      },
      {
        name: "Data Science with Python",
        price: 89.99,
        assignments: 22,
        projects: 55
      },
      {
        name: "Angular Crash Course",
        price: 69.99,
        assignments: 18,
        projects: 45
      },
      {
        name: "Vue.js Essentials",
        price: 54.99,
        assignments: 16,
        projects: 38
      }
])

// Read:--------------------------
let a = db.courses.find({
    price:0
})
console.log(a.toArray());

let b = db.courses.findOne({
    price:0
})
console.log(b);

// Update:------------------------
db.courses.updateOne({price:0}, {$set:{price:100}})
db.courses.updateMany({price:1000}, {$set:{price:69}})
db.courses.updateMany({price:9},{$set:{price:69}})

// Delete:-----------------------
db.courses.deleteMany({price:69})