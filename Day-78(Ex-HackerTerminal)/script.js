document.body.style.backgroundColor = "green";
let div = document.createElement("div");
document.body.append(div);
console.log("Script is running!");

async function showDisplay(){
    let rand = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000;

    let m1 = await new Promise ((resolve,reject)=> {
        setTimeout(() => {
           resolve(div.textContent = "Initializing Hacking");
       }, rand);
    });

    let m2 = await new Promise ((resolve,reject)=>{
        setTimeout(() => {
            let div1 = createElement("div");
            div1.textContent = "Reading your files...";
        }, rand);
    })
    
    let m3 = await new Promise ((resolve,reject)=>{
        setTimeout(() => {
            div.append = "<p>Password Files Detected</p>";
        }, rand);
    })
    
    let m4 = await new Promise ((resolve,reject)=>{
        setTimeout(() => {
            div.textContent = "Sending all the passwords and personal files to server";
        }, rand);
    })
    
    let m5 = await new Promise ((resolve,reject)=>{
        setTimeout(() => {
            div.textContent = "Cleaning up";
        }, rand);
    })

    console.log(rand);  
}
const main = ()=>{
  showDisplay().then (a => {
    console.log("Success!");
  })
}
main();

function getDot(){
    setTimeout(() => {
        div.textContent = ".";
    }, 2000);
}
