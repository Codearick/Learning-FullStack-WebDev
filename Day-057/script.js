// for(let i = 0; i < 100; i++){
//     console.log("Hello world");
// }

let obj = {
    "Name" : "Rohan",
    "Role" : "Programmer",
    "Company" : "Amazon"
}
for (const key in obj) {
   console.log(`Key: ${key}, Value: ${obj[key]}`);
}

// for (const c of "Rohan") {
//     console.log(c);
// }
