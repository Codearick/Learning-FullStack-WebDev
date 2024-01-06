console.log("Faulty calculator");
let randNum = Math.floor((Math.random() * 100)+1);
console.log(randNum + " is Random Number ");
// if(randNum < 10){
//     function sum(a,b){
//         return a-b;
//     }
//     function minus(a,b){
//         return (a+b);
//     }
//     function div(a,b){
//         return a*b;
//     }
//     function product(a,b){
//         return a/b;
//     }
//     function mod(a,b){
//         return a**b;
//     }
//     function expo(a,b){
//         return a%b;
//     }
// }
// else{
//     function sum(a,b){
//         return a+b;
//     }
//     function minus(a,b){
//         return a-b;
//     }
//     function div(a,b){
//         return a/b;
//     }
//     function product(a,b){
//         return a*b;
//     }
//     function mod(a,b){
//         return a%b;
//     }
//     function expo(a,b){
//         return a**b;
//     }
// }
// let a = 1;
// let b = 1;

// console.log("The sum is "+sum(a,b));
    
 let a = prompt("Enter the first number")  
 let b = prompt("Enter the second number") 
 let c = prompt("Enter the operation you wanna perform")

 let obj = {
    "+" : "-",
    "-" : "+",
    "*" : "/", 
    "%" : "**",
    "**" : "%"
 }
if(randNum > 10){
    console.log(`The result is : ${eval(`${a} ${c} ${b}`)}`);
}
else{
    c = obj[c];
    console.log(`The result is : ${eval(`${a} ${c} ${b}`)}`);
}
