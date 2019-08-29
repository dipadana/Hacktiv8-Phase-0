/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULE:
  - WAJIB menyertakan algoritma / pseudocode
  - Dilarang menggunakan .filter, .map, .reduce

  PSEUDOCODE 

  STORE "result" with the value of empty Array

    FOR LOOP index 0 to length of str 
      IF str[i] mod 2 EQUALS TO 0 THEN 

  
*/

// function evenPairsSum (str) {

//   var result = [];
//   var sum = 0;

//     if(str.length % 2 === 0){
//       for (var i = 0; i < str.length; i++) {
//         if(i % 2 === 0){
//           var pair = Number(str[i] + str[i+1]);
//           // console.log(pair)
//           if(pair % 2 === 0){
//             sum += pair
//           }
//         }
//       }
//     } 
//     else {
//       // console.log(str)
//       var num = str + str[0]
//       for(var j = 0; j < num.length; j++){
//         // console.log(str[j])
//         if(j % 2 === 0){
//           var even = Number(num[j] + num[j+1]);
//           if(even % 2 === 0){
//             sum += even
//           }
//         }
//       }
//     }
//     return sum
// }


function evenPairsSum (str) {
  var temp = [];
  for(var i = 0; i < str.length; i+=2){
    if(str.length%2 === 1){
      if(i === str.length-1){
        temp.push(str[i]+str[0])
      }else{
        temp.push(str[i]+str[i+1])
      }
    }else{
      temp.push(str[i]+str[i+1])
    }
  }
  
  var collect = 0;
  var result = 0;
  for(var i = 0; i < temp.length; i++){
    if(temp[i]%2 === 0){
      collect = Number(temp[i])
      result += collect
    }
  }
  return result
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134

//time: 10 minutes
