function validSolution(arr){
  var checkNilai = '123456789';

  // Check datar
  for(var i = 0; i < arr.length; i++){
    var tempDatar = arr[i].join('');
    var arrDatar = tempDatar.split('').sort().join('');
    if(arrDatar != checkNilai){
      return false;
    }
  }

  // Chekc turun
  for(var i = 0; i < arr.length; i++){
    var temp = [];
    for(var j = 0; j < arr.length; j++){
      temp.push(arr[j][i])
      
    }

    var tempTurun = temp.join('');
    var arrTurun = tempTurun.split('').sort().join('');
    if(arrTurun != checkNilai){
      return false;
    }
  }
  
  // Check kotak kecil
  for(var l = 0; l < 9; l+=3){
    for(var k = 0; k < 9; k+=3){
      var tempKotakKecil = [];
      for(var j = k; j < 3 + k; j++){
        for(var i = l; i < 3+l; i++){
          tempKotakKecil.push(arr[j][i])
        }
      }

      var tempKotakMini = tempKotakKecil.join('');
      var arrKotakMini = tempKotakMini.split('').sort().join('');
      if(arrKotakMini != checkNilai){
        return false;
      }
    }
  }
  return true;
}

console.log(validSolution([
  [ 1, 2, 3,  4, 5, 6,  7, 8, 9 ],
  [ 2, 3, 1,  5, 6, 4,  8, 9, 7 ],
  [ 3, 1, 2,  6, 4, 5,  9, 7, 8 ],

  [ 4, 5, 6,  7, 8, 9,  1, 2, 3 ],
  [ 5, 6, 4,  8, 9, 7,  2, 3, 1 ],
  [ 6, 4, 5,  9, 7, 8,  3, 1, 2 ],

  [ 7, 8, 9,  1, 2, 3,  4, 5, 6 ],
  [ 8, 9, 7,  2, 3, 1,  5, 6, 4 ],
  [ 9, 7, 8,  3, 1, 2,  6, 4, 5 ]
  ])); // => true

[
  [ 1, 2, 3,  4, 5, 6,  7, 8, 9 ],
  [ 2, 3, 1,  5, 6, 4,  8, 9, 7 ],
  [ 3, 1, 2,  6, 4, 5,  9, 7, 8 ],

  [ 4, 5, 6,  7, 8, 9,  1, 2, 3 ],
  [ 5, 6, 4,  8, 9, 7,  2, 3, 1 ],
  [ 6, 4, 5,  9, 7, 8,  3, 1, 2 ],

  [ 7, 8, 9,  1, 2, 3,  4, 5, 6 ],
  [ 8, 9, 7,  2, 3, 1,  5, 6, 4 ],
  [ 9, 7, 8,  3, 1, 2,  6, 4, 5 ]
  ]