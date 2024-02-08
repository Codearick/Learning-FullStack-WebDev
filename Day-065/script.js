// Finding Factorial of 6 using forloop:----------------------------------->
console.log("Using for loop: ");
let a = 6;
let fact = 1;
for (let i = a; i > 0; i--) {
    fact *= i;
}
console.log(fact);

// Finding Factorial of 6 using reduce function:----------------------------------->
console.log("Using reduce function: ");
function factorial(number) {
    let arr = Array.from(Array(number+1).keys());
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    console.log(c)
}
factorial(a);
