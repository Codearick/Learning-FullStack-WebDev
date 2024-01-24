const fs = require("fs");
// const fs = require("fs/promises");

console.log("Starting...");
// fs.writeFileSync("rohan.txt","Rohan is a good boy"); //Synchronous and not recommended.
fs.writeFile("Rohan2.txt","Rohan is a good boy",()=>{
    //console.log("Done");
    fs.readFile("Rohan2.txt", (error,data)=>{
        //console.log(error,data.toString());
    } )
})

fs.appendFile("rohan.txt"," and also loves Niru", (e,d)=>{
    console.log(d);
})
console.log("Ending....");