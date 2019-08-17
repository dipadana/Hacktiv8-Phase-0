function cocok(str){
    var kanan = '';
    var kiri = '';
    var lain = '';
    for(var i = 0; i < str.length; i++){
        if(str[i] == '('){
            kiri += str[i];
        }
        else if(str[i] == ')'){
            kanan += str[i];
        }
        else{
            lain += str[i]
        }   
    }
    if(str[0] != '(' || str[str.length-1] != ')') return false;
    return str.length > 100 ?  false : kanan.length == kiri.length && lain.length == 0 ? true : false;
}

console.log(cocok('(())((()aa())())')) //true
console.log(cocok(')')) // true
console.log(cocok('((((((((((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))))))))))))'))
console.log(cocok(')(()))'))
console.log('((((((((((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))))))))))))'.length)