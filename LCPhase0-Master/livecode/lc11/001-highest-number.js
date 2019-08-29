/*
==================================
Array Mastery: Highest Number
==================================
Nama:________
[INSTRUKSI]
Function highestNumber akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
highestNumber akan mengembalikan angka yang terbesar dari array tersebut.
[CONTOH]
input: [4, 2, 5, 1]
output: 5
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
- Dilarang menggunakan built in object (Math.min, Math.max, dsb)
*/

//self note: ini cari angka terbesar di dalam array!
function highestNumber(numbers) {
  var max = 0;
  for(var i = 0; i < numbers.length; i++){
    // console.log(numbers[i])
    if(numbers[i] > max){
      max = numbers[i];
    }
  }
  return max;
}

// TEST CASES
console.log(highestNumber([5, 2, 1, 4])); // 5
console.log(highestNumber([999, 5, 0, 1, 4, 998])); // 999
console.log(highestNumber([15, 32, 11, 14])); // 32
console.log(highestNumber([5, 4, 3, 2, 1, 0])); // 5
console.log(highestNumber([123, 321, 143, 313])); // 321