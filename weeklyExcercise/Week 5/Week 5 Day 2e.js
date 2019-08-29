// Kali Terus Rekursif
function kaliDigitRekursif(angka){
    // Memiliki algoritma yang sama dengan totalDigitRekursif,
    // tetpi '+' diganti dengan '*'
    var arr = String(angka)
    var length = arr.length-1;
    if(arr.length == 1){
        return arr[length];
    }
    else{
        return eval(arr[0] + '*' + kaliTerusRekursif(arr.slice(1)));
    }
}

function kaliTerusRekursif(angka) {
    // Mengkonversi data menjadi string, agar bisa diakses panjang datanya
    var arr = String(angka)

    // Ketika panjang data yang masuk adalah satu, 
    // maka inputan data akan langsung direturn 
    if(arr.length == 1){
        return angka;
    }

    // Tapi ketika data yang masuk memiliki lebih dari satu digit, 
    // maka fungsi rekursif akan langsung dijalankan
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