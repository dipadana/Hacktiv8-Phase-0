/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

// function averageLengthWord(words) {
//   var wordsArray = words.split(' ');
//   // console.log(wordsArray);
//   var totalWords = 0;
//   var totalAbjad = 0;
//   for (var i=0; i<wordsArray.length; i++) {
//       totalWords += 1
//       for (var j=0; j<wordsArray[i].length; j++) {
//           // console.log(wordsArray[i][j]);
//           totalAbjad += 1
//       }
//   }
//   // console.log(totalWords);
//   // console.log(totalAbjad);
  
//   var average = Math.round(totalAbjad/totalWords);
//   // console.log(average);
  
//   var result = [];
//   for (var k=0; k<wordsArray.length; k++) {
//       // console.log(wordsArray[k].length);
//       if (wordsArray[k].length === average) {
//           result.push(wordsArray[k])
//       }
//   }
//   return result;
// }

// console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
// console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
// console.log(averageLengthWord('I am diligent')); // []

function averageLengthWord(words) {
  var result = [];
  var str = words.split(" ");
  var countWord = 0;
  var letter = 0;

  for (var i = 0; i < str.length; i++) {
    // console.log(str[i])
    for (var j = 0; j < str[i].length; j++) {
      letter += 1
    }
  }

  var average = Math.round(letter/str.length);
  for (var i = 0; i < str.length; i++) {
    if(str[i].length === average){
      result.push(str[i])
    }
  }
  return result
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []

// 8 minutes 19 sec