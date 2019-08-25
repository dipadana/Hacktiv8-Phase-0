/*
  ////////////////////////////////////
  FUNCTION SECOND SMALLEST NUMBER EXTRA
  ////////////////////////////////////
  Fungsi Second Largest Number Extra akan mengembalikkan nilai terkecil kedua.
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
  OUTPUT:
  2
  [RULES]
  - Apabila tidak ada nilai output yang di kembalikan, maka kembalikan 'No Number'
*/

// Fungsi original buatan sendiri untuk sort :)
function mySort(arr){
	var temp = 0;
	for(var i = 0; i < arr.length-1; i++){
		for(var j = i+1; j < arr.length; j++){
				// Rubah tanda '>' menjadi '<' untuk mengurutkan dari besar ke terkecil
			if(arr[i] > arr[j]){
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

// Fungsi original buatan sendiri untuk menghapus nilai yang sama
// pada satu array
function removeDuplicate(arr){
  var output = [];
  mySort(arr);
  for(var i = 0; i < arr.length; i++){
    if(arr[i] != arr[i+1]){
      output.push(arr[i])
    }
  }
  return output;
}

function secondSmallestNumberExtra(arr){
  // Masukkan semua data menjadi satu array tunggal
  var output = [];
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      for(var k = 0; k < arr[i][j].length; k++){
        output.push(arr[i][j][k])
      }
    }
  }

  // Lakukan proses removeDuplicate dan return hasilnya
  var result = removeDuplicate(output)
  return result.length <= 1 || arr.length == 0 ? 'No Number' : result[1];
}

  // TEST CASE
console.log(secondSmallestNumberExtra([
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
])) // 2

console.log(secondSmallestNumberExtra([
  [
    [1, 1],
    [1],
    [1, 1]
  ],
  [
    [1],
    [1],
    [1, 1]
  ],
  [
    [1, 1, 1],
    [1, 1, 1],
    [1]
  ],
  [
    [1]
  ]
])) // No number

console.log(secondSmallestNumberExtra([])) // No number