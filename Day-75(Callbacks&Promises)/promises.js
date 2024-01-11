console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand < 0.5) {
        reject("Randomly rejecting you!");
    } else {
        setTimeout(() => {
            console.log('Yes I am done!');
            resolve("Rohan");
        }, 1000);
    }
});
let prom2 = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand < 0.5) {
        reject("Randomly rejecting you 2!");
    } else {
        setTimeout(() => {
            console.log('Yes I am done 2!');
            resolve("Rohan 2");
        }, 1000);
    }
});
// prom1.then(a => {
//     console.log(a);
// }).catch((error)=>{
//     console.log(`Hello world`);
// });

//==========================Promise ApI=====================================
//======== 1) Promise.all(promises)
// let prom3 = Promise.all([prom1,prom2]).then(a=>{
//     console.log(`${a}`);
// }).catch(err =>{
//     console.log(err);
// });

// //======== 2) Promise.allSettled(promises)
// let prom3 = Promise.allSettled([prom1,prom2]).then(a=>{
//     console.log(a);
// }).catch(err =>{
//     console.log(err);
// });

// //======== 3) Promise.race(promises)
// let prom3 = Promise.race([prom1,prom2]).then(a=>{
//     console.log(a);
// }).catch(err =>{
//     console.log(err);
// });

// //======== 4) Promise.resolve(value)
// let prom3 = Promise.resolve("Code Worked!").then(a=>{
//     console.log(a);
// }).catch((error) => {
//   console.log(error);
// }
// )
//======== 4) Promise.reject(value)
// let prom3 = Promise.resolve("Code didn't Work!").then(a=>{
//     console.log(a);
// }).catch((error) => {
//   console.log(error);
// });

//======== 4) Promise.any(promises) // Returns aggregate error if all promise were rejected else returns if any or all promises are resolved.
let prom3 = Promise.any([prom1,prom2]).then(a=>{
    console.log(a);
}).catch((error) => {
  console.log(error);
});