/*
================
Array Mapper
================
SPECIAL NOTE: ROCKET HANYA DINILAI JIKA soal Rocket 100% selesai sesuai ekspektasi.
Name :_____________
[INSTRUCTIONS]
arrayMapper adalah sebuah function yang menerima tiga parameter.
Parameter pertama adalah sebuah array yang bisa terdiri dari tipe data apapun.
Parameter kedua adalah simbol matematika, penambahan, atau simbol pembanding.
Parameter ketiga adalah nilai yang akan menjadi efek operasi atau pembanding.
Untuk setiap nilai array, isi dari masing-masing array akan di operasikan dengan simbol dan effect.
Simbol +, -, *, dan / akan menjalankan proses matematika pada angka.
Simbol + pada string akan melakukan penggabungan string (concat).
Simbol ^ pada angka akan melakukan perpangkatan.
Simbol === akan melakukan perbandingan.

Contoh:
  targetArr: [1, 2, 3, 4, 5]
  operator: +
  effect: 5
  maka, setiap isi array akan ditambahkan dengan 5, sehingga,
  output: [6, 7, 8, 9, 10]

Contoh 2:
  targetArr: [1, 2, 1]
  operator: ^
  effect: 3
  maka, setiap isi array akan dipangkatkan dengan 3, sehingga,
  output: [1, 8, 1]

[CONSTRAINTS]
Dilarang menggunakan sintaks eval()!
*/

// function arrayMapper(targetArr, operator, effect) {

//   var count = 0;
//   var result = [];
//   for (var i = 0; i < targetArr.length; i++) {
//     // console.log(targetArr[i])
//     if(operator === "-"){
//       count = targetArr[i] - effect
//     } else if(operator === "+"){
//       count = targetArr[i].concat(effect)
//     } else if (operator === "==="){
//       count = targetArr[i] === effect
//     } else if (operator === "^"){
//       count = Math.pow(targetArr[i], effect)
//     } else if (operator === "/"){
//       count = (targetArr[i]/effect)
//     }
//     result.push(count)
//   }
//   return result
// }


function arrayMapper(targetArr, operator, effect) {
  var result = [];

  for (var i = 0; i < targetArr.length; i++) {
    if(operator === '-'){
      result.push(targetArr[i] - effect)
    }else if(operator === '+'){
      result.push(targetArr[i] + effect)
    }else if(operator === '^'){
      result.push(Math.pow(targetArr[i],effect))
    }else if(operator === '/'){
      result.push(targetArr[i] / effect)
    }else if(operator === '==='){
      result.push(targetArr[i] === effect)
    }
  }
  return result
}



console.log(arrayMapper([1, 2, 3, 4, 5], '-', 3)); // [-2, -1, 0, 1, 2]
console.log(arrayMapper(['A', 'B', 'C', 'D'], '+', 'X')); // ['AX', 'BX', 'CX', 'DX']
console.log(arrayMapper([true, false, true, false], '===', false)); // [false, true, false, true]
console.log(arrayMapper([1, 5, 3, 4], '^', 2)); // [1, 25, 9, 16]
console.log(arrayMapper([8, 4, 2, 10], '/', 2)); // [4, 2, 1, 5]

//6 minutes 55 sec

//yang ini cara kak hedya

// function arrayMapper(targetArr, operator, effect) {
//   var hasil;
//   var tampil = [];
//   for(var i = 0; i < targetArr.length; i++) {
//     switch (operator) {
//       case '-':
//         hasil = targetArr[i] - effect;
//         break;
//       case '+':
//         hasil = targetArr[i].concat(effect);
//         break;
//       case '===':
//         hasil = targetArr[i] === effect;
//         break;
//       case '^':
//         hasil = Math.pow(targetArr[i], effect);
//         // hasil = targetArr[i] ** effect;
//         break;
//       case '/':
//         hasil = targetArr[i] / effect;
//         break;
//       default:
//         break;
//     }
//     tampil.push(hasil);
//   } return tampil;
// }
