//============================IIFE============================================
// async function sleep(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         resolve(45)
//     }, 1000);})
// }

// (async function main(){
//     let a = await sleep();
//     console.log(a); 
//     let b = await sleep();
//     console.log(b);
// })();

//============================Destructuring===================================

// let x,y = [2,4]; // x is undefined and y is assigned 2,4
// let [x,y] = [2,4]; // x is assigned 2 and y, 4.
// let [x,y,...rest] = [2,3,4,5,3,4,7,8]; x is assigned 2, y,3 and remaining elements are assigned to rest.
// console.log(x,y, rest);

//destructure objects
// let obj = {
//     a:1,
//     b:2,
//     c:4
// }
// let {a,b} = obj;
// console.log(a,b);

//============================Spread Syntax===================================

// function sum(a,b,c){
//     return a+b+c;
// }
// let arr = [2,3,5,7];
// console.log(sum(...arr))// triple dots opens the array and performs the operation.

// let obj = {...arr}; // creates objects from array with index as keys.
// console.log(obj);
//Quick quiz----------------------------->
// const a = "the"; const b = "no";
// const c = {a,b};
// console.log(c); // output: { a:"the", b:"no" }

//=====================Local,global and block scopes==========================
// let and const provides block level scope which means that the variables declared inside a {} cannot be accessed from outside the block
// {
//     let a = 3;
// }
// variable a cannot be accessed from here.

// variable declared within the function becomes the local to a function.
// variable declared outside the function becomes global.

//=================================Hoisting===================================

// Hoisting refers to a process whereby the interpreter appears to move the declaretion the top of the code before execution.
// Variables can thus be referenced before they are declared in Javascript.

// Hoisting is only possible in var. let and const doesn't imply hoisting.
// eg: 
// console.log(sum(1,24,1), "is the sum"); //throws error: Cannot access 'sum' before initialization.
// const sum = (a,b,c)=>{
//     return a+b+c;
// }
