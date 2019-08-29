
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

//solution from stackoverflow : https://stackoverflow.com/questions/4492678/swap-rows-with-columns-transposition-of-a-matrix-in-javascript/13241545

// function matrixTranspose(matriks) {

//     var copy = [];
//     for (var i = 0; i < matriks.length; ++i) {
//         for (var j = 0; j < matriks[i].length; ++j) {
//             // skip undefined values to preserve sparse array
//             // console.log(matriks[i][j])
//             // if (matriks[i][j] === undefined){
//             //   continue;
//             // }
//             // create row if it doesn't exist yet
//             if (copy[j] === undefined){
//               copy[j] = [];
//             }
//             // console.log(copy[j])
//             // // swap the x and y coords for the copy
//             copy[j][i] = matriks[i][j];
//         }
//     }
//     return copy;
// }

function matrixTranspose(matriks) {
  var sumbuX = matriks.length
  var sumbuY = matriks[0].length
  var result = [];

  for(var i = 0; i < sumbuY; i++){
    var collect = [];
    for(var j = 0; j < sumbuX; j++){
      collect.push('')
    }
    result.push(collect)
  }

  for(var i = 0; i < matriks.length; i++){
    for(var j = 0; j < matriks[i].length; j++){
      result[j][i] = matriks[i][j]
    }
  }
  console.log(result)
}

console.log(matrixTranspose([[1, 2], [3, 4], [5, 6]]))
/*
  input:
  [
    [1, 2],
    [3, 4],
    [5, 6]
  ]
  output :
  [
    [1, 3, 5],
    [2, 4, 6]
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

