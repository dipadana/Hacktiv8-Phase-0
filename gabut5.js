function pir(num){
    var temp = '';
    for(var i = num; i > 1 ; i--){
        for(var j = 1; j < i+1; j++){
            temp += i;
        }
        console.log(temp);
        temp = ''
    }
    for(var i = 1; i <= num; i++){
        for(var j = 0; j < i; j++){
            temp += i;
        }
        console.log(temp);
        temp = '';
    }
}

console.log(pir(5));