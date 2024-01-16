//2. The Double Trouble:
// You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, it only doubles one of them.
function getDouble(arr){
    let temp = null;
    for (let i = 0; i<arr.length; i++) {
        if(arr[i] != temp){
            temp = arr[i];
            arr[i] = arr[i] * 2;
        }
    }
    return arr;
}
let arr = [2,2,4,5,9,6,4,3,6];
console.log("Before double: ",arr);

console.log("The double trouble: ",getDouble(arr));
