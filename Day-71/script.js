// let a = document.querySelector(".box").innerHTML;
// console.log(a);

// let a = document.querySelector(".box").outerHTML;
// console.log(a);

// let a = document.querySelector(".box").innerText;
// console.log(a);

// let a = document.querySelector(".container").outerHTML;
// console.log(a);

// let a = document.querySelector(".container").innerHTML;
// console.log(a)

// console.log(document.querySelector(".container").tagName);
// console.log(document.querySelector(".container").nodeName);

// console.log(document.querySelector(".container").textContent);

// document.querySelector(".box").hidden = true;

// document.querySelector(".box").innerHTML = "Rohan God edited box1"

//==================Attributes methods=====================================
// console.log(document.querySelector(".box").hasAttribute("style"));
// console.log(document.querySelector(".box").getAttribute("style"));
document.querySelector(".box").setAttribute("style","display:grid")
console.log(document.querySelector(".box").attributes); //arrtibutes attribute to display all the attributes of an element
document.querySelector(".box").removeAttribute("style");
console.log(document.querySelector(".box").dataset);