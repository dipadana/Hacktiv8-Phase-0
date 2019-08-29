/*
================
Piramida Array
================
Name :_____________

[INSTRUCTIONS]
piramidaArray adalah sebuah function yang menerima satu parameter berupa number.
function akan membuat array sebanyak number yang diberikan, dan akan mereturn urutan angka sebanyak angka tersebut di dalam array
Jika parameter tersebut berisikan 0 atau bukan angka, maka function akan mereturn angka 0

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.


[EXAMPLE]
piramidaArray(2)
output: [ [ 1 ] , [ 2, 2 ] ]

*/
function piramidaArray(number) {}


console.log(piramidaArray(2)); // [ [], [ 1 ] ]
console.log(piramidaArray(5)); // [ [], [ 1 ], [ 2, 2 ], [ 3, 3, 3 ], [ 4, 4, 4, 4 ] ]
console.log(piramidaArray('A')); // 0
console.log(piramidaArray(4)); // [ [], [ 1 ], [ 2, 2 ], [ 3, 3, 3 ] ]
console.log(piramidaArray(0)); // 0
















  // function piramidaArray(number) {
  //   if(number === "A"){
  //     return 0
  //   }
  
  //   var result = [[]];
  //   var temp = []
  //   for (var i = 1; i < number; i++){
  //     // console.log(i)
  //     // result.push([i])
  //     for (var j = 1; j <= i; j++) {
  //       // console.log(j)
  //       temp.push(i)
  //     }
  //     result.push(temp)
  //     temp = []
  //   }
  //   return result
  // }



  //hedya

  // // console.log(typeof(number));
  
  // if (number === 0 || typeof(number) !== typeof(131)) { // angka 131 bisa diganti apa aja
  //   return 0;
  // }
  // else {
  //   var result = [[]];
  //   var temp = [];
  //     for (var i=1; i<number; i++) {
  //       // console.log(i);
  //       for (var j=1; j<=i; j++) {
  //         temp.push(i)
  //       }
  //       result.push(temp);
  //       temp = [];
  //     }
  //     return result;
  //   }

