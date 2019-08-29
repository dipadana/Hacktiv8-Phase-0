/*
==========
GET PRIMES
==========

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
karena di-range angka 10 hanya bilangan 2, 3, 5 dan 7 saja yang merupakan bilangan prima

Contoh 2:

input: 44
output: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
karena di-range angka 44 hanya bilangan di atas saja yang merupakan bilangan prima


RULES:
- WAJIB membuat algoritma/pseudocode untuk program getPrime

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
*/


/*
1. Buat variabel array yang berfungsi untuk menyimpan data output
2. Buat sebuah fungsi (isPrime)untuk memeriksa apakah input adalah bilangan prima
3. Di dalam fungsi isPrime dilakukan loop yang memiliki variabel inisialisasi i = 2,
    kondisi i lebih kecil dari input angka, dan ekspresi i ditambah 1 untuk setiap perulangan
4. Di dalam loop dilakukan operasi modulo terhadap i oleh input, jika ada angka selain angka itu sendiri,
    yang menghasilkan 0 otomatis angka itu bukan prima, jadi keluar dari loop,
    dengan 'return false'
5. Di luar loop diberi catch-all return dimana jika angka lebih dari 1, dan lolos dari pengecekan,
    di dalam loop maka 'return true'
6. kembali ke fungsi getPrime, sekarang dapat dilakukan loop dengan init i = 0,
  kondisi i lebih kecil atau sama dengan input angka, dan i++ untuk setiap perulangan,
7. di dalam loop dipanggi fungsi isPrime dengan i sebagai parameternya
8. Jika isPrime dengan i adalah truthy maka i dimasukkan  ke dalam variabel output array.
9. di akhir fungsi akan mengembalikan variabel array tersebut, return output

*/


// function getPrime(num) {
//   // your code here
//   var res = [];
//   for(var i = 0; i <= num; i++) {
//     (isPrime(i)) ? res.push(i) : [];
//   }

//   function isPrime(number) {
//     for(var i = 2; i < number; i++) {
//       if(number % i === 0) {return false}
//     } return (number > 1)
//   }

//   return res;
// }

function getPrime(num) {
  // your code here
  var collect = [];

  for(var i = 2; i <= num; i++){
    var prime = true;
    for(var j = 2; j < i; j++){
      if(i%j === 0){
        prime = false
      }
    }
    if(prime === true){
      collect.push(i)
    }
  }
  return collect
}



console.log(getPrime(10)); // [ 2, 3, 5, 7 ]
console.log(getPrime(23)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
console.log(getPrime(44)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
console.log(getPrime(1)); // []
console.log(getPrime(0)); // []