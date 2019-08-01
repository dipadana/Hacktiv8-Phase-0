function tentukanDeretAritmatika(arr) {
	// mencari selisihnya terlebih dahulu
	//karena ini deret aritmatika, cukupa angka pertama dan kedua
	//yang jadi patokan selisihnya
	var selisih = arr[1] - arr[0];

	// lalu buat sebuah variabel yg menampung angka terkahir dari 
	// kumpulan angka tersebut
	var maxNumber = arr[arr.length-1];

	// lalu, angka terakhir tersebut dikurangi dengan selisih,
	// berulang kali, sebanyak pangjang array tersebut
	for(var i = 0; i < arr.length-1; i++){
		maxNumber -= selisih;
	}

	// jika memang deret geometri, maka angka terakhir tersebut,
	// setelah dikurangi terus menerus, akan menghasilkan 
	// nilai yang sama dengan angka pertama
	if(maxNumber == arr[0]){
		return true;
	}
	else{
		return false;
	}
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false