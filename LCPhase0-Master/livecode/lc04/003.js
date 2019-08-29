/*
=======================
UNIQUE DUPLICATE FINDER
=======================

[INSTRUCTIONS]
uniqueDuplicateFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn object yang berisi setiap kumpulan kata-kata unik dan duplicate yang ditemukan dalam kalimat.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
output: {
  unique: [ 'dan', 'suka', 'makan', 'nasi' ],
  duplicate: [ 'saya' ]
}

*/


// function uniqueDuplicateFinder(sentence) {

//   var arr = sentence.toLowerCase().split(' ')
//   var temp = [];
//   var unique = [];
//   var duplicate = [];
//   var obj = {};

//   for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr.length; j++){
//       if(arr[i] === arr[j] && i !== j){
//         temp.push(arr[i])
//       }
//     }
//   }
//   // console.log(temp)
//   for(var i = 0; i < temp.length; i++){
//     var counter = 0;
//     for(var j = 0; j < temp.length; j++){
//       if(temp[i] === temp[j] && i!==j && temp[j] !== undefined){
//         counter++;
//         if(counter === 1){
//           duplicate.push(temp[j])
//         }
//         temp[j] = undefined
//       }
//     }
//   }
//   // console.log(duplicate)
//   for(var i = 0; i < arr.length; i++){
//     var check = true;
//     for(var j = 0; j < duplicate.length; j++){
//       if(arr[i] === duplicate[j]){
//         check = false;
//       }
//     }
//     if(check === true && duplicate.length > 0){
//       unique.push(arr[i])
//     }
//   }
//   // console.log(unique)
//   obj = {
//     unique: unique,
//     duplicate: duplicate
//   }
//   return obj
// }




//OR



function uniqueDuplicateFinder(sentence) {
  var isSame = [];
  var isUnique = [];
  var arr = sentence.toLowerCase().split(" ")

  for(var i = 0; i < arr.length; i++){
    var counter = 0;
    for(var j = 0; j < arr.length; j++){
      if(arr[i] === arr[j] && i!==j && arr[j] !== undefined){
        counter++;
        if(counter === 1){
          isSame.push(arr[i])
        }
        arr[j] = undefined
      }
    }
  }

  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < isSame.length; j++){
      if(arr[i] === isSame[j]){
        arr[i] = undefined
      }
    }
    if(arr[i] !== undefined && arr[i].length > 0){
      isUnique.push(arr[i])
    }
  }
  
  var result = {
    unique: isUnique,
    duplicate: isSame
  }
  return result
}


console.log(uniqueDuplicateFinder('hello black dragon and hello red dragon'));
// {
//   unique: [ 'black', 'and', 'red' ],
//   duplicate: [ 'hello', 'dragon' ]
// }

console.log(uniqueDuplicateFinder('hello HELLo hEllO hlloe'));
// // {
// //   unique: [ 'hlloe' ],
// //   duplicate: [ 'hello' ]
// // }

console.log(uniqueDuplicateFinder('john is coding'));
// // {
// //   unique: [ 'john', 'is', 'coding' ],
// //   duplicate: []
// // }

console.log(uniqueDuplicateFinder('blue blue red blue violet red violet'));
// // {
// //   unique: [],
// //   duplicate: [ 'blue', 'red', 'violet']
// // }

console.log(uniqueDuplicateFinder(''));
// // {
// //   unique: [],
// //   duplicate: []
// // }
