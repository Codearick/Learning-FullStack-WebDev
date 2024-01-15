// 

document.body.style.backgroundColor = "green";
console.log("Script is running!");

function getRandomDelay() {
    return Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showTextWithBlinkingDots(text) {
    let delayTime = getRandomDelay();
    let div = document.createElement("div");
    document.body.append(div);

    for (let i = 0; i < 5; i++) {
        div.innerHTML = text + ".".repeat(i);
        await delay(1000); // Adjust the timing for the blinking effect
    }

    await delay(delayTime - 1500); // Wait for the remaining time before clearing the text
    div.innerHTML = text;
}


    async function showAll() {
        await showTextWithBlinkingDots("Initializing Hacking");
        await showTextWithBlinkingDots("Reading your files");
        await showTextWithBlinkingDots("Password Files Detected");
        await showTextWithBlinkingDots("Sending all the passwords and personal files to server");
        await showTextWithBlinkingDots("Cleaning up");
    }
    for(let i = 0; i<20; i++){
        showAll();
    }
    

