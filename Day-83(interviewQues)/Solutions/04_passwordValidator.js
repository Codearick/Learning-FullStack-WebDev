// 4. The Password Validator:
//You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
function hasCapital(str) {
    for (let index = 0; index < str.length; index++) {
        if (str.charCodeAt(index) >= 65 && str.charCodeAt(index) <= 90) {
            return true;
        }
        else {
            continue;
        }
    }
    return false;
}
function hasSmall(str) {
    for (let index = 0; index < str.length; index++) {
        if (str.charCodeAt(index) >= 97 && str.charCodeAt(index) <= 122) {
            return true;
        }
        else {
           continue;
        }
    }
    return false;
}

function getValidation(password) {
    if (password.length < 8) {
        return "Error! Minimum length must be 8";
    }
    if (/\d/.test(password) == false) {
        return "Error! must have at least one digit.";
    }
    if (hasCapital(password) == false && hasSmall(password) == true || hasCapital(password) == true && hasSmall(password) ==false ){
        return "Error! must contain both capital and small letters";
    }
    else{
        return "Password strong!"
    }
}
let password = "Ahelloasd1";
console.log(getValidation(password));
