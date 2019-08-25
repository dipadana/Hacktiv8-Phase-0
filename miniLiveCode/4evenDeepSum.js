/*
  //////////////////////
  FUNCTION EVEN DEEP SUM
  //////////////////////
  Fungsi Even Deep Sum adalah fungsi untuk menjumlahkan isi dari multidimensi array yang genap.
  [PROCESS]
  INPUT:
  [
    [
      [1, 2, 3],
      [1, 2, 3]
    ],
    [
      [1, 2, 3],
      [1, 2],
      [1]
    ]
  ]
  PROCESS:
  genap = 2 + 2 + 2 + 2
  OUTPUT:
  8
  [RULES]
  - Dilarang menggunakan built in function selain .reduce()
  - Apabila tidak ada nilai output yang di kembalikan, maka kembalikan 'No Number'
*/

function evenDeepSum(arr){
  // Membuat sebuah variable penampung angka
  // genap dan sebuha variable output
  var genap = [];
  var output = 0;

  // Menyimpan semua angka genap didalam array genap
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      for(var k = 0; k < arr[i][j].length; k++){
        if(arr[i][j][k]%2 == 0){
          genap.push(arr[i][j][k])
        }
      }
    }
  }
  
  // Menjumlahkan semua angka genap yang ada
  for(var i = 0; i < genap.length; i++){
    output += genap[i]
  }

  // Jika tidak ada data yang masuk, maka return no number
  return output <= 0 ? 'No Number' : output; 
}

// TEST CASE
console.log(evenDeepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])) // 230

console.log(evenDeepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])) // 64

console.log(evenDeepSum([])) // No number