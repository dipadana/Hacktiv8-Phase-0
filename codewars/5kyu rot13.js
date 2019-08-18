function rot13(str){
    var abjad = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!$%^&*()_+|~-=`{}[]:";<>?,./ ';
    var rot13 = '0123456789NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm!$%^&*()_+|~-=`{}[]:";<>?,./ ';
    var output = '';
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < abjad.length; j++){
            if(str[i] === abjad[j]){
                output += rot13[j];
            }
        }
    }
    return output;
}

console.log(rot13('test master'));
console.log(rot13('Test'));
console.log(rot13('Hello!'));