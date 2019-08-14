function pendulum(values) {
    values.sort(function(value1, value2) { return value2 - value1 });
    var output = [];
    var shift = 0;
    var front = 0;
    var back = values.length-1;
    if(values.length%2 == 0){
        for(var i = 0; i < values.length; i++){
            if(shift == 0){
                output[back] = values[i];
                back--;
                shift = 1;
            }
            else if(shift == 1){
                output[front] = values[i];
                front++;
                shift = 0;
            }
        }
    }
    if(values.length%2 != 0){
        for(var i = 0; i < values.length; i++){
            if(shift == 0){
                output[front] = values[i];
                front++;
                shift = 1;
            }
            else if(shift == 1){
                output[back] = values[i];
                back--;
                shift = 0;
            }
            
        }
    }
    return output;
}

console.log(pendulum([1,2,3,4,5])); // [5,3,1,2,4]
console.log(pendulum([1,2,3,4,5,6]));  // [5,3,1,2,4,6]
console.log(pendulum([49,30,39,30,40,44,43,48,47,50,42,48,33])); // [50,48,47,43,40,33,30,30,39,42,44,48,49]


