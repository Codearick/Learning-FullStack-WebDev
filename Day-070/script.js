
document.querySelectorAll(".box").forEach((e,i) => {
    let randNum = Math.floor(Math.random()*5+1);
    switch(randNum){
        case 1: e.style.backgroundColor = "green";
        break;
        case 2: e.style.backgroundColor = "red";
        break;
        case 3: e.style.backgroundColor = "yellow";
        break;
        case 4: e.style.backgroundColor = "purple";
        break;
        case 5: e.style.backgroundColor = "black";
        break;
    }
})

