/*
===============
MajoritySweeper
===============

[INSTRUCTIONS]
MajoritySweeper adalah function yang dibuat untuk mengeliminasi nilai array yang 
sering muncul (mayoritas) dari daftar nilai array 

[EXAMPLE]
INPUT: [9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5]
OUTPUT: [9, 3, 3, 4, 2, 5, 5, 5]

INPUT: [22, 22, 100, 100, 100, 2000]
OUTPUT: [22, 22, 2000]

INPUT: [2, 2]
OUTPUT: []

INPUT:[4, 4, 4, 1, 1, 1, 2, 2]
jika nilai minoritas/mayoritas sama, maka nilai yang digunakan yang pertama
OUTPUT: [1, 1, 1, 2, 2]

[RULE]
- Hanya boleh menggunakan for/ while loop, if -else, serta fungsi array pada javascript
- dilarang menggunakan fungsi es6
*/

function MajoritySweeper(arr) {
  // your code here
  var most = 0;
  var temp = [];
  var modus = 0;
  for(var i = 0; i < arr.length; i++){
    var counter = 0;
    for(var j = 0; j < arr.length; j++){
      if(arr[i] === arr[j] && i !== j){
        counter++
        if(counter > modus){
          modus = counter
          most = i
        }
      }
    }
  }

  if(counter === arr.length-1){
    return [];
  }

  for(var i = 0; i < arr.length; i++){
    if(arr[i] !== arr[most]){
      temp.push(arr[i])
    }
  }
  return temp
}

console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])) // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])) // [ 22, 22, 2000 ]
console.log(MajoritySweeper([2, 2])) // []
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])) // [ 1, 1, 1, 2, 2 ]