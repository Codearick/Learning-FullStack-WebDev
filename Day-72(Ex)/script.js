function getRandomColor(){
    let col1 = (Math.floor(Math.random()*255)+1);
    let col2 = (Math.floor(Math.random()*255)+1);
    let col3 = (Math.floor(Math.random()*255)+1);

    return (`rgb(${col1},${col2},${col3})`);
}

document.querySelectorAll(".box").forEach((e) => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})
