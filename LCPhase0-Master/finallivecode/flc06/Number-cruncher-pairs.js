/*
-------------------
The Number Cruncher
-------------------
PROBLEM
========
Disediakan sebuah function numberCruncher yang bertugas untuk menerima dua parameter
berupa array of number, dan mengembalikan array baru yang merupakan hasil perkalian angka di kedua array tersebut. 
Apabila pada array pertama tidak memiliki pasangan indeks yang sama pada array kedua (atau sebaliknya) maka akan dikalikan dengan angka 0.
Kemudian, dari setiap nilai di dalam array tersebut, ambil yang nilainya ganjil, kemudian kalikan semua nilai ganjil tersebut dan return hasil perkalian ganjilnya.


Pola
----
input: [x, y, z, a, b] dan [d, e, f, g]
proses:
[
  (x * d)
  (y * e)
  (z * f)
  (a * g)
  (b * 0) --> karena b tidak memiliki pasangan di array kedua
]

Contoh
-------
Input: [ 3, 5, 2 ] dan [ 7, 5, 4 ]
Proses:
=> [ (3 * 7) , (5 * 5), (2 * 4) ]
=> [ 21, 25, 8 ]
=> nilai ganjil: 21 dan 25
=> 21* 25
Output: 525


Input: [ 1, 2, 3, 2 ] dan [ 3, 5 ]
Proses:
=> [ (1 * 3), (2 * 5), (3 * 0), (2 * 0) ]
=> [ 3, 10, 0, 0 ]
=> nilai ganjil: 3
Output: 3

Input: [4, 5, 8, 2] dan [9, 1, 2, 4, 9, 2]
Proses:
=> [ 63, 5, 16, 15, 0, 0 ]
=> nilai ganjil: 63, 5, 15
=> 63 * 5 * 15
Output: 4725

RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!
- tidak boleh menggunakan .eval
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE!

ALGORITHM
1. if each parameter has the value of 0 or empty, return 0
2. create a new variable with the value of array
3. nested loop through the two given arrays
4. jika salah satu dari angka tidak memiliki pasangan maka akan dikalikan dengan angka 0
5. push kedalam array dari step 2 
6. looping kembali array dari step 2 untuk mengecek apakah ada angka ganjila atau tidak
7. jika terdapat angka ganjil maka akan kita kembali proses dengan dikalikan dengan angka yang sesama ganjil
8. return the result

*/

function multiplyTheOdds(arrOperand1, arrOperand2) {

}



console.log(multiplyTheOdds([3, 5, 2], [7, 5, 4])); //525
console.log(multiplyTheOdds([1, 2], [1])); //1
console.log(multiplyTheOdds([1, 2, 3, 2], [3, 5])); //3
console.log(multiplyTheOdds([7, 5, 8, 3], [9, 1, 2, 5, 9, 2])); //4725
console.log(multiplyTheOdds([], [])); //0

  



















  // function multiplyTheOdds(arrOperand1, arrOperand2) {

  //   if(!arrOperand1.length || !arrOperand2.length){
  //     return 0;
  //   }
  
  //   var arr = [];
  
  //   for (var i = 0; i < arrOperand1.length; i++) {
  //     // console.log(arrOperand2[i])
  //     for (var j = 0; j < arrOperand2.length; j++) {
  //       if(i === j){
  //         arr.push(arrOperand1[i] * arrOperand2[j]);
  //       }
  //     }
  //   }
  //   // console.log(arr)
  
  //   var result = 1
  //   for(var k = 0; k < arr.length; k++){
  //     if(arr[k]%2 === 1){
  //       result *= arr[k];
  //     }
  //   }
  
  //   return result;
    
  // }



  // // your code here
  // if (arrOperand1[0] === undefined && arrOperand2[0] === undefined) {
  //   return 0;
  // }
  
  // const output = [];
  
  // for (let i=0; i< arrOperand1.length; i++){
  //     for (let j=0; j< arrOperand2.length; j++){
  //       if (i === j) {
  //         output.push(arrOperand1[i] * arrOperand2[j]);
  //      }
  //    } 
  //  }
  // //console.log(output);
  
  // let total = 1;
  // for (let p=0; p< output.length; p++){
  //   if (output[p] % 2 !== 0) {
  //     total *= output[p];
  //   }
  // }
  //   return total;
