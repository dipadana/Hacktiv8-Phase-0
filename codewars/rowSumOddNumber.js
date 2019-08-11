function rowSumOddNumbers(n) {
    var output = [];
    var sum = 0;
    var k = 1;
    for(var i = 0; i < n; i++){
        var temp = [];
        for(var j = 0; j <= i; j++){
            if(k%2 != 0){
                temp.push(k);
            }
            k+=2;
        }
        output.push(temp)
    }

    for(var k = 0; k < output[n-1].length; k++){
        sum += output[n-1][k];
    }
    return sum;
}

console.log(rowSumOddNumbers(42)); // 8