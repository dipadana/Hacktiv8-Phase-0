/**
Reverse Even
Implementasikan function reverseEven untuk membalikkan setiap elemen string dengan urutan ganjil
yang ada di dalamnya.
Contoh:
- input: ['awtian', 'raijin', 'thunderkeg']
  output: ['naitwa', 'raijin', 'gekrednuht']
- input: ['draco', 'luna', 'riddle', 'hagrid']
  output: ['ocard', 'luna', 'elddir', 'hagrid']
- input: []
  output: []
Aturan coding:
WAJIB MENYERTAKAN ALGORITHMA DAN PSEUDOCODE
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()

ALGORITHM

1. create a variable with the value of array
2. create another variable with the value of string
3. loop though the given array, jika string merupakan ganjil maka kita balik
4. jika tidak maka langsung lanjut ke step 5
5. push string yang sudah di balik dan yang tidak 
6. return hasilnya

*/

function reverseOdd (arr) {

  var result = [];
  var str = "";

  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if(i%2 === 0){
      for (var j = arr[i].length - 1; j >= 0; j--) {
        str +=  arr[i][j];
      }
      result.push(str);
      str = "";
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(reverseOdd(['clinkz', 'jahrakal', 'kael']));
// [ 'zknilc', 'jahrakal', 'leak' ]

console.log(reverseOdd(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));
// [ 'gnafnoom', 'nightshade', 'regnirbthgil', 'strygwyr' ]

console.log(reverseOdd([]));
// []

// 6 mins 44 sec