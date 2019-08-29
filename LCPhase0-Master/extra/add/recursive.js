// 1. RECURSIVE FUNCTION:
function factorial(num) {
    // 1. ada BASE CASE:
    // console.log(num);
    
    // 2. Ada LIMIT:
    if (num === 1) {
        return 1;
    }
    else {
        // 3. pake var baru - biar gampang dibaca!
        var numBaru = num-1;
        return num * factorial(numBaru); 
    }
}

console.log(factorial(5));
// test: 5*4*3*2*1

// 2. function1 di dalam function2 
        // -> kalau panggil function1 diluar function2 -> TIDAK BISA
function tambah(angka) {
    console.log(angka);
    function kata(kata) {
        console.log(kata);
    }
    kata('kata')
}

console.log(tambah(65));
// kata('kata') // ERROR


// 3. RECURSIVE STRING: 
function balikKata(str) {
    // index length-1, length-2, etc.
    if (str.length === 1) {
        return str; // gmn?
    } else {
        var kata = str[str.length-1]; // o / l / l / e / h (str.length === 1)
        var newStr = str.substring(0, str.length-1); // hell / hel / he / h ?
        return kata + balikKata(newStr); 
    }
}

var balik_kata = balikKata('hello');
console.log(balik_kata);



function filterVocal(str) {
    if (str.length === 1) {
        return str;
    }
    else {
        var kata = str[0];
        var modifStr = str.substring(1)
        // validasi nya (conditional if)
        if (kata !== 'a' && kata !== 'i' && kata !== 'u' && kata !== 'e' && kata !== 'o') {
            return kata + filterVocal(modifStr)
        }
        return '' + filterVocal(modifStr); // coba pake else!
    }
}

console.log(filterVocal('abcdefghij')); // bcdefghj


function hitung(str, letter) {
    // BASE CASE: 
    if (str.substring(0,1) === letter) {
        return str.indexOf(letter) + 1;
    }
    else {
        // LOOPING NYA:
        var modifStr = str.substring(1);
        // console.log(modifStr);
        return 1 + hitung(modifStr, letter);
    }
}

console.log(hitung('abcde', 'c')); // 3


function hitung2(str, letter) {
    var huruf = str[0];
    if (huruf === letter) {
        return 1;
    }
    else {
        var modifStr = str.substring(1);
        return 1 + hitung2(modifStr, letter);
    }
}

console.log(hitung2('abcde', 'd')); // 4


/*
index + 1
string.substring(1)



- syarat recursive:
    - parameter
    - return
    - base case

- !!!:
    - tentuin dulu base case
    - tentuin: ex: return (resultnya) + functionName(dikurangin 1) 
    - jadi nanti ada: 
            1. result akhir yg ditambah terus && 
            2. yang nilai awal yang akan dikurang terus   
*/

// recursive, dibawah jg recursive, tp ga brenti, dna wloupung nama functionnya beda
// function budi() {
//     console.log('test');
//     caca();
// }

// function caca() {
//     console.log('test2');
//     budi()
// }
