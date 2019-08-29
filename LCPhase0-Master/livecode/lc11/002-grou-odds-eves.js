/*
==================================
Array Mastery: Group Odd Evens
==================================
Nama:________
[INSTRUKSI]
Function groupOddEven akan menerima satu parameter berupa array yang berisi number.
Function akan mengelompokkan setiap number yang ganjil (odd) dan setiap number yang genap (even),
dan akan mereturn sebuah string dengan format berikut:
"ODDS: <OddNum1>,<OddNum2>,<OddNum3> EVENS: <EvenNum1>,<EvenNum2>,<EvenNum3>"
aturan:
  - Apabila tidak ada angka ganjil, hanya tampilkan:
  "EVENS: <EvenNum1>, <EvenNum2>"
  - Apabila tidak ada angka genap, hanya tampilkan:
  "ODDS: <OddNum1>, <OddNum2>"
  - Apabila tidak ada angka sama sekali, tampilkan string kosong!
  - Angka tidak perlu diurutkan!
[CONTOH]
input: [1, 5, 8, 2, 3]
output: "ODDS: 1, 5, 3 EVENS: 8, 2"
input: [1, 1, 1]
output: "ODDS: 1, 1, 1"
input: [2, 8, 10]
output: "EVENS: 2, 8, 10"
[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!

pseudocode :

STORE "odd" with the value of array
STORE "even" with the value of array

  FOR LOOP students 
    IF students[i] mod 2 equal to 0
      even push students[i]
    ELSE IF students[i] mod 2 equals to 1
      odd push students[i]

*/

function groupOddEven(students) {

  var odd = []; //ganjil
  var even = []; //genap

  for(var i = 0; i < students.length; i++){
    // console.log(students[i])
    if(students[i]%2 === 0){
      even.push(students[i])
    } else if (students[i]%2 === 1){
      odd.push(students[i])
    }
  }
  // console.log(even)

  if(odd.length > 0 && even.length > 0){
    return "ODD: " + odd + " EVENS: " + even;
  } else if (odd.length === 0 && even.length > 0){
    return "EVENS: " + even;
  } else if(odd.length > 0 && even.length === 0){
    return "OODS: " + odd;
  }

}

// TEST CASES
console.log(groupOddEven([1, 5, 8, 2, 3])); // "ODDS: 1, 5, 3 EVENS: 8, 2"
console.log(groupOddEven([1, 1, 1])); // "ODDS: 1, 1, 1"
console.log(groupOddEven([2, 8, 10])); // "EVENS: 2, 8, 10"
console.log(groupOddEven([2, 111])); // "ODDS: 111 EVENS: 2"
console.log(groupOddEven([])); // ""