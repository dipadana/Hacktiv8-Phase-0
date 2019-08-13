// Total Digit Rekursif
function totalDigitRekursif(number) {
    
    var arr = String(number)

    var length = arr.length-1;

    console.log(arr);

    if(arr.length == 1){
        return arr[length];
    }
    else{
        return eval(arr[0] + '+' +totalDigitRekursif(arr.slice(1)));
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5