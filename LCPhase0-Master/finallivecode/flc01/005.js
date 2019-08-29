/*
=============
Toko Kopinyaa
=============

[INSTRUCTIONS]
Toko Kopinyaa adalah kedai kopi yang melayani pelanggannya sesuai menu andalan yang dimilikinya.
Adapun menu yang tersedia di kedai kopinyaa adalah:
Coldbrew, Coffeenyaa, Javachino

Menu di atas harus menggunakan recipe andalan rahasiannya, sebagai berikut (ssst ini rahasia ya):
<menu: recipe1, recipe2, harga>
- Coldbrew: 2 sugar, 2 kopi, 30000
- Coffeenyaa: 1 sugar, 3 kopi, 5000
- Javachino: 3 sugar, 1 kopi, 40000

setiap harinya, tokoKopinya selalu re-stock bahannya:
30 sugar dan 30 kopi

Kita diminta untuk membuat aplikasi laporan penjualannya setiap harinya

Function akan menerima array yang berisikan object pembeli (waktu pembelian, menu yang ingin dibeli dan jumlah menu yang dibelinya). Jika stock recipe kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli menu tersebut.

Function profitCalculator akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek menu dari toko Kopinyaa: 
info nama menu, waktu pembelian, total profit, total berapa kopi yang dibeli

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
*/

function profitCalculator(buyer) {

}



// TEST CASES
console.log(profitCalculator([{waktu: '08:00', menu: 'Coldbrew', amount: 2}, {waktu: '09:00', menu: 'Coffeenyaa', amount: 5}, {waktu: '15:00', menu: 'Javachino', amount: 2}]));
// [ { menu: 'Coldbrew', time: [ '08:00' ], profit: 60000, total: 2 },
//   { menu: 'Coffeenyaa', time: [ '09:00' ], profit: 250000, total: 5 },
//   { menu: 'Javachino', time: [ '15:00' ], profit: 80000, total: 2 } ]

console.log(profitCalculator([{waktu: '08:00', menu: 'Coldbrew', amount: 3}, {waktu: '09:00', menu: 'Coldbrew', amount: 5}, {waktu: '10;00', menu: 'Coffeenyaa', amount: 1}, {waktu: '12:00', menu: 'Coffeenyaa', amount: 10}, {waktu: '15:00', menu: 'Javachino', amount: 1}]));
// [ { menu: 'Coldbrew', time: [ '08:00', '09:00' ], profit: 240000, total: 8 },
//   { menu: 'Coffeenyaa', time: [ '10;00' ], profit: 50000, total: 1 },
//   { menu: 'Javachino', time: [ '15:00' ], profit: 40000, total: 1 } ]

console.log(profitCalculator([{waktu: '14:00', menu: 'Coffeenyaa', amount: 100}]));
// // [ { menu: 'Coldbrew', time: [], profit: 0, total: 0 },
// //   { menu: 'Coffeenyaa', time: [], profit: 0, total: 0 },
// //   { menu: 'Javachino', time: [], profit: 0, total: 0 } ]

console.log(profitCalculator([]));
// //[]





































// function profitCalculator(buyer)  {
//   var kopi = [{menu : 'Coldbrew', sugar : 2, kopi : 2, price : 30000, stokKopi : 30, stokSugar : 30},
//               {menu : 'Coffeenyaa', sugar : 1, kopi : 3, price : 50000, stokKopi : 30, stokSugar : 30},
//               {menu : 'Javachino', sugar : 3, kopi : 1, price : 40000, stokKopi : 30, stokSugar : 30}
// ]   
//     if ( buyer.length === 0 ) {
//       return []
//     }
//     var result = []
//     for ( var i = 0; i < kopi.length; i++ ) {
//       var obj = {}
//       var arrayTime = []
//       var totalProfit = 0
//       var totalDibeli = 0
//       for ( var j = 0; j < buyer.length; j++ ) {
//         obj.menu = kopi[i].menu
//         if ( buyer[j].menu === kopi[i].menu  ) {
//           kopi[i].stokKopi -= buyer[j].amount * kopi[i].kopi
//           kopi[i].stokSugar -= buyer[j].amount * kopi[i].sugar
//           if ( kopi[i].stokKopi > kopi[i].kopi &&  kopi[i].stokSugar > kopi[i].sugar ) {
//             arrayTime.push(buyer[j].waktu)
//             totalProfit += buyer[j].amount * kopi[i].price
//             totalDibeli += buyer[j].amount

//           }
//         }
//         obj.time = arrayTime
//         obj.profit = totalProfit
//         obj.total = totalDibeli
//       }
//       result.push(obj)
//     }
//     return result
  
// }