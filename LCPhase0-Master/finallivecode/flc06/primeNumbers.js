/*
PROBLEM
=======
Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.
Contoh:
7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 11.
22 bukan bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

Deret bilangan prima
2, 3, 5, 7, 11, 13, 17, 19, 23, dst

Buatlah sebuah function getPrime dimana menerima sebuah parameter bertipe Number. 
Function tersebut mengembalikan/me-return array kumpulan deret bilangan prima sampai parameter tersebut.

Contoh 1:

input: 10
output: [ 2, 3, 5, 7 ]

//karena di-range angka 10 hanya bilangan 2, 3, 5 dan 7 saja yang merupakan bilangan prima

Contoh 2:

input: 44
output: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]

// karena di-range angka 44 hanya bilangan di atas saja yang merupakan bilangan prima


RULES:
- wajib membuat algoritma/pseudocode untuk program getPrime

note: pastikan tidak menggunakan sintaks javascript, tapi fokus ke logika

REMINDER ABOUT PSEUDOCODE
=========================
Contoh Pseudocode yang Kurang Tepat (tidak ada hubungan dengan soal):
var num
for i = 0 , i < 8, i++
  if i = 5
    num++

Contoh Pseudocode yang Benar (tidak ada hubungan dengan soal):
STORE num with any value
WHILE i < 8
  IF i equals to 5
    ADD num by 1

    ALGORITHM 
    1. create a variable with the value of array
    2. loop through the given numbers in parameter, mulai dari angka 2
    3. create new array with the value of 0
    4. nest another loop with the index of j is equal to 0 and smaller than index i, continue to the next step
    5. if index i and j is divisible and equals to 0 then add counter by 1
    6. if counter is equal to 2, push index i to array from step 1
    7. displat the result

    self note: 0 dan 1 bukan prima
*/

function getPrime(num) {

  var result = [];

  for(var i = 0; i <= num; i++){
    var counter = 0;
    for(var j = 0; j <= i; j++){
      if(i%j === 0){
        counter++
      }
    }
    console.log(counter, i)
    if(counter === 2){
      result.push(i)
    }
  }
  // return result
}

console.log(getPrime(10)); // [ 2, 3, 5, 7 ]
console.log(getPrime(23)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
console.log(getPrime(44)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
console.log(getPrime(1)); // []
console.log(getPrime(0)); // []

// 7 minutes 10 sec

  // // your code here
  //  var simpan = [];
  //  let counter =0;
  //   for(var i = 2; i <= num; i++){
  //       let counter = 0;
  //       for(j = 0; j<=i; j++){
  //         if(i % j === 0){
  //           counter++;
  //         }
  //       }
  //       if(counter === 2){
  //         simpan.push(i);
  //       }
  //   }
  // //console.log(simpan);
  // //console.log(simpan);
  // return simpan;
  


