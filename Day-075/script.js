// console.log("Rohan is a hacker");
// console.log("Harry is a hecker");

// setTimeout(() => {
//     console.log("I'm inside a setTimeout 1");
// }, 2000);
// setTimeout(() => {
//     console.log("I'm inside setTimeout 2");
// }, 1500);

// console.log("The end!");
const nothing = () => {
  console.log("Nothing invoked!")
}

const callback = (arg,nothing)=>{
    console.log(arg);
    nothing();
}
const loadScript = (src,callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () =>{
        console.log("Loaded script with SRC: "+src);
        callback("Rohan");
    }
    document.head.append(sc);
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);