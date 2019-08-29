
// function urutanAngkaUlang(angka) {
//   // your code here
//   var tempArr = [];
//   var res = [];
//   var temp = 0;
//   for(var i = 1; i<=angka; i++) {
//     tempArr.push(i);
//   } var input = [...tempArr];

//   for(var j = 0; j<tempArr.length; j++) {
//    res.push(input.slice(j).concat(input.slice(0,j)))
//   }
//  return res
// }

function urutanAngkaUlang(angka) {
  // your code here
  var temp = [];
  var result = [];
  for(var i = 1; i <= angka; i++){
    temp.push(i)
  }

  for(var j = 0; j < temp.length; j++){
    result.push(temp.slice(j).concat(temp.slice(0,j)))
  }
  return result
}


console.log(urutanAngkaUlang(9));
/*
[ 
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 2, 3, 4, 5, 6, 7, 8, 9, 1 ],
  [ 3, 4, 5, 6, 7, 8, 9, 1, 2 ],
  [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
  [ 5, 6, 7, 8, 9, 1, 2, 3, 4 ],
  [ 6, 7, 8, 9, 1, 2, 3, 4, 5 ],
  [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
  [ 8, 9, 1, 2, 3, 4, 5, 6, 7 ],
  [ 9, 1, 2, 3, 4, 5, 6, 7, 8 ] 
]
*/

console.log(urutanAngkaUlang(6));
// /*
// [ 
//   [ 1, 2, 3, 4, 5, 6 ],
//   [ 2, 3, 4, 5, 6, 1 ],
//   [ 3, 4, 5, 6, 1, 2 ],
//   [ 4, 5, 6, 1, 2, 3 ],
//   [ 5, 6, 1, 2, 3, 4 ],
//   [ 6, 1, 2, 3, 4, 5 ] 
// ]
// */

