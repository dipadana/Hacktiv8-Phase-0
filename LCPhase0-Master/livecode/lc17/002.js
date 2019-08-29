function soal2(param) {
  var batas = param - Math.floor(param/2)
  
  if(param%2 === 0){
    return 'invalid input'
  }
  
  var result = [];
  var mid = Math.floor(param/2)
  for(var i = 0; i < batas; i++){
    var collect = [];
    for(var j = 0; j < param; j++){
      if(j === mid){
        collect.push('*')
      }else if(i > 0){
        if(j <= mid+i && j >= mid-i){
          collect.push('*')
        }
        else{
          collect.push(' ')
        }
      }else{
        collect.push(' ')
      }
    }
    result.push(collect)
  }
  return result
}

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

