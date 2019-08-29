function soal2(param) {
    var result = [];
    for (var i=0; i<param; i++) {
        result.push([]);
    }
    return result;
}

/*
2 [2] - length-3   - i reassign ''
1,2,3 - [1] - length -2
1,2,3,4,5
*/

console.log(soal2(5))
/*

  [
      ['','','*','',''], // 5
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

console.log(soal2(3))
/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/

console.log(soal2(4)) // invalid input
console.log(soal2(2)) // invalid input
console.log(soal2(6)) // invalid input

