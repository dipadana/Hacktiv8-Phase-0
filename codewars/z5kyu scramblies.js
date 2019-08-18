function mix(str1, str2){
    var temp = []
    for(var i = 0; i < str2.length;i++){
        if(str1.indexOf(str2[i]) == -1){
            return false;
        }
        temp.push(str1.indexOf(str2[i]))
    }
    temp.sort(function(value1, value2) { return value1 - value2 })
    for(var i = 0; i < temp.length; i++){
        if(temp[i] == temp[i+1]){
            return false
        }
    }
    return true;
}

console.log(mix('rkqodlw', 'woorld')); //False
console.log(mix('cedewaraaossoqqyt', 'codewars')); //True
console.log(mix('katas', 'steak')); //false
console.log(mix('poqmqvkoubgyva', 'qompkvq')); //false
