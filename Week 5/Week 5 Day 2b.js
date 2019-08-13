// Password Generator
function changeVocals (str) {
    var temp = '';
    for(var i = 0; i < str.length; i++){
        switch(str[i]){
            case 'A' : temp += 'B'; break;
            case 'I' : temp += 'J'; break;
            case 'U' : temp += 'V'; break;
            case 'E' : temp += 'F'; break;
            case 'O' : temp += 'P'; break;
            case 'a' : temp += 'b'; break;
            case 'i' : temp += 'j'; break;
            case 'u' : temp += 'v'; break;
            case 'e' : temp += 'f'; break;
            case 'o' : temp += 'p'; break;
            default : temp += str[i];
        }
    }
    return temp;
}

function reverseWord (str) {
    var output = '';
    for(var i = str.length-1; i >= 0; i--){
        output += str[i]
    }
    return output;
}

function setLowerUpperCase (str) {
    var output = '';
    for(var i = 0; i < str.length; i++){
        if(str[i] == str[i].toLowerCase()){
            output += str[i].toUpperCase();
        }
        else if(str[i] == str[i].toUpperCase()){
            output += str[i].toLowerCase();
        }
        else{
            output += str[i];
        }
    }
    return output;
}

function removeSpaces (str) {
    var output =  '';
    for(var i = 0; i < str.length; i++){
        if(str[i] == ' '){
            continue;
        }
        else if(str[i] != ' '){
            output += str[i];
        }
    }
    return output;
}

function passwordGenerator (name) {
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter.'
    }
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
}

console.log(passwordGenerator('Sergei Dragunov'));
console.log(passwordGenerator('VPNVGBRdJFGRFs'));  // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'