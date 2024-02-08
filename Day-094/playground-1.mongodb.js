// Select the database to use.
use('sigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('course').insertMany([
  {
    "Name": "Python",
    "Price": 1500,
    "Instructor": "Sara"
  },
  {
    "Name": "JavaScript",
    "Price": 1800,
    "Instructor": "Chris"
  },
  {
    "Name": "C++",
    "Price": 2200,
    "Instructor": "Alex"
  },
  {
    "Name": "Ruby",
    "Price": 1700,
    "Instructor": "Emily"
  }
]
);

// Print a message to the output window.
console.log(`Done inserting data.`);