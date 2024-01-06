function getEven(number){
    let arr = Array.from(Array(number+1).keys());
    let c = arr.slice(1,).filter((a)=>{
        if(a%2 == 0){
            return a;
        }
    })
    return c;                    
}
let arr1 = getEven(20);
console.log(arr1);