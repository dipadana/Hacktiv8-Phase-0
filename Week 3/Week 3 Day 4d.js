// Deret Geometri
function tentukanDeretGeometri(arr) {
	// Mencari selisihnya terlebih dahulu,
	// karena ini deret geometri, cukup angka pertama dan kedua
	// yang jadi patokan selisihnya
	var selisih = arr[1] / arr[0];

	// Lalu buat sebuah variabel yg menampung angka terkahir dari 
	// kumpulan angka tersebut
	var maxNumber = arr[arr.length-1];

	// Lalu, angka terakhir tersebut dibagi dengan selisih,
	// berulang kali, sebanyak pangjang array tersebut.
	// Setiap mengurangi satu kali wajib di cek 
	for(var i = 0; i < arr.length-1; i++){
		maxNumber /= selisih;
		if(maxNumber != arr[arr.length-2-i]){
			maxNumber = 'error';
			break;
		}
	}
	// Jika memang deret geometri, maka angka terakhir tersebut
	// setelah dibagi terus menerus, akan menghasilkan nilai yang sama dengan angka pertama.
	// Jika semua angka sudah dicek, dan tepat, maka akan mereturn true
	if(maxNumber == 'error'){
		return false;
	}
	else{
		return true;
	}
}



// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretGeometri([1, 3, 30, 27, 81])); //false