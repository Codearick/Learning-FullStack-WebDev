class user{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(name){
        if(name.length < 4){
            console.log("Name too short!")
            return;
        }
        this._name = name;
    }
}

let a = new user("Rohan");
console.log(a.name);

a.name = "Nirmala";
console.log(a.name);

