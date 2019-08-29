/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.

Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan

Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
Contoh
-------
1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2
2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
   output: Ooops, you die. You got 3 villains
3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you die. You got 2 villains
*/

// Algoritma / Pseudocode here..
/*
algoritma:
1. create a variable with the value of 0
2. looping 
3. count each traps and assign it to step 1

*/

function test(array) {

    var traps = 0;
    var villains = 0;

    for (var i = 0; i < array.length; i++) {
        // console.log(array[i])
        if(array[i] === "@"){
            traps += 1
            if(traps === 3){
                return "oops you just died, you got " + villains + " Villains!";
            }
        }
        if(array[i] === "Villain"){
            villains += 1
        }
    }

    if(traps < 3){
        return "Nice job! You got " + villains + " Villains!"
    }
}


console.log(test(['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']));
console.log(test(['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']));
console.log(test(['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']));

// 11 mins