use("crudDB")

db.createCollection('courses')
db.courses.insertOne({
    name:"Rohan's webdev free course",
    price: 0,
    assignments: 12,
    projects: 45
})