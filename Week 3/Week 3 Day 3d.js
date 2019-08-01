function pasanganTerbesar(num) {
	// ubah number menjadi string, agar bisa diakses indeksnya
	var kalimat = String(num);

	// buat variabel untuk menampung nomor hasil perbandigan
	var finalNumber = 0;

	// pencekan dilakukan berulang kali, sebanyak panjang string tadi
	for(var i = 0; i < kalimat.length;i++){

		// jika nomor kombinasi lebih besar dari nomor variabel penampung
		// maka variabel penampung akan diupdate dengan data tersebut
		if(finalNumber < kalimat.slice(i,i+2)){
			finalNumber = kalimat.slice(i,i+2);
		}
	}
	return finalNumber;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99