let arr = [1,13,5,7,11];
//Map Function: 
// let newArr = arr.map((e,index,array) => {
//     return e**2;
// })

//Filter Function: ----------------------------------------------------->
// const greaterThanSeven = (e) =>{
//     if(e > 7){
//         return true;
//     }
//     return false;
//  }

// console.log(arr.filter(greaterThanSeven));
//Shortcut filter:
console.log(arr.filter((e)=>{
    if(e>7){
        return true;
    }
    return false;
}));

//Reduce Function: -------------------------------------------------------->
let arr1 = [2,3,4,5,6];
const red = (a,b)=>{
    return a+b;
}
console.log("Array after reduce function that sums up: ")
console.log(arr1.reduce(red));

let a = Array.from("Rohan");
console.log(a);
