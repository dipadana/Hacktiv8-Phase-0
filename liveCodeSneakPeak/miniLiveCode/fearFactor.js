/*
  ===========
  Fear Factor
  ===========
  [INSTRUCTIONS]
  Fear Factor adalah suatu fungsi untuk mengetahui dia bisa menjadi juara atau
  tidak.
  [EXAMPLE]
  Input:
  fearFactor = 'Single'
  weaknesses = ['Single', 'Jomblo', 'Tikus', 'Air']
  Output:
  Dia kalah karena kelemahan yang pertama
  [RULE]
  - WAJIB menggunakan PSEUDOCODE
  - Maksimal weaknesses ada 9
  - Tidak boleh menggunakan built in function selain .push() dan .unshift()
*/

function fearFactorFunc(data, arr){
  // Membuat sebuah array yang berisi nama dari tiap - tiap indeks
	var urutan = ['pertama', 'kedua', 'ketiga', 'keempat', ' kelima', 'keenam', 'ketujuh', 'kedelapan', 'kesembilan'];
  
  // Melakukan looping dan pengecekan,
  // apakah data FearFactor yang masuk ada pada array
  for(var i = 0; i < arr.length; i++){
    
    // Jika ada minimal satu, maka dia akan kalah
    if(data == arr[i]){
			return 'Dia kalah karena kelemahan yang ' + urutan[i];
		}
  }
  
  // Jika tidak ditemukan, maka dia akan menang
	return 'Selamat dia juara';
}

let fearFactor = 'Single'
let weaknesses = ['Single', 'Jomblo', 'Tikus', 'Air']
console.log(fearFactorFunc(fearFactor, weaknesses))
// Dia kalah karena kelemahan yang pertama

let fearFactor2 = 'Menikah'
let weaknesses2 = ['Single', 'Jomblo', 'Tikus', 'Air']
console.log(fearFactorFunc(fearFactor2, weaknesses2));
// Selamat dia juara

let fearFactor3 = 'Menikah'
let weaknesses3 = ['Single', 'Jomblo', 'Tikus', 'Air', 'Makan', 'Menari', 'Menyanyi', 'Dandan', 'Menikah']
console.log(fearFactorFunc(fearFactor3, weaknesses3));
// Dia kalah karena kelemahan yang kesembilan

let fearFactor4 = 'Menikah'
let weaknesses4 = ['Single', 'Jomblo', 'Tikus', 'Air', 'Makan', 'Menari', 'Menyanyi', 'Dandan', 'Jomblo Fisabilillah']
console.log(fearFactorFunc(fearFactor4, weaknesses4));
// Selamat dia juara