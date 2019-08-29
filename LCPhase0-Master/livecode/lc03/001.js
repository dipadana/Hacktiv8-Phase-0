/*
================
Poin Calculator
================

[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5

[RULE]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/


//
// PSEUDOCODE
// STORE and SAVE countG, countS, countB to 0
// STORE and SAVE sumG, sumS, sumB to 0
// LOOPING array and CHECK
//   IF array equals to 'G'
//     ADD countG by 1
//     ADD sumG with countG multiply 2
//   IF array equals to 'S'
//     ADD countS by 1
//     ADD sumS with countS multiply 1
//   IF array equals to 'B'
//     ADD countB by 1
//     ADD sumB with countB multiply 0.5
//   SHOW and DISPLAY the result of each count and all of sum

function poinCalculator(array) {
  var countG = 0;
  var countS = 0;
  var countB = 0;
  var sumG = 0;
  var sumS = 0;
  var sumB = 0;
    for(var i = 0; i < array.length; i++){
      if(array[i] === 'G'){
        countG++
        sumG= countG*2
      }else if(array[i] === 'S'){
        countS++
        sumB = countS*1
      }else if(array[i] === 'B'){
        countB++
        sumS = countB*0.5
      }
    }
    return `jumlah Gold: ${countG}, jumlah Silver: ${countS}, jumlah Bronze: ${countB}. Dan totalnya adalah ${sumG + sumS + sumB}.`
  }
  
  console.log(poinCalculator("GSB"));
  // jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
  console.log(poinCalculator("GGG"));
  // jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
  console.log(poinCalculator("SSB"));
  // jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
  console.log(poinCalculator("BBGSSGB"));
  // jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
  console.log(poinCalculator(""));
  // jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0
  