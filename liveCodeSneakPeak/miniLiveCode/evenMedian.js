
/*
  /////////////////////
  FUNCTION MEDIAN GENAP
  /////////////////////
  Fungsi Median Genap adalah mencari nilai median yang berupa genap di array.
  [PROCESS]
  INPUT:
  [1, 3, 4, 5, 6, 7]
  PROCESS:
  genap = [4, 6]
  median = 5
  OUTPUT:
  5
  [RULES]
  - Dilarang menggunakan built in function selain .push()
*/

function cariMedian(arr) {
	// Menentukan apakah jumlah element dari array tersebut, ganjil atau genap
	if(arr.length%2 == 0){
			// Jika genap, maka panjang elementnya akan dibagi 2, 
			// hasil perhitungan tersebut akan menghasilkan sebuah indeks array yang ditengah
			var batas = arr.length/2;
			return (arr[batas] + arr[batas-1])/2;
	}
	else{
			// Jika ganjil, maka langsung mencari indeks array yang ada ditengah
			var temp = 0;
			for(var i = 1; i <= arr.length; i++){
					temp += i;
			}
			// Lalu return nilai yang ada di indeks tengah
			return arr[(temp/arr.length)-1];
	}
}

function medianGenap(arr){
	var genap = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i]%2 == 0){
			genap.push(arr[i]);
		}
	}
	return genap.length === 0 ? 'Tidak ada median' : cariMedian(genap);
}

// TEST CASES
console.log(medianGenap([1, 2, 3, 4, 5])) // 3
console.log(medianGenap([1, 3, 4, 10, 12, 13])) // 10
console.log(medianGenap([3, 4, 7, 6, 10])) // 6
console.log(medianGenap([1, 3, 3])) // Tidak ada median
console.log(medianGenap([7, 7, 8, 8])) // 8