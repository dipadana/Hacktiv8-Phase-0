/* 
====================
Count Place Distance
====================

[INSTRUCTION]
Fungsi countDistance dibuat untuk menghitung jarak dua tempat yang diwakili oleh huruf 'o' di dalam array multidimensi
Terdapat 2 parameter yang diperlukan oleh fungsi countDistance, param pertama berupa array multidimensi,
param kedua berupa number yang menunjukkan uang yang kita miliki saat ini

Ketika melewati huruf 'x' maka uang pengendara akan berkurang sebesar 10000 , dan jika uang habis atau kurang dari 10000
maka perjalanan akan terhenti

[EXAMPLE]
Input :  
[
  ['', 'o', 'x', 'x', '', 'o'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
] 
dan uang = 40000
output :  
Sisa uang : 20000, jarak tempuh: 30 km 

Input :  
[
  ['', 'o', 'x', 'x', 'x', 'x'],
  ['o', '', '', '', ''],
  ['', '', '', '', ''],
] 
dan uang = 30000
output :  
Uang anda habis, jarak tersisa sampai tujuan adalah 10 km

[RULES]
- Dilarang menggunakan indexOf, sort, includes.
- Dilarang menggunakan regex .match dan lainnya!
*/

function countDistance(arr, money) {
  // code anda disini
  var go = false;
  var count = 0;
  var count2 = 0;
  var startI = 0;
  var startJ = 0;
  var result = '';

  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){

      if(arr[i][j] === 'o' && money > 0 && go === false){
        go = true;
        startI = i;
        startJ = j;
      }

      if(go){

        if(money > 0){
          if(arr[i][j] === ''){
            count++
          }else if(arr[i][j] === 'x'){
            count++
            money = money - 10000
          }else if(i > startI && arr[i][j] === 'o' || j > startJ && arr[i][j] === 'o'){
            go = false;
          }
          result = 'Sisa uang: ' + money + ', jarak tempuh: ' + count*10 + ' km'
        }

        else if(money <= 0){
          if(arr[i][j] === '' || arr[i][j] === 'x'){
            count2++
          }else if(i > startI && arr[i][j] === 'o' || j > startJ && arr[i][j] === 'o'){
            go = false;
          } 
          result = 'Uang anda habis, jarak tersisa sampai tujuan adalah ' + count2*10 + ' km'
        }
      }
    }
  }
  return result
}

console.log(countDistance([
  ['', 'o', '', '', 'o'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
], 40000))
// output:
/* Sisa uang : 40000, jarak tempuh: 20 km */

console.log(countDistance([
  ['', '', 'o', '', ''],
  ['', 'x', ''],
  ['', '', '', '', '', 'x'],
  ['', 'o', '', '']
], 50000))
// // output:
// /* Sisa uang : 30000, jarak tempuh: 120 km */

console.log(countDistance([
  ['', '', '', '', ''],
  ['o', 'x', 'x', 'x', ''],
  ['', '', '', 'x', '', 'x'],
  ['', 'o', '', '']
], 40000))
// // output:
// /* Uang anda habis, jarak tersisa sampai tujuan adalah 30 km*/

console.log(countDistance([
  ['', 'o', 'x', 'x', 'x', 'x'],
  ['o', '', '', '', ''],
  ['', '', '', '', ''],
], 30000))
// // output:
// /* Uang anda habis, jarak tersisa sampai tujuan adalah 10 km*/