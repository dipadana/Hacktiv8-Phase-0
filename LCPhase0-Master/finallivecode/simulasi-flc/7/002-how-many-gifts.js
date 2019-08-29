/**

How Many Gifts
==============

Anastasia meminta Sergei untuk membeli daftar oleh-oleh saat trip berikutnya, sekarang Sergei ingin tahu berapa jumlah oleh-oleh PALING BANYAK yang bisa dia beli.

Implementasikan function dibawah untuk membantu Sergei:

function howManyGifts(maxBudget, gifts)
  Parameter pertama adalah budget Sergei, yang kedua adalah sebuah Array yang berisi harga setiap oleh-oleh. Function ini harus mengembalikan nilai yang mewakili jumlah maksimum oleh-oleh yang Sergei dapat beli.


Contoh:
Maximum budget: 25000
Daftar harga oleh-oleh: [20000, 5000, 10000, 6000, 4000 ]
Maka akan mengembalikan 4 karena bisa membeli oleh-oleh dengan harga 5000, 10000, 6000, 4000

Asumsi:
- Semua angka akan memiliki nilai >= 0, dan array tidak akan pernah kosong.

RULE:
 WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

*/
/*PSEUDOCODE
  STORE COUNTER WITH  0
  STORE TOTAL BARANG WITH 0
  SORT GIFTS WITH NILAI TERKECIL KE NILAI TERBESAR
  STORE URUTAN BARANG WITH RESULT SORT GIFTS

  WHILE MAX BUDGET >= URUTAN BARANG[COUNTER]
    DO MAX BUDGET = MAX BUDGET - URUTAN BARANG [COUNTER]
    DO TOTAL BARANG = TOTAL BARANG + 1
    DO COUNTER = COUNTER + 1


  RETURN TOTAL BARANG
*/

function howManyGifts(maxBudget, gifts){}


console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
console.log(howManyGifts(100000, [20000, 20000, 20000, 20000, 20000])); // 5
console.log(howManyGifts(0, [10000, 3000])); // 0
























// function howManyGifts(maxBudget, gifts){

//   for(var i = gifts.length - 1; i >= 0; i--){
//     for(var j = 1; j <= i; j++){
//       if(gifts[j-1] > gifts[j]){
//         var temp = gifts[j-1];
//         gifts[j-1] = gifts[j];
//         gifts[j] = temp;

//       }
//     }
//   }
//   // return gift

//   var counter = 0;
//   var total = gifts[0];

//   if(maxBudget < gifts[0]){
//     return counter
//   }

//   for(var k = 0; k < gifts.length; k++){
//     if(total < maxBudget){
//       total += gifts[j];
//       counter++
//     }
//   }
//   return counter
// }