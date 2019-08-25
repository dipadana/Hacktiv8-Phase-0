/*
  ///////////////////
  FUNCTION UBAH MODUS
  ///////////////////
  Fungsi Ubah Modus adalah sebuah fungsi yang mengubah modus dengan nama yang baru
  [PROCESS]
  INPUT:
  arrayModus = ['Rina', 'Bella', 'Angela', 'Christina', 'Sophia', 'Alice', 'Angela']
  modusBaru = 'Dilla'
  OUTPUT:
  ['Rina', 'Bella', 'Dilla', 'Christina', 'Sophia', 'Alice', 'Dilla']
  [RULES]
  - Asumsi selalu ada modus dan newModus
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

function ubahModus(arr, newModus) {
  // Menentukan berapa banyak jenis nama yang ada
  // dan membuat sebuah array kosong berdasarkan jumlah jenis nama yang ada
  var onlyName = removeDuplicate(arr)
  var temp = [];
  for(var i = 0; i < onlyName.length; i++){
    temp.push([0])
  }

  // Mencari modus dari data, dan melacak indeksnya
  for(var i = 0; i < onlyName.length; i++){
    for(var j = 0; j < arr.length; j++){
      if(arr[j] == onlyName[i]){
        temp[i]++;
      }
    }
  }

  // Proses melacak indeks modus
  var max = temp[0];
  var indeksMax = 0;
  for(var i = 0; i < temp.length; i++){
    if(max < temp[i]){
      max = temp[i];
      indeksMax = i;
    }
  }
  
  // Berdasarkan indek yang sudah didapat, 
  // maka langsung merubah modus menjadi nama yang baru
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == onlyName[indeksMax]){
      arr[i] = newModus;
    }
  }

  return arr;
}

// TEST CASES
console.log(ubahModus(['Rina', 'Bella', 'Angela', 'Christina', 'Sophia', 'Alice', 'Angela'], 'Dilla'))
// ['Rina', 'Bella', 'Dilla', 'Christina', 'Sophia', 'Alice', 'Dilla']

console.log(ubahModus(['Anita', 'Reina', 'Anita'], 'Sora'))
// ['Sora', 'Reina', 'Sora']