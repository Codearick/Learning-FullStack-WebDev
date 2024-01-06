console.log("Hello World");
let cont = document.body.childNodes[1];
console.log(cont);
console.log(document.body.firstElementChild.childNodes); //Includes all texts and elements nodes
let boxes = (document.body.firstElementChild.children); //Includes only elements nodes
let box3 = document.body.firstElementChild.children[2];
console.log(box3.previousElementSibling);
console.log(box3.nextElementSibling);
console.log(box3.parentElement, 'is a parent of box3.');