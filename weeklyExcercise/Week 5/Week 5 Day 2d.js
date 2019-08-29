// Total Digit Rekursif
function totalDigitRekursif(number){ 
    // Merubah angka yang masuk menjadi string,
    // agar bisa diakses indeksnya.
    var arr = String(number)
    var length = arr.length-1;

    // Ketika data yang masuk hanya berupa satu angka,
    // maka data tersebut akan direnturn
    if(arr.length == 1){
        return arr[length];
    }

    // Jika data tersebut lebih dari satu, 
    // maka fungsi rekursif akan dijalankan
    else{
        // digunakannya eval agar bisa menghitung proses kalkulasi yang berupa string
        return eval(arr[0] + '+' +totalDigitRekursif(arr.slice(1)));
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5