function adjective() {
    let a = "Crazy";
    let b = "Amazing";
    let c = "Fire";
    let random = Math.floor((Math.random()) * 3) + 1;
    // console.log(`The random number is ${random}`)
    switch (random) {
        case 1:
            return a;
            break;
        case 2:
            return b;
            break;
        case 3:
            return c;
            break;
        default:
            break;
    }
}

function shopName(){
    let a = "-Engine-";
    let b = "-Foods-";
    let c = "-Garments-";
    let random = Math.floor((Math.random()) * 3) + 1;
    // console.log(`The random number is ${random}`)
    switch (random) {
        case 1:
            return a;
            break;
        case 2:
            return b;
            break;
        case 3:
            return c;
            break;
        default:
            break;
    }
}

function anotherWord(){
    let a = "Bros";
    let b = "Limited";
    let c = "Hub";
    let random = Math.floor((Math.random()) * 3) + 1;
    // console.log(`The random number is ${random}`)
    switch (random) {
        case 1:
            return a;
            break;
        case 2:
            return b;
            break;
        case 3:
            return c;
            break;
        default:
            break;
    }
}

function businessNameGenerator(){
    return (adjective()+shopName()+anotherWord());
}
let i = 0;
while(i <10){
    console.log(`Your business name is ${businessNameGenerator()}`);
    i++;
}
