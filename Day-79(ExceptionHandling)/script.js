let a = prompt("Enter first number");
let b = prompt("Enter second number");
if( isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed");
}
let sum = parseInt(a)+parseInt(b);

function main(){ 
    let x = 2;
    try {
        console.log(sum*x +" is the sum of two numbers");
        return true;
    } catch (error) {
        console.log("Error aa gaya bhaii!");
        return false;
    }
    finally{
        //Finally clause gets executed even if function returns before it being executed.
        console.log("Files are being closed and db connection is being closed.");
    }
}
main();