//ini merupakan fungsi untuk menambahkan seluruh isi dari array
function arraySum(arr){
	var tempValue = 0;
	for(var j = 0; j < arr.length; j++){
		tempValue += arr[j];
	}
	return tempValue;
}

// ini merupakan fungsi untuk mengecek sisi kanan kiri array, dan mereturn indeks nilai ditengah
function findEvenIndex(arr){
	// pertama, lakukan inisiasi variabel, jika jumlah sum array dari indek 1 hingga indeks terakhir nilainya 0, maka return 0
	var irisan1 = arr.slice(1,arr.length);
	var value1 = arraySum(irisan1);
	if(value1 == 0){
		return 0;
	}
	
	//jika syarat diatas tidak memenuhi, maka eksekusi kode dibawah ini
	//kode dibawah ini bertujuan untuk mengecek bagian dalam array
	for(var i = 0; i < arr.length-2; i++){
		//dengan slice() kita menentukan array sisi kanan dan sisi kiri yang akan dihitung serta dijumlahkan
		//indeks array yang ditengah tidak diikut sertakan dalam perhitungan, karena dia akan direnturn jika kanan dan kiri memiliki nilai sama
		var irisan2 = arr.slice(0,1+i);
		var irisan3 = arr.slice(0+2+i,arr.length);

		//setelah ditentukan yang mana sisi kiri dan kanan, maka tiap tiap sisi dijumlahkan masing - masing nya
		var tempValue2 = arraySum(irisan2);
		var tempValue3 = arraySum(irisan3);
		
		//didapatkan nilai kanan dan kiri, maka dibandingkan, jika nilainya sama, maka indeks ditengah-tengah kedua sisi tersebut akan direnturn
		if(tempValue2 == tempValue3){
			return i+1;
		}

		//proses ini terus berulang sepanjang banyak array, dan juga tidak ketemu, makan akan dilanjutkan dengan kode dibawah
	}

	// inilah perkondisian terakhir
	// lakukan inisiasi variabel, jika jumlah sum array dari indek 0 hingga indeks terakhir-1 nilainya 0, maka return indeks terakhir dari array tersebut
	var irisan4 = arr.slice(0,arr.length-1);
	var value4 = arraySum(irisan4);
	if(value4 == 0){
		return arr.length-1;
	}
	//dan jika semua kondisi diatas tidak memenuhi, maka direnturn -1
	else{
		return -1;
	}
}

console.log(findEvenIndex([1,100,50,-51,1,1])); //1
console.log(findEvenIndex([1,2,3,4,3,2,1])); //3
console.log(findEvenIndex([20,10,30,10,10,15,35])); //3
console.log(findEvenIndex([20,10,-80,10,10,15,35])); //0
console.log(findEvenIndex([1,2,3,4,5,6])); //-1