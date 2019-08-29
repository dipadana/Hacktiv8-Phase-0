
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

function initialGroupingDescending(studentsArr) {

  var result = [];
  var obj = {}
  for (var i = 0; i < studentsArr.length; i++) {
    // console.log(studentsArr[i][0])
    if(obj[studentsArr[i][0]] === undefined){
      obj[studentsArr[i][0]] = [studentsArr[i]]
    } else {
      obj[studentsArr[i][0]].push(studentsArr[i])
    }
  }

  console.log(obj)
  // var keys = Object.keys(obj);
  // var values = Object.values(obj);

  // // console.log(values)

  // for (var j = 0; j < keys.length; j++) {
  //   // console.log(keys[i])
  //   result.push([keys[j]])
  //   for (var k = 0; k < values[j].length; k++) {
  //     // console.log(values[i])
  //     result[j].push(values[j][k])
  //     // console.log(values[j][k])
  //   }
  // }
  // return result
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
