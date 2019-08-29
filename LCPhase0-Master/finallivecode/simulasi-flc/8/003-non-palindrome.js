/**
===============
NON PALINDROME
===============

Problem
--------
nonPalindrome adalah sebuah function yang akan menerima satu parameter bertipe string.
Function ini akan mengembalikan array satu dimensi yang berisikan kumpulan kata yang tidak palindrome.

Contoh 1:
input: 'Wow mereka janji bertemu di makam'
output: ['mereka', 'janji', 'bertemu', 'di']

Contoh 2:
input: 'Katak naik honda civic pada malam hari di mimpi Dimitri'
output: ['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']


RULES:
- Tidak boleh menggunakan .reverse(), .join()

**/

function nonPalindrome(sentence) {}


console.log(nonPalindrome('Wow mereka janji bertemu di makam'));
//['mereka', 'janji', 'bertemu', 'di']

console.log(nonPalindrome('Katak naik honda civic pada malam hari di mimpi Dimitri'));
//['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']

console.log(nonPalindrome('kasurrusak kalo dipisah menjadi kasur rusak'));
//['kalo', 'dipisah', 'menjadi', 'kasur', 'rusak']

















// function nonPalindrome(sentence) {

//   var temp = [];
//   var str = sentence.split(" ");

//   // console.log(str)
//   for(var i = 0; i < str.length; i++){
//     // console.log(str[i])
//     var test = ""
//     for(var j = str[i].length - 1; j >= 0; j--){
//       // console.log(str[i][j])
//       test += str[i][j]
//     }
//     temp.push(test)
//   }
//   // console.log(temp)
//   var same = true;
//   var result = []
//   for(var a = 0; a < str.length; a++){
//     same = false;
//     for(var b = 0; b < temp.length; b++){
//       if(str[a].toLowerCase() === temp[b].toLowerCase()){
//         same = true;
//         break;
//       }
//     }
//     if(same === false){
//       result.push(str[a])
//     }
//   }
//   return result

// }