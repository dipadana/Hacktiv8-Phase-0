/*
===================================
Array Mastery: Multiply and Divide Operation
===================================
Nama:________
[INSTRUKSI]
Akan dijalankan sebuah operasi matematika dengan urutan kali (*) dan bagi (/).
Function multiplyDivide akan menerima satu parameter berupa array angka, dan memproses satu per satu angka tersebut.
Proses yang dilakukan adalah mengoperasikan setiap bilangan didalamnya, menggunakan simbol *, dan / berturut-turut.
Simbol akan berotasi kembali ke * jika operasi / sudah dilakukan, sampai semua angka selesai di proses.
Gambaran Proses:
0 * angka pertama / angka kedua * angka ketiga / angka keempat * angka kelima / angka keenam * ... (dan seterusnya)
Function akan mereturn hasil kalkulasi dari operasi tersebut YANG SUDAH DIBULATKAN.
Jika tidak ada angka yang diberikan, function akan me-return 0.

[CONTOH]
=================================
input: [1, 2, 3, 4, 5]
proses: 1 * 2 / 3 * 4  / 5
output (HARUS DIBULATKAN): 1
=================================
input: [5, 4, 3, 2, 1]
proses: 5 * 4 / 3 * 2 / 1
output (HARUS DIBULATKAN): 13
=================================
input: [1, 1, 1, 1]
proses: 1 * 1 / 1 * 1
output (HARUS DIBULATKAN): 1
=================================
input: []
output: 0
=================================

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan
  kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!

STRORE `number` with any number
STORE `bil` with 0

STORE `count` with 0

WHILE numbers of length is true DO
  IF numbers of count modulus 2 equal 0
    SET `bil` = `bil` * numbers of count
  ELSE
    SET `bil` = `bil` / numbers of count
  END IF
  SET `count` = `count` + 1
END WHILE 

return `bil`
*/

// function multiplyDivide(numbers) {
//   if(numbers.length == 0) {
//     return 0;
//   }

//   var bil0 = numbers[0];
//   for (var i = 1; i < numbers.length; i++) {
//     if(i % 2 == 0) {
//       bil0 = bil0 / numbers[i];
//     } else {
//       bil0 = bil0 * numbers[i];
//     }
//   }
//   return Math.round(bil0);
// }


function multiplyDivide(numbers) {

  if(numbers.length === 0){
    return 0
  }

  var result = numbers[0]
  for(var i = 1; i < numbers.length; i++){
    if(i%2 === 1){
      result *= numbers[i]
    }if(i%2 === 0){
      result /= numbers[i]
    }
  }
  return Math.round(result)
}


// TEST CASES
console.log(multiplyDivide([1, 2, 3, 4, 5])); // 1
console.log(multiplyDivide([5, 4, 3, 2, 1])); // 13
console.log(multiplyDivide([1, 1, 1, 3])); // 3
console.log(multiplyDivide([0, 10, 2, 5, 7])); // 0
console.log(multiplyDivide([])); // 0
