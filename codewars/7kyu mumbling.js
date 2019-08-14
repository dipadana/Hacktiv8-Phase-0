function nearestSq(s){
    var temp = '';
    var temp2 = [];
    for(var i = 0; i < s.length; i++){
        for(var j = 0; j <= i; j++){
            if(j == 0){
                temp += s[i].toUpperCase();
            }
            else{
                temp += s[i].toLowerCase();
            }
        }
        temp2[i] = temp;
        temp = '';
    }
    return temp2.join('-');
}


console.log(nearestSq('HbideVbxncC'));


// console.log(Math.round(Math.sqrt(13)));