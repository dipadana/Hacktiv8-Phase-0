function sort(str){
    var arr =  str.split(' ');
    var numberPattern = /\d+/g;
    var num = [];
    var output = []

    for(var i = 0; i < arr.length; i++){
        num.push(Number(arr[i].match(numberPattern)));
    }
    num.sort(function(value1, value2) { return value1 > value2 })

    for(var i = 0; i < num.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(num[i] == arr[j].match(numberPattern)){
                output.push(arr[j])
            }
        }
    }
    
    return(output.join(' '))
    
}

console.log(sort("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est"
console.log(sort("4of Fo1r pe6ople g3ood th5e the2" )) // "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(sort("")) // ""

