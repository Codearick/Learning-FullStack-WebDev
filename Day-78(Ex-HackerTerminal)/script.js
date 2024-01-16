document.body.style.backgroundColor = "green";
console.log("Script is running...")

function getRandom(){
    return Math.floor(Math.random()*(7000-1000+1)+1000);
}
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
async function showTextWithBlinkingDots(text){
    let delaytime = getRandom();
    let div = document.createElement("div")
    document.body.append(div);

    for(let i = 0; i<4; i++){
        div.innerHTML = text + ".".repeat(i);
        await delay(500);
    }
    await delay(delaytime - 500)
    div.innerHTML = text;
}
async function showAll(){
   await showTextWithBlinkingDots("Initializing Hacking");
   await showTextWithBlinkingDots("Reading your file");
   await showTextWithBlinkingDots("Password Files Detected");
   await showTextWithBlinkingDots("Sending all the passwords and personal files to server");
   await showTextWithBlinkingDots("Cleaning up");
}
showAll();