/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases

RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARAANG MENGGUNAKAN BUILT IN FUNCTION APAPUN (HANYA PERLU MENGGUNAKAN LOOP DAN CONDITION)
*/

//PSEUDOCODE

// STORE and SAVE 'result' with empty String
// LOOPING 'str'
//   IF str with certain index equal to '1'
//     ADD 'result' with 'i'
//   IF str with certain index equal to '4'
//     ADD 'result' with 'a'
//   IF str with certain index equal to '3'
//     ADD 'result' with 'e'
//   IF str with certain index equal to '7'
//     ADD 'result' with 'u'
//   IF str with certain index equal to '0'
//     ADD 'result' with 'o'
//   ELSE
//     ADD 'result' with value of 'str'
//   SHOW and DISPLAY 'result'

function numberLetters (str) {
  // Code disini
  var result = ''

  for(var i = 0; i < str.length; i++){
    if(str[i] === '1'){
      result += 'i'
    }else if(str[i] === '4'){
      result += 'a'
    }else if(str[i] === '3'){
      result += 'e'
    }else if(str[i] === '7'){
      result += 'u'
    }else if(str[i] === '0'){
      result += 'o'
    }else{
      result += str[i]
    }
  }
  return result
}

// Test cases
console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //
