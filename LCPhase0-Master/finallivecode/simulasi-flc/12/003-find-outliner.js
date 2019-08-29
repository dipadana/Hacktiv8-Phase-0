/*
================
findOutlier
================

[INSTRUCTIONS]

findOutlier adalah sebuah function yang menerima satu parameter berupa array yang berisi number.
function tersebut akan memeriksa angka mana saja yang berbeda dengan angka lain, perbedaannya dilihat dari ganjil atau genap.
dan function akan mereturn angka yang berbeda dengan angka lainnya.

jika tidak ada data pada array yang diinput, maka outpunya 'no number'

[EXAMPLE]

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
output: 11
karena hanya 11 yang ganjil, sisanya genap

findOutlier([160, 3, 1719, 19, 11, 13, 21])
output: 160
karena hanya 160 yang genap, sisanya ganjil

RULES:
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan Math.max, Math.min, .sort()
- Dilarang menggunakan spread syntax
- Dilarang menggunakan regex .match dan lainnya!

PSEUDOCODE:

start

STORE "ganjil" with the value of empty Array
STORE "genap" with the value of empty Array

IF array.length is empty THEN 
  DISPLAY "NO number!"

  ELSE 
    FOR LOOP index 0 to length of array
      IF array[i] mod 2 EQUALS TO 0 THEN 
        push array[i] to "genap"
      ELSE IF array[i] mod 2 EQUALS TO 1 THEN 
        push array[i] to "ganjil"
      END IF
    EXIT LOOP
  END IF

  IF genap.length EQUALS TO 1 THEN 
    DISPLAY genap[0]
  ELSE IF ganjil.length EQUALS TO 1 THEN
    DISPLAY ganjil[0]
  END IF

end of sequence

*/

function findOutlier(array) {}


console.log(findOutlier([2, 4, 6, 100, 4, 11, 8, 50])); // 11

console.log(findOutlier([160, 3, 1719, 19, 11, 13, 21])); // 160

console.log(findOutlier([])) // 'no number'












// function findOutlier(array) {

//   var ganjil = [];
//   var genap = [];

//   if(!array.length){
//     return "NO number!";
//   } else {
    
//     for(var i = 0; i < array.length; i++){
//       // console.log(array[i])
//       if(array[i]%2 === 0){
//         genap.push(array[i])
//       } else if (array[i]%2 === 1){
//         ganjil.push(array[i]);
//       }
//     }

//     if(genap.length === 1){
//       return genap[0];
//     } else if (ganjil.length === 1){
//       return ganjil[0];
//     }

//   }
// }