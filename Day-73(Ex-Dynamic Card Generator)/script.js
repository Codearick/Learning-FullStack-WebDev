// function createCard(title, cName, views, monthsOld, duration, thumbnail){
//    return `document.querySelector(".cards")`; 
// };


 
//createCard("A day in a life of  a Software Engineer | Rohan Gautam ", 56000, 7, "31:22", "assets/myself.png");


let views = 79878;
function viewsSuffix(){
    if(views >= 1000000000){
        return (views / 1000000000).toFixed(1) + 'B';
    }
    if(views >= 1000000){
        return (views / 1000000).toFixed(1) + 'M';
    }
    if(views >= 1000){
        return (views / 1000).toFixed(1) + 'K';
    }
    else{
        return views.toString();
    }
}

function createCard(){
    let title = "A day in a life of  a Software Engineer | Rohan Gautam "
    document.querySelector(".title").innerText = title; 

    let cName = "CodeWithRehan";
    document.querySelector(".videoMeta2").children[0].innerHTML = cName;

    let formattedViews = viewsSuffix(views);
    //document.querySelectorAll(".videoMeta2")[0].querySelector("span:nth-child(2)").innerText = formattedViews;
    document.querySelector(".videoMeta2").children[2].innerHTML = formattedViews;

    let uploadedDate = "8 Months Old";
    // document.querySelectorAll(".videoMeta2")[0].querySelector("span:nth-child(3)").innerText = uploadedDate;
    document.querySelector(".videoMeta2").children[4].innerText = uploadedDate;

    console.log("createCard Function worked");
    let cont = document.querySelector(".container");
    let cards = document.querySelectorAll(".cards");
    cards.forEach(element => {
        // cont.insertAdjacentElement("afterbegin",element);
        cont.appendChild(element);
    });
 };