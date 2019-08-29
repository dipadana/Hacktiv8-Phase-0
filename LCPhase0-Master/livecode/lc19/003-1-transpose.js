
/*
Tranpose the Matrix
================
Author: Muhammad Ramadiansyah
Description: matrixTranspose adalah sebuah fungsi untuk menukar posisi baris dan kolom
              dari sebuah matriks
Examples:
1. input = [
  [1, 2],
  [3, 4],
  [5, 6]
]
  output = [
    [1, 3, 5],
    [2, 4, 6]
  ]
2. input = [
    [1, 2]
]
  output = [
    [1],
    [2]
  ]
*/
function matrixTranspose(matriks) {
  var temp = [];
  var counter = 0;
  var sumbuX = matriks.length;
  var sumbuY = matriks[0].length;
  var limit = matriks[0].length * matriks.length
  var count = true;

  while(count){

    for(var i = 0; i < matriks.length; i++){
      for(var j = 0; j < matriks[i].length; j++){
        if(j === counter){
          temp.push(matriks[i][j]);
        }
      }
    }
    counter++

    if(temp.length === limit){
      count = false
    }
  }
  
  var counter2 = 0;
  var result = [];
  for(var i = 0; i < sumbuY; i++){
    var collect = []
    for(var j = 0; j < sumbuX; j++){
      collect.push(temp[counter2])
      counter2++
    }
    result.push(collect)
  }
  return result
}


//OR

function matrixTranspose(matriks) {
  var sbX = matriks.length;
  var sbY = matriks[0].length;

  var result = [];
  for(var i = 0; i < sbY; i++){
    var collect = [];
    for(var j = 0; j < sbX; j++){
      collect.push('')
    }
    result.push(collect)
  }

  for(var i = 0; i < matriks.length; i++){
    for(var j = 0; j < matriks[i].length; j++){
      result[j][i] = matriks[i][j]
    }
  }
  return result
}



console.log(matrixTranspose([[1, 2], [3, 4], [5, 6], [7, 8]]))
/*
  input:
  [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
  ]
  output :
  [
    [1, 3, 5, 7],
    [2, 4, 6, 8]
  ]
*/

console.log(matrixTranspose([[1, 2], [3, 4]]));

/*
  input:
  [
    [1, 2],
    [3, 4]
  ]
  output :
  [
    [1, 3],
    [2, 4]
  ]
*/

console.log(matrixTranspose([[1, 2]]))
/*
  input:
  [
    [1, 2]  
  ]
  output :
  [
    [1],
    [2]
  ]
*/

console.log(matrixTranspose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
/*
  input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
    output = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]
*/