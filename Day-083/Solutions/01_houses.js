// 1. The Magical Sorting Hat: 
// Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
let students = ["Rohan","Nirmala","Papa","Rebecca","Kanchenjunga","kaleyDarpan","renuGopalIier","Kaif","Niru"];
let studentHouses = [];
for (const iterator of students) {
    if(iterator.length < 6){
        studentHouses.push("Gryffindor")
    }
    else if(iterator.length < 8){
        studentHouses.push("Hufflepuff")
    }
    else if(iterator.length < 12){
        studentHouses.push("Ravenclaw")
    }
    else{
        studentHouses.push("Slytherin")
    }
}

console.log(studentHouses);