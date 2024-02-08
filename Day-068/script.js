console.log("Rehan");
//Selecting element by class------------------------------------->
// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// boxes[2].style.backgroundColor = "red";

//Selecting element by ID---------------------------------------->
let redBox = document.getElementById("red");
redBox.style.backgroundColor = "red";

//Selecting element by querySelector
//document.querySelector(".box").style.backgroundColor = "green";
document.querySelectorAll(".box").forEach((e,i) =>{
    e.style.backgroundColor = i%2===0?"green":"red";
})

//selecting elements by tag names
e = document.getElementsByTagName("div");
//console.log(e)

//matches functions
e[4].matches("#red") //returns true
e[3].matches("#red") //returns false

//closest functions
console.log(e[3].closest(".container"));
e[3].closest("html")

//Closest functions
document.querySelector(".container").contains(e[4])//returns true
document.querySelector("body").contains(document.querySelector(".container"));//returns true
document.querySelector(".container").contains(document.querySelector("body"));//returns false

