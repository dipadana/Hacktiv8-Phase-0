/*
===============
Shortest Word
===============

[INSTRUCTIONS]
shortestWords adalah sebuah function yang menerima satu parameter berupa string,
di mana string tersebut adalah sebuah kalimat dengan rangkaian kata-kata.
function akan mereturn sebuah array yang terdiri dari kata dengan jumlah huruf paling sedikit di kalimat tersebut.

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan indexOf, match, reduce, map dan regex

[EXAMPLE]
input: Do you want to become a great coder.
proses: panjang kata paling sedikit dalam kalimat tersebut: 1, maka akan mencari kata dengan huruf tersebut
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
proses: panjang kata paling sedikit dalam kalimat tersebut: 3, maka akan mencari kata dengan huruf tersebut
output: ['you', 'it!']
*/

function shortestWords(words) {

}

// 

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!'] \\ kalo keluarnya ["You"] boleh ga?
console.log(shortestWords('I am diligent')); // ['I']
console.log(shortestWords('Apapun hasilnya, kita sudah berusaha, serahkan saja')); // ['kita', 'saja']
































// function shortestWords(words) {
//   // Code here
//   // var hurufKecil = words.toLowerCase()
//   var array = words.split(' ')
//   // console.log(array)
//   var panjangKata = array[0].length
//   for ( var i = 0; i < array.length; i++) {
//     if (panjangKata > array[i].length) {
//       panjangKata = array[i].length
//     }
//   }
//   var temp = []
//   for ( var i = 0; i < array.length; i++ ) {
//     if ( array[i].length === panjangKata) {
//       temp.push(array[i])
//     }
//   }
//   // console.log(temp)
//   var hasil = []
//   for ( var i = 0; i < temp.length; i++) {
//     for ( var j = 0;j < temp.length; j++) {
//       if ( i !== j ) {
//         if ( temp[i] !== undefined || temp[j] !== undefined) {
//           if ( temp[i] === temp[j]) {
//             temp[j] = undefined
//           }
//         }
//       }
//     }
//   if (temp[i] !== undefined) {
//     hasil.push(temp[i])
//   }  
//   }
//   console.log(hasil)
  
// }