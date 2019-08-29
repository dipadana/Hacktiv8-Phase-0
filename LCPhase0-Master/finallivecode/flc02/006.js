/**

******************************
PAIR PRIME RECURSIVE
******************************

Diberikan sebuah function pairPrime yang memiliki satu parameter bertipe number.
Function ini akan mengembalikan jumlah pasangan prima dimana pasangan prima tersebut
adalah gabungan index 0 + index terakhir, index 1 + index terakhir - 1, dst.
JIKA angka tidak memiliki pasangan MAKA dipasangkan dengan angka 1

Contoh 1:
----------
input: 2345
output: 0
penjelasan:
  - index[0] + index[terakhir] => 25
  - index[1] + index[terakhir - 1] => 34

  karena pasangan prima tidak ditemukan maka output 0

Contoh 2:
---------
input: 13351
output: 2
penjelasan:
  - index[0] + index[terakhir] => 11
  - index[1] + index[terakhir-1] => 35
  - karena index[2] merupakan index[terakhir-2] (tidak memiliki pasangan)
    maka angka ini akan dipasangkan dengan angka 1 => 31

  karena pasangan prima adalah 11 dan 31

Contoh 3:
----------
input: 2375
output: 1
penjelasan:
  - index[0] + index[terakhir] => 25
  - index[1] + index[terakhir-1] => 37

  karena pasangan prima adalah 37



RULES
=====
  - Wajib menggunakan metode rekursif
  - Dilarang menambahkan parameter baru
  - PROSES LOOP HANYA BOLEH 1 KALI
  - Dilarang membuat variable di luar function pairPrime
  - Dilarang mengubah tipe data parameter saat function dipanggil kembali
  - Dilarang membuat function didalam function yang bertujuan untuk melakukan rekursif

**/

function pairPrime(num) {
  // your code here
}


console.log(pairPrime('2345')) // 0
console.log(pairPrime('2375')) // 1
console.log(pairPrime('13351')) // 2
console.log(pairPrime('42131')); // 3
