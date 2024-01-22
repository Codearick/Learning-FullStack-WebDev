
let i = 2;
function createCard() {
    let title = "A day in a life of a Rohan Gautam | Rehan Gautam";
    let cName = "CodeWithRehan";
    let views = 560000;
    let monthsOld = 7;
    let duration = "31:22";
    let thumbnail = "assets/myself.jpg";

    // Create the card container
    let card = document.createElement("div");
    card.className = "cards";

    // Create card content
    let cardContent = `
    <span>${i++}</span>
    <div class="thumbNail"><img src=${thumbnail} alt="">
    </div>
    <div class="videoMeta1">
        <div class="duration">
            ${duration}
        </div>
        <div class="title">
            <span>${title}</span>
        </div>
        <div class="videoMeta2">
            <span>${cName} &nbsp</span>
            <span>.</span>
            <span>&nbsp;${viewsSuffix(views)}&nbsp;</span>
            <span>.</span>
            <span>&nbsp;${monthsOld} months old</span>
        </div>
    </div>
    `;

    // Set the innerHTML of the card
    card.innerHTML = cardContent;

    // Get the container
    let container = document.querySelector(".container");

    // Add the card based on the specified position
    container.appendChild(card); // Add at the top

    console.log("createCard Function worked");
}
function viewsSuffix(views){
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
