/*
================
Galon Checker
================
Name :_____________

[INSTRUCTIONS]
galonChecker adalah sebuah function yang menerima satu parameter berupa array of string.
function tersebut akan menghitung jumlah galon yang penuh (F), setengah penuh (H) dan galon kosong (E)
dan function akan mereturn jumlah masing2 jenis galon dan total galon secara keseluruhan.

Adapun ketentuannya:
Full (F) = 1
Half (H) = 1/2
Empty (E) = 0

[RULE]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
galonChecker(['F','H','F'])
output: jumlah F: 2, jumlah H: 1, jumlah E: 0. Dan totalnya adalah: 2.5

PSEUDOCODE:

IF  array is empty THEN
  DISPLAY "NO data!!"
ELSE 
  STORE "countF" with the value of 0
  STORE "countH" with the value of 0
  STORE "countE" with the value of 0

    FOR LOOP index 0 to length of array
      IF array[i] EQUALS TO "F" THEN
        ADD "countF" by 1
      ELSE IF array[i] EQUALS TO "H" THEN
        ADD "countH" by 1
      ELSE IF array[i] EQUALS TO "E" THEN
        ADD "countE" by 1
      END IF
    EXIT LOOP

  STORE "total" = (countF * 1) + (countH*0.5) + (countE*0)

  DISPLAY "Jumlah F: " + countF + ", jumlah H: " + countH + ", jumlah E: " + countE + ". Dan totalnya adalah: " + total
*/



function galonChecker(array) {

}


console.log(galonChecker(['F','H','F']));
// jumlah F: 2, jumlah H: 1, jumlah E: 0. Dan totalnya adalah: 2.5
console.log(galonChecker(['H','H','F','F','E']));
// jumlah F: 2, jumlah H: 2, jumlah E: 1. Dan totalnya adalah: 3
console.log(galonChecker(['E','F','F','F','H']));
// jumlah F: 3, jumlah H: 1, jumlah E: 1. Dan totalnya adalah: 3.5
console.log(galonChecker(['E','H']));
// jumlah F: 0, jumlah H: 1, jumlah E: 1. Dan totalnya adalah: 0.5
console.log(galonChecker(['H','H','H','H']));
// jumlah F: 0, jumlah H: 4, jumlah E: 0. Dan totalnya adalah: 2
console.log(galonChecker([])); //NO DATA

// 7 minutes 13 sec






















// function galonChecker(array) {
  
//   if(!array.length){
//     return "No data!!"
//   } else {

//     var countF = 0;
//     var countH = 0;
//     var countE = 0;

//       for(var i = 0; i < array.length; i++){
//         // console.log(array[i])
//         if(array[i] === "F"){
//           countF++
//         } else if (array[i] === "H"){
//           countH++
//         } else if (array[i] === "E"){
//           countE++
//         }
//       }
//       // console.log(countE)
//       var total = (countF*1) + (countH*0.5) + (countE*0);

//       // console.log(total)
//       return "Jumlah F: " + countF + ", jumlah H: " + countH + ", jumlah E: " + countE + ". Dan totalnya adalah: " + total
//   }
// }