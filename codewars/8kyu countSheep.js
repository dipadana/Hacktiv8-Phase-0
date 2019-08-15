var countSheep = function(num){
    var output = '';
    for(var i = 1; i <= num; i++){
        output += i + ' sheep...';
    }
    return output;
}

console.log(countSheep(1))
console.log(countSheep(2))
console.log(countSheep(3))