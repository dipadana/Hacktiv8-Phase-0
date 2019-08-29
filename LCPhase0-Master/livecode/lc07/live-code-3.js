/*
=============
Number Ladder
=============
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:

contoh 1 (height = 3):
123
23
3

contoh 2 (height = 5):
12345
2345
345
45
5

contoh 3 (height = 1):
1

tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.
Ketentuan
=========
Wajib menggunakan looping!
*/

//TANPA RETURN

var height = 5;
for(var i = 0; i < height; i++){
  var result ='';
  for(var j = i+1; j <= height; j++){
    result += j
  }
  console.log(result)
}

//DENGAN RETURN


function ledder(height){
  
  var result ='';
  for(var i = 0; i < height; i++){
    for(var j = i+1; j <= height; j++){
      result += j
    }
    result += '\n'
  }
  return result
}

console.log(ledder(5));