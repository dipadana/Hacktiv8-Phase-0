/**
  **************
  HALF TRIANGLE
  **************

  Diberikan sebuah function halfTriangle yang memiliki dua paramter yaitu:
   - height bertipe number
   - direction bertipe string

  Function ini akan mengembalikan array multidimensi height * height dimana array
  tersebut berisi angka berbentuk segitiga dan setengahnya lagi spasi berbentuk segitiga
  (jika dilihat kasat mata) sesuai dengan parameter direction.

  Untuk pola bisa dilihat pada test case

  NOTE:
  - HEIGHT MINIMUM ADALAH 4, JIKA KURANG DARI 4 MAKA RETURN `Minimum height is 4`

**/
// function halfTriangle(height, direction) {
//   if(height < 4){
//     return 'Minimum height is 4'
//   }
//   var result = [];
//   if(direction === 'up'){
//     for(var i = 0; i < height; i++){
//       var temp = [];
//       var counter = 1;
//       for(var j = 1; j <= height; j++){
//         if(i === 0){
//           temp.push(String(counter))
//         }
//         else if(i > 0 && j > i){
//           temp.push(String(counter))
//         }else{
//           temp.push(' ')
//         }
//         counter++
//       }
//       result.push(temp)
//     }
//   }else if(direction === 'down'){
//     for(var i = 0; i < height; i++){
//       var temp = [];
//       var counter = 1;
//       for(var j = 1; j <= height; j++){
//         if(i === height-1){
//           temp.push(String(counter))
//         }
//         else if(i < height-1 && j <= i){
//           temp.push(String(counter))
//         }
//         else{
//           temp.push(' ')
//         }
//         counter++
//       }
//       result.push(temp)
//     }
//   }
//   return result
// }


function halfTriangle(height, direction) {
  if(height < 4){
    return 'Minimun height is 4';
  }

  var result = [];
  for(var i = 0; i < height; i++){
    var collect = [];
    var counter = 0;
    for(var j = 0; j < height; j++){
      counter++
      if(direction === 'up'){
        if(i === 0){
          collect.push(String(counter))
        }else if(i > 0 && j >= i){
          collect.push(String(counter))
        }else{
          collect.push(' ')
        }
      }else if(direction === 'down'){
        if(i === height-1){
          collect.push(String(counter))
        }
        else if(i < height-1 && j <= i){
          collect.push(String(counter))
        }
        else{
          collect.push(' ')
        }
      }
    }
    result.push(collect)
  }
  console.log(result)
}


console.log(halfTriangle(5, 'up'));
// [ [ '1', '2', '3', '4', '5' ],
//   [ ' ', '2', '3', '4', '5' ],
//   [ ' ', ' ', '3', '4', '5' ],
//   [ ' ', ' ', ' ', '4', '5' ],
//   [ ' ', ' ', ' ', ' ', '5' ] ]

console.log(halfTriangle(7, 'down'));
// [ [ '1', ' ', ' ', ' ', ' ', ' ', ' ' ],
//   [ '1', '2', ' ', ' ', ' ', ' ', ' ' ],
//   [ '1', '2', '3', ' ', ' ', ' ', ' ' ],
//   [ '1', '2', '3', '4', ' ', ' ', ' ' ],
//   [ '1', '2', '3', '4', '5', ' ', ' ' ],
//   [ '1', '2', '3', '4', '5', '6', ' ' ],
//   [ '1', '2', '3', '4', '5', '6', '7' ] ]
// 
console.log(halfTriangle(3, 'up')); // Minimum height is 4

console.log(halfTriangle(4, 'up'));
// [ [ '1', '2', '3', '4' ],
//   [ ' ', '2', '3', '4' ],
//   [ ' ', ' ', '3', '4' ],
//   [ ' ', ' ', ' ', '4' ] ]

console.log(halfTriangle(4, 'down'));
// [ [ '1', ' ', ' ', ' ' ],
//   [ '1', '2', ' ', ' ' ],
//   [ '1', '2', '3', ' ' ],
//   [ '1', '2', '3', '4' ] ]
