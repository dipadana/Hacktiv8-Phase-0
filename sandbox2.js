function hapusVokal(str){
    var output = '';
    for( var i = 0; i < str.length; i++){
        if(str[i] != 'a' && str[i] != 'i' && str[i] != 'u' && str[i] != 'e' && str[i] != 'o'){
            output += str[i];
        }
    }
    return output;
}

function hapusVokal2(str){
    return str.match(/[^aiueoAIUEO]+/gi).join('')
}

console.log(hapusVokal2('goreng'));