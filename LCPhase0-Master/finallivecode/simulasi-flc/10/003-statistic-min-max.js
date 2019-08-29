/*
====================================
Number and Array Mastery: Statistics
====================================
Name Here :_____________
[INSTRUKSI]
Tersedia 3 input:
1) kata (2 kemungkinan: 'min' atau 'max')
2) array berisi angka-angka positif
3) array berisi angka-angka positif
Output:
Jika kata adalah 'min', maka return hasil terkecil dari dua array yang ada
Jika kata adalah 'max', maka return hasil terbesar dari dua array yang ada
[CONTOH]
1) 'max', [6, 2, 4, 10, 8, 2] , [4, 7, 9, 19]  -->   10 , 19
2) 'min', [5, 11, 18, 6] , [3, 9, 10, 13]  -->    5 , 13

rules:
1. tidak boleh menggunakan Math.max, Math.min, .map, .sort, .reduce, .filter
*/

function statistik(kata, arr1, arr2) {}


console.log(statistik('min', [1, 1, 1] , [8, 15, 17, 9]));             // 1 8
console.log(statistik('max', [4, 8, 9, 12] , [33, 88, 99 ,11]));       // 12 99
console.log(statistik('min', [1, 2, 5, 2, 2] , [67, 45, 55]));         // 1 45
console.log(statistik('max', [6, 2, 4, 10, 8, 2] , [6, 5, 13, 23]));     // 10 23
console.log(statistik('min', [5, 11, 18, 6], [3, 1, 8, 13]));          // 5 1

// 7 minutes 35 sec


















// function statistik(kata, arr1, arr2) {

//     if(kata === "min"){
//         var min1 = arr1[0];
//         var min2 = arr2[0];
//         // console.log(min1)
//         for(var i = 0; i < arr1.length; i++){
//             // console.log(arr1[i])
//             if(min1 > arr1[i]){
//                 min1 = arr1[i];
//             }
//         }
//         // console.log(min1)
//         for(var j = 0; j < arr2.length; j++){
//             // console.log(arr2[j])
//             if(min2 > arr2[j]){
//                 min2 = arr2[j]
//             }
//         }
//         return min1 + " " + min2
//     } else if (kata === "max"){
//         var max1 = 0;
//         var max2 = 0;

//         for(var k = 0; k < arr1.length; k++){
//             // console.log(arr1[k])
//             if(max1 < arr1[k]){
//                 max1 = arr1[k];
//             }
//         }
//         for(var a = 0; a < arr2.length; a++){
//             if(max2 < arr2[a]){
//                 max2 = arr2[a];
//             }
//         }
//         return max1 + " " + max2
//     }

// }