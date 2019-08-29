/*
============
Hapus Simbol
============

Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa string.
Function akan me-return string yang telah bersih dari berbagai simbol, hanya menyisakan a-z dan angka 0-9.

RULES:
- DILARANG menambahkan parameter baru
- DILARANG menggunakan built in function .indexOf atau .include
- DILARANG menggunakan REGEX
*/
 
// function hapusSimbol(str) {
//   var append = '';
//   for (var i=0; i <str.length; i++) {
//     if(!cekSimbol(str[i])) {
//       append += str[i];
//     }
// 	} return append;
// }

// function cekSimbol(char) {
//   if (+char || char === '0') return false; // number pass
//   if(!(char >= 'a' && char <= 'z')) return true; 
// }

function hapusSimbol(str) {
  var result = '';

  for(var i = 0; i < str.length; i++){
    if(str[i] >= 'a' && str[i] <= 'z' || Number(str[i])>= 0 && str[i] !== ' ' || str[i] >= 'A' && str[i] <= 'Z'){
      result += str[i]
    }
  }
  return result
}


console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100