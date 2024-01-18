// 6. The Vowel Counter:
// You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
function vowelsCounter(str){
    let str1 = str.toLowerCase();
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    for(let i = 0; i<str1.length; i++){
        if(vowels.indexOf(str1[i]) !== -1){
            count++;
        }
    }
    return count;
}
let str = "aaAeIoU";
console.log("Number of vowels: ",vowelsCounter(str));
