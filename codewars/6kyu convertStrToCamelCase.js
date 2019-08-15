function toCamelCase(str){
    var output = ''
    var arr = str.split(/[- +?_]+/);

    output += arr[0];
    for(var i = 1; i < arr.length; i++){
        var temp = (arr[i].split(''));
        for(var j = 0; j < temp.length; j++){
            if(j == 0){
                output += temp[0].toUpperCase();
            }
            else{
                output += temp[j];
            }
        }
    }
    return (output)
}

console.log(toCamelCase("the-stealth-warrior")) // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")) // "TheStealthWarrior"
