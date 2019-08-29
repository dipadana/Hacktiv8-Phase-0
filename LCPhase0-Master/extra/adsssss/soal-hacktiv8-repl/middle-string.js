
/*
================
A in the Middle
================

Nama:________

[INSTRUKSI]
function aInTheMiddle adalah sebuah function yang menerima satu parameter yaitu sebuah array yang menampung string.
Function akan mengumpulkan semua string dalam array tersebut yang memiliki karakter di tengah yaitu 'a'. Abaikan kecil besar dari karakter.
Jika string genap, dua huruf di tengah harus 'a'.
Kumpulan string yang memiliki 'a' ditengah akan ditampung dalam array dan di kembalikan oleh function tersebut.

[CONTOH]

input: ['asafw', 'test', 'waw']
output: ['asafw', 'waw']

input: ['baon', 'test', 'taqs']
output: []

input: ['graail', 'nAn', 'naAn']
output: ['graail', 'nAn', 'naAn']

input: ['asafw', 'wow', 'o', 'graail', 'nAn']
output: ['asafw', graail', 'nAn']
*/

function aInTheMiddle(words) {

  var result = [];
  for (var i = 0; i < words.length; i++) {
    // console.log(words[i])
    var lowerCase = words[i].toLowerCase();
    // console.log(lowerCase)
    // var middle = Math.trunc(lowerCase.length/2);
    // console.log(lowerCase.length)
    if(lowerCase.length%2 === 1){
      var index = Math.floor(lowerCase.length/2);
      // console.log(lowerCase[middle])
      var middleChar = lowerCase[index];
      if(middleChar === "a"){
        result.push(words[i])
      }
    } else {
      var index1 = Math.floor(lowerCase.length/2);
      var middleChar1 = lowerCase[index1];
        if(middleChar1 === "a"){
          result.push(words[i])
        }
    }
  }
  return result
}


console.log(aInTheMiddle(['asafw', 'test', 'waw'])); // ['asafw', 'waw']
console.log(aInTheMiddle(['baon', 'test', 'taqs'])); // []
console.log(aInTheMiddle(['graail', 'nAn', 'naAn'])); // ['graail', 'nAn', 'naAn']
console.log(aInTheMiddle(['asafw', 'wow', 'o', 'graail', 'nAn'])); // ['asafw', graail', 'nAn']
console.log(aInTheMiddle([])); // []
