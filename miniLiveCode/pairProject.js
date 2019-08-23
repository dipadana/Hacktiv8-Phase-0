
/*
	============
	PAIR PROJECT
	============
	[INSTRUCTION]
	saat nya phase 0 mengerjakan project secara pair ( berpasangan / berdua ).
	dalam pembagian kelompok student, ada kriteria yang harus dipenuhi yaitu
	setiap kelompok yang dipasangkan harus memiliki huruf depan ( inisial ) yang
	BERBEDA.
	pada kelas ini , jumlahnya selalu genap dan murid yang memiliki inisial yang sama
	tidak lebih dari 2 orang
	ketentuan :
	- jika murid berjumlah ganjil output : "Jumlah murid harus genap"
	- tambahkan test case lain bila diperlukan
	[Example]
	input : ["asep","baqi","jajang","junaedi","iqbal","toni"]
	output : ["asep and baqi","jajang and iqbal","junaedi and toni"]
	[RULE]
	- dilarang menggunakan build in function array apapun kecuali push()
	- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
	- Dilarang menggunakan regex .match dan lainnya!
	- Dilarang menggunakan built in function .indexOf() dan .include()
*/

function pairProject(arr){
	// Membuat banyak array kosong sesuai kebutuhan
	var output = [];
	var tempSame = [];
	var tempDif = [];
	var result = [];

	// Melakukan pemisahan antara nama yang memiliki abjad sama atau tidak
	for(var i = 0; i < arr.length-1; i++){
		// Jika ditemukan ada dua abjad sama yang saling bersebelahan,
		// maka akan langsung dipisahkan, dan dimassukan kedalam array yang berbeda
		if(arr[i][0] == arr[i+1][0]){
			tempSame.push(arr[i]);
		}
		// jika tidak sama bersebelahan, maka akan langsung dimasukkan array
		else{
			tempDif.push(arr[i])
		}
	}
	// Memasukkan anggota array yang paling terakhir
	tempDif.push(arr[arr.length-1])

	// Menggabungkan array dua array yang terbentuk tadi, 
	// pemisahan tadi bertujuan untuk melakukan penyusunan
	// ulang urutan dari nama-nama yang ada
	for(var i = 0; i < tempSame.length; i++){
		output.push(tempSame[i]);
	}
	for(var i = 0; i < tempDif.length; i++){
		output.push(tempDif[i]);
	}

	// Jika sudah disusun ulang, maka langsung saja dikelompokkan 
	// menjadi dua - dua grup
	for(var i = 0; i < output.length; i+=2){
		result.push(output[i] + ' and ' + output[i+1])
	}
	
	// Jika ternyata murid tidak genap atau kosong, maka ditampilkan array harus genap
	return arr.length%2 != 0 || arr.length == 0 ? "Jumlah murid harus genap" : result;
}


console.log(pairProject(['Aries', 'Momotaro', 'Awtian', 'Yoki', 'Icha', 'Wika', 'Wawan', 'Mimin', 'Ryan', 'Yogi']))
/*
[ 'Aries and Momotaro',
  'Awtian and Yoki',
  'Icha and Wika',
  'Wawan and Mimin',
  'Ryan and Yogi' ]
*/

console.log(pairProject(['asep', 'baqi', 'jajang', 'junaedi', 'iqbal', 'toni']))
/*
  ["asep and baqi","jajang and iqbal","junaedi and toni"]
*/

console.log(pairProject(['asep', 'baqi', 'jajang', 'junaedi', 'iqbal']))
/*
  Jumlah murid harus genap
*/