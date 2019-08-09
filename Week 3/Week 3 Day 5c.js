// Mengelompokan Angka
function groupAnimals(animals) {
	// Melakukan sort terhadap array agar lebih mudah melakukan pengelompokkan
	animals.sort();

	// Membuat semua variabel dan array penampung yang dibutuhkan
	var i = 0;
	var j = 0;
	var temp = [];
	var hasil = [];

	// Dilakukan perulangan sebanyak panjang array
	for( i = 0; i < animals.length; i++){

		if(i != animals.length-1){
			// Jika huruf pertama pada hewan yg dibandingkan adalah sama, maka hewan yg dikiri masuk kedalam array hasil=[]
			if(animals[i][0] == animals[i+1][0]){
				temp.push(animals[i])
				hasil[j] = temp

			}
			else{
				// Jika hurufnya tidak sama, maka hewan yg disebelah kiri akan tetap masuk kedalam array,
				// tetapi indek pertama dari array tersebut akan bertambah sebanyak 1,
				// array temp=[] akan direset kembali, selama counter masih lebih kecil dari jumlah element dari binatang, 
				// maka looping akan terus berlanjut
				temp.push(animals[i])
				hasil[j] = temp
				j++;
				temp = [];
			}
		}
		// Jika semuanya sudah habis, maka nama hewan tersisa akan dipush kedalam array hasil=[]
		else{
			temp.push(animals[i])
			hasil[j] = temp;
		}
	}
	return hasil;
}

// TEST CASES
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


console.log(groupAnimals(['anjing', 'ngegat', 'nyamuk', 'burung', 'badak', 'macan', 'singa' ]));
// [ [ 'anjing' ], [ 'badak', 'burung' ], [ 'macan' ], [ 'ngegat', 'nyamuk' ], [ 'singa' ] ]