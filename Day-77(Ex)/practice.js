// 1) Write a program to load a javascript file in a browser using promises. Use .then() to display the alert when the load is completed.

// const loadScript = (src)=>{
//     return new Promise((resolve,reject)=>{
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = ()=>{
//             resolve(src + " loaded successfully!");
//         }
//         document.head.append(script);
//     })
// }
// const main =  () => {
//     let a =  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js").then((e)=>{
//         alert(e);
//     }).catch((error)=>{
//         alert(result);
//     })
// }
// main();
//=================================================================================
// 2) Write the same program from previous and use async/await syntax.
// const loadScript = async (src)=>{
//     return new Promise((resolve,reject) => {
//       let script = document.createElement("script");
//       script.src = src;
//       script.onload = () => {
//         resolve("Script Loaded successfully");
//       }
//       document.head.append(script);
//     })
// }

// const main = async () => {
//   let a = await loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js")
//   console.log(a);
// }
// main();

//===============================================================================
// 3) Create a promise which rejects after 3 seconds. Use an async/await to get it's value and use try catch to handle its error.

// const prom  = () => {
//     return new Promise((resolve,reject)=>{
//         if(true){
//             setTimeout(() => {
//                 reject("Rejected unfortunately!")
//             }, 3000);
//         }
//     })
// }
// let main = async ()=>{
//     try {
//         let a = await prom();
//         console.log(a);
//     } catch (error) {
//         console.log(error);
//     }
// }
// main();

//===============================================================================
// 4) Write a program using promise.all() inside an aync/await to await 3 promises. Compare it's results with the case where we await these promises one by one.

let prom1 = new Promise((resolve,reject)=>{
    let rand = Math.random();
    if(rand<0.5){
        resolve("Successfull Promise 1!");
    }
    else{
        reject("Unsuccessfull promise 1");
    }
})
let prom2 = new Promise((resolve,reject)=>{
    let rand = Math.random();
    if(rand<0.5){
        resolve("Successfull Promise 2!");
    }
    else{
        reject("Unsuccessfull promise 2");
    }
})
let prom3 = new Promise((resolve,reject)=>{
    let rand = Math.random();
    if(rand<0.5){
        resolve("Successfull Promise 3!");
    }
    else{
        reject("Unsuccessfull promise 3");
    }
})

let main = async () => {
  await Promise.all([prom1,prom2,prom3]).then((a) => {
    console.log(a);
  }).catch((error) => {
    console.log(error);
  })
}
main();