/*
================
Recursive - Hanya Bilangan Terbagi Nol
================

dividableRecursive adalah sebuah function yang menerima dua parameter berupa array dan num.
function akan mereturn sebuah sebuah number yang hanya sisa baginya nol dari bilangan num

[RULE]
- Wajib menggunakan recursive
- Dilarang menggunakan regex .match dan lainnya!
                    
*/

function dividableRecursive (array, num) {}


// DRIVER CODE
console.log(dividableRecursive([66 , 33 , 55 , 44 , 11], 3)) // 66 33
console.log(dividableRecursive([123 , 222 , 100 , 50 , 32], 2)) // 222 100 50 32
console.log(dividableRecursive([125 , 500 , 201 , 202 , 66], 5)) // 125 500
console.log(dividableRecursive([66 , 33 , 55 , 44 , 132], 6)) // 66 132













































// function dividableRecursive (array, num) {
//   // // Only Code Here
//   // let result = []
//   // if (array.length === 0){
//   //   return ''
//   // }
//   // // else {
//   //   if(array[0] % num == 0){
//   //     result.push(array[0])
//   //     return result + " " + dividableRecursive(array.slice(1), num)
//   //   }
//   //   else {
//   //     return dividableRecursive(array.slice(1), num)
//   //   }
//   //   // }
//   //   // console.log('test')
//   if ( array.length === 0) {
//     return ''
//   }
//   var temp = ''
//   if ( array[0] % num === 0) {
//     temp += array[0]
//     return temp + ' ' + dividableRecursive(array.slice(1), num)
//   }
//   else {
//     return temp + dividableRecursive(array.slice(1),num)
//   }
// }