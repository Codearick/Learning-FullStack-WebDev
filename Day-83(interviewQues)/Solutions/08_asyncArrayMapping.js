// 8. Async Array Mapping:
//Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
async function getSquare(arr){
    return new Promise((resolve)  => {
      setTimeout(() => {
        const newArray = arr.map((num) => num * 2);
        resolve(newArray);
      }, 500);
    });
}
const arr = new Array(1,2,3,4);
(async function main(){
    try{
       let newArray = await getSquare(arr);
       console.log(newArray);
    }
    catch(error){
        console.log(error)
    }
})();
