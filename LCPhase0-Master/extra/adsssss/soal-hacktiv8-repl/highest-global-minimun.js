/*
======================
Highest Global Minimum
======================

Name :_____________

[INSTRUCTIONS]

highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.


[CONSTRAINTS]
Hanya boleh menggunakan sintaks for/while dan if else untuk pemecahan masalah.
Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.


[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])

firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]

nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8

karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.
*/

function highestGlobalMinimum(firstArr, secondArr) {

  var num1 = firstArr[0];
  // console.log(num1)
  for (var i = 0; i < firstArr.length; i++) {
    // console.log(firstArr[i])
    if(num1 > firstArr[i]){
      num1 = firstArr[i];
    }
  }
  // console.log(num1)
  var num2 = secondArr[0];
  // console.log(num2)
  for (var j = 0; j < secondArr.length; j++) {
    if(num2 > secondArr[j]){
      num2 = secondArr[j];
    }
  }
  // console.log(num2)
  var result = 0;
  if(num1 < num2){
    result = num2
  } else {
    result = num1
  }
  return result
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5

//RIGHT, SO count each of the minimun of the array okay so this is gonna be easy peasy lemmon squeezy (i think)
// this is like the previous exercises from kak hedya (abit different) so you dont need to worry much

// 3 minutes 36 sec
