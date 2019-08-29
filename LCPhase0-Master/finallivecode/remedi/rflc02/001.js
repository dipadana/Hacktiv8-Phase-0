// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawSymbolicColsBox yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus kelipatan 3. berurut sebagai berikut:

contoh 1 (drawThreeColsBox(3)):
@ $ *
$ @ *
@ $ *

contoh 2 (drawThreeColsBox(5)):
@ $ * $ @
* @ $ * $
@ * @ $ *
$ @ * @ $
* $ @ * @
contoh 3 (drawThreeColsBox(1)):
@
Note: pola symbol harus dimulai dari 1, dan setiap symbol diberikan spasi.
tinggi kotak sesuai dengan nilai variable height!

[RULE]
- WAJIB menggunakan pseudocode

*/

function drawSymbolicColsBox(num) {}


drawSymbolicColsBox(3);
drawSymbolicColsBox(5);
drawSymbolicColsBox(1);






















// function drawSymbolicColsBox(num) {
//   // your code here
//   var i = 1
//   var gantiBaris = num
//   var temp = ''
//   while ( i <= num * num) {
    
//       if ( i % 2 === 1 && i % 3 !== 0) { // ganjil + @
//         temp += '@' + ' '
//       }
//       else if ( i % 2 === 0 && i % 3 !== 0) {
//         temp += '$' + ' '
//       }
//       else if ( i % 3 === 0) {
//         temp += '*' + ' '
//       }
//       if ( temp.length === gantiBaris * 2 ) {
//         console.log(temp)
//         temp = ''
//         // gantiBaris *= 2 
//       }

    
//     i++
//   }
// }