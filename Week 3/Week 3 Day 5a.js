function targetTerdekat(arr) {
	if(arr.indexOf('x') != -1){
		// Merupakan variable penampung untuk indeks lokasi value o
	var locationO = arr.indexOf('o');

	// Merupakan variable penampung untuk lokasi value x sementara
	var locationX = [];

	// Merupakan variable penampung untuk indeks lokasi value x final
	var tempNumber = [];


	// Kode dibawah ini merupakan kode fungsi untuk melakukan 
	// pencatatan terhadap indeks lokasi x sementara
	var element = 'x';
	var idx = arr.indexOf(element);
	while (idx != -1) {
  locationX.push(idx);
  idx = arr.indexOf(element, idx + 1);
	}

	// Setelah dicatat semua lokasi x, selanjutnya adalah untuk mengurangi indeks o dan indeks x
	// Semua hasil diabsolutkan agar tidak ada nilai minus
	for(var i = 0; i < locationX.length; i++){
		tempNumber[i] = Math.abs(locationO - locationX[i]);
		
	}

	// setelah semua nilai selisih x dan o didapatkan, maka dilakukan sort dari kecil ke besar
	// lalu mereturn indeks 0 dari lokasi x final, karena value tersebut merupakan jarak terkecil anatara x dan o
	tempNumber.sort(function(a, b){return a - b});
	return tempNumber[0];
	}
	else{
		return 0;
	}
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x']));// 2

// Reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// https://www.w3schools.com/js/js_array_sort.asp