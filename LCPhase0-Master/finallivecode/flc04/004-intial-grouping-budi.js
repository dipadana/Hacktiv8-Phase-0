/*

================
Initial Grouping
================

Name : _________________

[INSTRUCTION]

Disediakan sebuah function initialGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
array dua dimensi.


[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke dalam array baru
Susun array baru sebagai berikut:
[
[ 'Budi', 'Badu' ],
[ 'Joni', 'Jono' ],
]

Setiap array dimensi kedua diawali dengan huruf depan yang mengelompokkan nama tersebut menjadi:

[
[ 'B', 'Budi', 'Badu' ],
[ 'J', 'Joni', 'Jono' ],
]

Kamu tidak perlu peduli dengan urutan alphabet atau nama siapa yang keluar terlebih dahulu!

[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!


function initialGrouping(studentsArr) {

}


console.log(initialGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*.
[
  [ 'B', 'Budi', 'Badu' ],
  [ 'J', 'Joni', 'Jono' ]
]
*/

console.log(initialGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'M', 'Mickey' ],
  [ 'Y', 'Yusuf' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ],
  [ 'G', 'Gong' ]
]
*/

console.log(initialGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'R', 'Rock', 'Rocker' ],
  [ 'S', 'Stone', 'Sticker' ],
  [ 'B', 'Brick' ]
]
*/

console.log(initialGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*.
[
  [ 'B', 'Budi', 'Badu' ],
  [ 'J', 'Joni', 'Jono' ]
]
*/

console.log(initialGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'M', 'Mickey' ],
  [ 'Y', 'Yusuf' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ],
  [ 'G', 'Gong' ]
]
*/

console.log(initialGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'R', 'Rock', 'Rocker' ],
  [ 'S', 'Stone', 'Sticker' ],
  [ 'B', 'Brick' ]
]
*/























// function initialGrouping(studentsArr) {
//   var obj = {};
//   var result = [];

//   for(var i = 0; i < studentsArr.length; i++){
//     // console.log(studentsArr[i][0])
//     if(obj[studentsArr[i][0]] === undefined){
//       obj[studentsArr[i][0]] = [studentsArr[i]]
//     } else {
//       obj[studentsArr[i][0]].push(studentsArr[i])
//     }
//   }
//   // console.log(obj)
//   var keys = Object.keys(obj);
//   var values = Object.values(obj)

//   // console.log(values)

//   for(var j = 0; j < keys.length; j++){
//     result.push([keys[j]]);
//     for(var k = 0; k < values[j].length; k++){
//       result[j].push(values[j][k])
//       // console.log(values[j][k])
//     }
//   }
//   return result
// }