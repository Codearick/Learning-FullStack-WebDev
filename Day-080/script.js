// let obj = {
//     a: 1,
//     b: "Rohan"
// }
// console.log(obj);

// let animal = {
//     eats: true;
// }
// let rabbit = {
//     jumps: true;
// }
// rabbit.__proto__ = animal; // sets rabbit.[__prototype__] = animal

class Animal{
    constructor(name){
        this.name = name;
        console.log("constructor of Animal created by",name);
    }
    eats(){
        console.log("khadai chu!");
    }
    jumps(){
        console.log("Ufridai chhu!");
    }
}
class Lion extends Animal{
    constructor(name){
        super();
        console.log("Constructor of Lion created by",name);
    }
    eats(){
        console.log("Lion khadai chha.");
        
    }
}
let a = new Animal();
let l = new Lion("Rohan");
console.log(l);
a.eats();
l.eats();
