function myName(name){
    console.log(name + " is a good boy");
    console.log(name + " is a good boy");
    console.log(name + " is a good boy");
    console.log(name + " is a good boy");
}
myName("Rohan");

function sum(a , b , c =1){
    return a+b+c;
}
res1 = sum(1,2,4);
res2 = sum(37,3);
console.log("The sum is " +res1);
console.log("The sum is "+res2);

const myArrowFun = () =>{
    console.log("Hey I am an arrow function");
}

myArrowFun();