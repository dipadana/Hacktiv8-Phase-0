// Deret Aritmatika
function tentukanDeretAritmatika(arr) {
	// Mencari selisihnya terlebih dahulu,
	// karena ini deret aritmatika, cukup angka pertama dan kedua
	// yang jadi patokan selisihnya
	var selisih = arr[1] - arr[0];

	// Lalu buat sebuah variabel yg menampung angka terkahir dari 
	// kumpulan angka tersebut
	var maxNumber = arr[arr.length-1];

	// Lalu, angka terakhir tersebut dikurangi dengan selisih,
	// berulang kali, sebanyak pangjang array tersebut.
	// Setiap mengurangi satu kali wajib di cek 
	for(var i = 0; i < arr.length-1; i++){
		maxNumber -= selisih;
		if(maxNumber != arr[arr.length-2-i]){
			maxNumber = 'error';
			break;
		}
	}

	// Jika memang deret aritmatika, maka angka terakhir tersebut
	// setelah dikurangi terus menerus, akan menghasilkan nilai yang sama dengan angka pertama.
	// Jika semua angka sudah dicek, dan tepat, maka akan mereturn true
	if(maxNumber == 'error'){
		return false;
	}
	else{
		return true;
	}
}

// TEST CASES
console.log(tentukanDeretAritmatika([10, 20, 30, 40, 55, 60,70]));
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false