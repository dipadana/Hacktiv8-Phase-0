// Kali Terus Rekursif

function kaliDigitRekursif(angka){
    var arr = String(angka)

    var length = arr.length-1;

    console.log(arr);

    if(arr.length == 1){
        return arr[length];
    }
    else{
        return eval(arr[0] + '*' + kaliTerusRekursif(arr.slice(1)));
    }
}

function kaliTerusRekursif(angka) {
    var arr = String(angka)
    console.log(angka)
    console.log(arr.length)
    if(arr.length == 1){
        return angka;
    }
    else{
        return kaliTerusRekursif(kaliDigitRekursif(angka));
    }
}



// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6