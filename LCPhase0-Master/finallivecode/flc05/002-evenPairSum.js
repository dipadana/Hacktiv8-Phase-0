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
  Karena ada pasangan genap (30, 32) maka akan dijumlahkan

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULES:
 - WAJIB MENGGUNAKAN algoritma/pseudocode, tidak menyertakan algoritma/pseudocode maka codingan dianggap tidak valid

PSEUDOCODE :

STORE "count" with the value of 0

IF str length mod 2 EQUALS to 0 THEN
  FOR LOOP index 0 to length of str
    IF i mod 2 EQUALS to 0 THEN
      STORE "groups" = str[i] + str[i+1]
      IF Number(groups) mod 2 EQUALS to 0 THEN
        sum Number(groups) in "count"
      END IF
    END IF
  EXIT LOOP
ELSE 
  STORE "strNum" = str + str[0]
  FOR LOOP index 0 to length of strNum
    IF j mod 2 EQUALS to 0 THEN
      STORE "groups1" = strNum[j] + strNum[j+1]
      IF Number(groups1) mod 2 EQUALS to 0 THEN
        sum Number(groups1) in "count"
      END IF
    END IF
  EXIT LOOP
END IF

DISPLAY "count"

*/
function evenPairSum(str) {

}


console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134



















// function evenPairsSum (str) {
  
//   var count = 0;
//   if(str.length%2 === 0){
//     for(var i = 0; i < str.length; i++){
//       if(i%2 === 0){
//         var groups = str[i] + str[i+1];
//         // console.log(groups)
//         if(Number(groups)%2 === 0){
//           // console.log("======", Number(groups))
//           count += Number(groups)
//         }
//       }
//     }
//   } else {

//     var strNum = str + str[0];

//     for(var j = 0; j < strNum.length; j++){
//       // console.log(groups1[j])
//       if(j%2 === 0){
//         var groups1 = strNum[j] + strNum[j+1];
//         // console.log(groups1)
//         if(Number(groups1)%2 === 0){
//           count += Number(groups1)
//         }
//       }
//     }

//   }
//   // console.log(count)
//   return count
// }


// 12 minutes 35 sec

//NEW : 22 minutes