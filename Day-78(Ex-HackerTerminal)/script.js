document.body.style.backgroundColor = "green";
let div = document.createElement("div");
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
document.body.append(div);
console.log("Script is running!");

async function showDisplay() {
    let rand = Math.floor(Math.random() * (1000 - 1000 + 1)) + 1000;

    let m1 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(div.textContent = "Initializing Hacking");
        }, rand);
    });

    let m2 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(div1.textContent = "Reading your files...");
        }, rand);
    })

    let m3 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            div.append = "<p>Password Files Detected</p>";
        }, rand);
    })

    let m4 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            div.textContent = "Sending all the passwords and personal files to server";
        }, rand);
    })

    let m5 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            div.textContent = "Cleaning up";
        }, rand);
    })

    console.log(rand);
}
const main = () => {
    Promiseall([showDisplay().m1,showDisplay.m2,showDisplay.m3,showDisplay.m4,showDisplay.m5]).then(a => {
        console.log(a);
    }).catch(error => {
        console.log(error);
    });
} 
main();

function getDot() {
    setTimeout(() => {
        div.textContent = ".";
    }, 2000);
}
