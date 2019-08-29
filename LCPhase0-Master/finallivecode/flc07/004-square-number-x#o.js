/**

  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
  - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'
  - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]
  output:
          [
            [x, o, x],
            [o, x, #],
            [x, #, x]
          ]

  Contoh 2:
  ==========
  input: 4
  proses:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]
  output:
        [
          [ x, o, x, # ],
          [ #, x, o, x ],
          [ x, o, x, # ],
          [ #, x, o, x ]
        ]


NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'

**/


function squareNumber(num) {}


console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [ [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, #, x, o, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, o ] ]

console.log(squareNumber(2)); // Minimal input adalah 3






















// function squareNumber(num) {

//   if(num < 3){
//     return "Minimal input adalah 3"
//   }

//   var result = [];
//   var counter = 1;
//   for (var i = 0; i < num; i++) {
//     // console.log(i)
//     result.push([])
//     for (var j = 0; j < num; j++) {
//       if(i%2 === 0){
//         result[i].push(j+counter)
//       } else if(i%2 === 1){
//         result[i].unshift(j+counter)
//       }
//     }
//     counter += num
//   }

//   for (var k = 0; k < result.length; k++) {
//     // console.log(result[i])
//     for (var m = 0; m < result[k].length; m++) {
//       // console.log(result[k][m])
//       var numbers = result[k][m];
//       if(numbers%4 === 0){
//         result[k][m] = "#"
//       } else if (numbers%2 === 1){
//         result[k][m] = "x"
//       } else if (numbers%2 === 0){
//         result[k][m] = "o"
//       }
//     }
//   }
//   return result
// }