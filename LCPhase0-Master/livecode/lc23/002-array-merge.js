/**
Array Merge
-----------
Mishima Zaibatsu mempunyai 2 mata-mata untuk mencari nama orang yang berpotensi untuk mengalahkan
Heihachi Mishima dan mengambil alih perusahaan miliknya. 2 mata-mata ini mengerjakan tugasnya
dengan baik, tetapi ada saatnya kedua data yang diberikan memiliki duplikat (nama yang sama).
Implementasikan function arrayMerge untuk menggabungkan 2 data yang diberikan kepada
Mishima Zaibatsu dan jangan sampai terdapat nama yang sama di data yang sudah tergabung tadi.

Contoh:
- input: ['kazuya', 'jin', 'lee'], ['kazuya', 'feng']
  output: ['kazuya', 'jin', 'lee', 'feng']

- input: ['lee', 'jin'], ['kazuya', 'panda']
  output: ['lee', 'jin', 'kazuya', 'panda']
  
Aturan coding:
  DILARANG menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .concat()
  - .indexOf() / .lastIndexOf() / .includes()
  - .copyWithin()
*/

// function arrayMerge (firstData, secondData) {

//   var result = firstData;

//   for (var i = 0; i < secondData.length; i++) {
//     // result.push(secondData[i]);
//     var same = true;
//     for (var j = 0; j < result.length; j++) {
//       if(secondData[i] === result[j]){
//         same = false;
//         break;
//       }
//     }
//     if(same === true){
//       result.push(secondData[i]);
//     }

//   }
//   return result;
// }


function arrayMerge (firstData, secondData) {

  for(var i = 0; i < secondData.length; i++){
    var cek = true
    for(var j = 0; j < firstData.length; j++){
      if(secondData[i] === firstData[j]){
        cek = false
      }
    }
    if(cek === true){
      firstData.push(secondData[i])
    }
  }
  return firstData
}



// Test cases

console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
// ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
// ['sergei', 'jin', 'steve', 'bryan']

console.log(arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));
// ['alisa', 'yoshimitsu', 'devil jin', 'law']

console.log(arrayMerge([], ['devil jin', 'sergei']));
// ['devil jin', 'sergei']

console.log(arrayMerge(['hwoarang'], []));
// ['hwoarang']

console.log(arrayMerge([], []));


// function arrayMerge (firstData, secondData) {

//   var result = firstData;

//   for (var i = 0; i < secondData.length; i++) {
//     // console.log(secondData[i])
//     result.push(secondData[i])
//   }

//   var obj = {};

//   for (var j = 0; j < result.length; j++) {
//     if(obj[result[j]] === undefined){
//       obj[result[j]] = 1
//     } else {
//       obj[result[j]]++
//     }
//   }

//   var keys = Object.keys(obj);

//   return keys
// }
