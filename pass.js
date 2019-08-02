// - minimal 8 character
// - harus ada Uppercase
// - harus ada lowercase
// - harus ada angka

function validatePassword(pass) {
    var char = false;
    var upp = false;
    var low = false;
    var num = false;
    if(pass.length >= 8){
        char = true;
    }
    if(pass.toUpperCase() != pass){
        low = true;
    }
    if(pass.toLowerCase() != pass){
        upp = true;
    }
    if(/\d/.test(pass)){
        num = true;
    }
    return(char && upp && low && num);
}

console.log(validatePassword('aaaaaaaaaaaaaa')) //false
console.log(validatePassword('asds')) //false
console.log(validatePassword('asdsasdasd')) //false
console.log(validatePassword('asdsaABasd')) //false
console.log(validatePassword('as12ABasd')) //true
console.log(validatePassword('as0ABasd')) //true
console.log(validatePassword('123456789aa')) //false

// refrence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://stackoverflow.com/questions/2830826/javascript-checking-for-any-lowercase-letters-in-a-string
// https://stackoverflow.com/questions/5778020/check-whether-an-input-string-contains-a-number-in-javascript