function MineSweeper(array) {
  // your code here
  var tmpOi = 0;
  var tmpOj = 0;
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array[i].length; j++){   //simpan koordinat 'O'
      if(array[i][j] === 'O'){
        tmpOi = i;
        tmpOj = j;
      }
    }
  }
  // console.log(tmpO)
  var collect = [];
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array[i].length; j++){     //simpan semua koordinat 'X'
      var tmpX = [];
      if(array[i][j] === 'X'){
        tmpX.push(i,j)
        collect.push(tmpX)
      }
    }
  }
  
  var counter = 0;
  for(var i = 0; i < collect.length; i++){
    if(collect[i][0] === tmpOi-1 || collect[i][0] === tmpOi+1 || collect[i][0] === tmpOi){
      if(collect[i][1] === tmpOj+1 || collect[i][1] === tmpOj-1 || collect[i][1] === tmpOj){
        counter++
      }
    }         // cek koordinat x i kedelapan penjuru mata angin, baik i maupun j
  }
  return counter
}


var board = [
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', 'O', 'X', ' ', ' '],
  [' ', 'X', ' ', 'X', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
console.log(MineSweeper(board)) // 4
var board2 = [
  [' ', ' ', ' ', ' ', ' ', 'O'],
  [' ', ' ', ' ', ' ', 'X', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
console.log(MineSweeper(board2)) // 2
var board3 = [
  ['X', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', ' ', 'X', 'X', ' '],
  [' ', ' ', 'X', 'O', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', 'X', ' ', ' ', 'X', ' ']
]
console.log(MineSweeper(board3)) // 3