/**
 Hapus Angka
-------------------------
Diberikan sebuah function hapusAngka dimana function tersebut menerima input parameter berupa string.
function tersebut akan membuang seluruh karakter berupa angka yang terdapat pada kata tersebut

contoh:

input: 'hacktiv8'
output: 'hacktiv'

input: '17 Agustus 1945'
output: 'Agustus'

RULES:
- WAJIB menyertakan algoritma/pseudocode (nilai akan dianulir jika tanpa algoritma/pseudocode)
- DILARANG MENGGUNAKAN method .split()
*/

// function hapusAngka(sentence) {
//   var hasil =''
//   for (let i = 0; i < sentence.length; i++) {
//     var temp = Number(sentence[i])
//     if(temp >=0){
//       hasil +=''
//     } else {
//       hasil +=String(sentence[i])
//     }
//   }
//   return hasil;
// }

//OR


//PSEUOCODE
// STORE and SAVE 'result' with empty String
// STORE and SAVE 'alphabet' with all character alphabet
//   LOOPING the 'sentence' 
//     LOOPING the 'alphabet' inside
//       IF value of 'sentence' equal to value of 'alphabet'
//         ADD 'result' with value of sentence
//   SHOW and DISPLAY 'result'


// function hapusAngka(sentence) {
//   var result = '';
//   var alphabet = 'abcdefghijklmnopqrstuvxyz';
//   for(var i = 0; i < sentence.length; i++){
//     for(var j = 0; j < alphabet.length; j++){
//       if(sentence[i].toLowerCase() === alphabet[j]){
//         result += sentence[i]
//       }
//     }
//   }
//   return result
// }

function hapusAngka(sentence) {
  var result = '';
  for(var i = 0; i < sentence.length; i++){
    if(sentence[i] >= 'a' && sentence[i] <= 'z' || sentence[i] >= 'A' && sentence[i] <= 'Z')
    result += sentence[i]
  }
  return result
}

console.log(hapusAngka('hacktiv8')); //hacktiv
console.log(hapusAngka('17 Agu stus 1945')); //Agustus
console.log(hapusAngka('')); //''