/**

Reverse All

Implementasikan function reverseAll untuk membalikkan `arr` DAN setiap elemen string yang ada di
dalamnya.

Contoh:
- input: ['devil jin', 'geese', 'akuma']
  output: ['amuka', 'eseeg', 'nij lived']

- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['ilil', 'anin', 'uyoaix', 'asila']

- input: []
  output: []

Aturan coding:
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()

*/

// function reverseAll (arr) {

//   var result = [];

//   for (var i = 0; i < arr.length; i++) {
//     var str = "";
//     for (var j = arr[i].length - 1; j >= 0; j--) {
//       str += arr[i][j];
//     }
//     result.push(str)
//     // str = ""
//   }
//   return result
// }


function reverseAll (arr) {
  var result = []
  for(var i = 0; i < arr.length; i++){
    var temp = [];
    for(var j = arr[i].length-1; j >= 0; j--){
      temp += arr[i][j];
    }
    result.unshift(temp)
  }
  return result
}



console.log(reverseAll(['dimitri', 'sergei', 'alexei']));
// ['iexela', 'iegres', 'irtimid']

console.log(reverseAll(['kira', 'lawliet', 'near', 'mello']));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

console.log(reverseAll([]));
// []

//6 minutes 35 sec
//3 minutes
