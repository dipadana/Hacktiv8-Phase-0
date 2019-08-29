/*
=====
Hacktiv Mining
=====

[INSTRUCTIONS]
salesAmount adalah fungsi yang mengambil parameter:
    1. array penjualan/sales hasil tambang dari berbagai macam tambang yang dimiliki oleh perusahaan Hacktiv
    2. nama mineral yang ingin diketahui jumlah salesnya dari semua tambang-tambang tersebut.

Fungsi ini akan me-return amount atau jumlah dari sales suatu mineral. 

Berikut ini adalah daftar mineral beserta harga-harganya:
    - sulfur dengan harga 10
    - silver dengan harga 30
    - malachite dengan harga 50
    - gold dengan harga 50
    - diamond dengan harga 100

[EXAMPLE]
INPUT : 
- hasil tambang: [['silver','silver','gold'], ['gold','malachite']]
- mineral yang dicari nilai penjualannya: gold

PROSES:
1. Ada 2 tambang, tambang pertama menghasilkan [silver,silver,gold] dan tambang kedua menghasilkan [gold,malachite]
2. Di semua tambang perusahaan Hacktiv, terdapat 2 biji hasil tambang gold.
3. Harga gold adalah 50, jadi hasil penjualan gold adalah 100

OUTPUT:
100

[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin

*/

// Algoritma
// 1. Pertama kali, simpan data harga bijib besi yang dicari kedalam data yang berbentuk object
// 2. Membuat sebuah variable tampungan untuk menyimpan jumlah bijih logam yang didapatkan 
// 3. Melakukan pengecekkan berulang kali sebanyak banyak tambang besi x jumlah hasil tambangnya
// 4. Jika selama pengecekkan, ditemukan logam yang diinginkan, maka lanjut ke step 5.
// 5. Variable tampungan bijih logam mulai ditambah satu
// 6. Ketika sudah semua data disesuaikan dengan keinginan pelanggan, maka langsung menuju step 7.
// 7. Nilai dari variable penampung tadi dikali dengan data harga dari object yang dibuat dari step 1.
// 8. Tampilkan hasil

// Write the function here
function salesAmount(arr, dicari){
	var hargaBesi = {
		sulfur : 10,
		silver : 30,
		malachite : 50,
		gold : 50,
		diamond : 100
	}

	var output = 0;

	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr[i].length; j++){
			if(arr[i][j] == dicari){
				output++;
			}
		}
	}
	return output*hargaBesi[dicari];
}

// TEST CASE
var tambangA = [
  ['gold', 'gold', 'gold', 'diamond', 'diamond', 'sulfur'],
  ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold']
]
console.log(salesAmount(tambangA, 'gold')); // 200

var tambangB = [
  ['gold', 'gold', 'gold', 'diamond', 'diamond', 'sulfur'],
  ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold'],
  ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold'],
]
console.log(salesAmount(tambangB, 'diamond')); // 600

var tambangC = [
  [],
  ['sulfur', 'sulfur', 'silver', 'gold'],
  ['gold', 'diamond']
]
console.log(salesAmount(tambangC, 'sulfur')) // 20