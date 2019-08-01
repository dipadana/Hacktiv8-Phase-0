function pasanganTerbesar(num) {
	var kalimat = String(num);
	console.log(kalimat);

	for(var i = 0; i < kalimat.length;i++){
		if(kalimat.slice(i,i+2)>kalimat.slice(i+1,i+3)){
			c

		}
	}
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99