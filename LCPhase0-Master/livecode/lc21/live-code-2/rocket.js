/*
===========================
Initial Grouping Descending
==========================
[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.

[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output:
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]

Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!

RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort

*/

// function initialGroupingDescending(studentsArr) {
//   var fix = [];
//   var result = [];
//   var group = [];
//   var kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   for (let i = 0; i < kamus.length; i++) {
//     for (let j = studentsArr.length-1; j >= 0; j--) {
//       if (kamus[i] === studentsArr[j][0]) {
//         fix.unshift(studentsArr[j]);
//       }
//     }
//   }
//   for (let i = 0; i < fix.length; i++) {
//     if (group.length < 1) {
//       group.push(fix[i][0]);
//     }
//     if (fix[i][0] === group[0]) {
//       group.push(fix[i]);
//     }
//     else {
//       result.push(group);
//       group = [];
//       group.push(fix[i][0]);
//       group.push(fix[i]);
//     }
//   }
//   result.push(group)
//   return result;
// }


// function initialGroupingDescending(studentsArr) {
//   var result = [];
//   var temp = [];
//   var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
//   // for(var i = 0; i < studentsArr.length; i++){
//   //   temp.push(studentsArr[i][0])
//   // }

//   // for(var i = 0; i < temp.length; i++){
//   //   for(var j = 0; j < temp.length-i; j++){ //// COLLECT HURUF AWAL KEMUDIAN SORTING
//   //     if(temp[j] < temp[j+1]){
//   //       var temporary = temp[j]
//   //       temp[j] = temp[j+1]
//   //       temp[j+1] = temporary
//   //     }
//   //   }
//   // }

//   for(var i = 0; i < alphabet.length; i++){
//     for(var j = 0; j < studentsArr.length; j++){
//       if(studentsArr[j][0] === alphabet[i]){
//         temp.unshift(studentsArr[j][0])          // COLLECT HURUF AWAL TANPA PERLU SORTING MANUAL
//       }
//     }
//   }

//   var temp2 = [];
//   for(var j = 0; j < temp.length; j++){
//     if(temp[j] !== temp[j+1]){                  // MENGHILANGKAN HURUF DOUBLE
//       temp2.push(temp[j])
//     }
//   }
  
//   for(var i = 0; i < temp2.length; i++){
//     var temp3 = [];
//     temp3.push(temp2[i]);
//     for(var j = 0; j < studentsArr.length; j++){
//       if(temp2[i] === studentsArr[j][0]){
//         temp3.push(studentsArr[j])
//       }
//     }
//     result.push(temp3)
//   }
//   return result
// }


//OR DENGAN CARA OBJECT

function initialGroupingDescending(studentsArr) {
  var result = [], obj = {};
  
  for(var i = 0; i < studentsArr.length; i++){        // buat key
    obj[studentsArr[i][0]] = 0
  }
  
  var firstWord = Object.keys(obj)
  firstWord.sort(function(value1,value2){return value2 > value1}) // sorting
  
  for(var i = 0; i < firstWord.length; i++){
    var temp = []
    temp.push(firstWord[i])
    for(var j = 0; j < studentsArr.length; j++){
      if(firstWord[i] === studentsArr[j][0]){
        temp.push(studentsArr[j])
      }
    }
    result.push(temp)
  }
  return result
}


console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/
