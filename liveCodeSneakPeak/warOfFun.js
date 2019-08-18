/*
========
warOfFun
========
[INSTRUCTIONS]
warOfFun adalah sebuat fungsi yang menerima parameter berupa string dan
akan mengembalikan nilai string yang merupakan pemenang perlombaan.
[EXAMPLE]
INPUT: [
 ['andre', 'toni', 'toti'],
 ['risk', 'fun', 'go'],
 ['humble', 'psycho', 'strong']
]
PROCESS:
1. array[0] akan berisi nama-nama pemain
2. array-aray pada indeks berikutnya akan berisi attribut-attribut yang dimiliki oleh setiap pemain sesuai dengan indeksnya
3. pada array[1] andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun
4. pada array[2] andre tidak memiliki fun, toni tidak memiliki fun, dan toti tidak memiliki fun.
5. total andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun, sehingga pemenangnya adalah toni.
OUTPUT: pemenangnya adalah toni
[NOTES]
 1. Apabila tidak ada pemenang tampilkan "mohon maaf tidak ada pemenangnya"
 2. Asumsi tidak akan ada yang seri tapi tidak selalu ada pemenangnya
[RULES]
 1. Dilarang menggunakan built in function .sort()
*/

function warOfFun(arr){
	// Pertama melakukan pengelompokkan data,
	// dikelompokkan sesuai dengan indeks orang yang memiliki hasil data
	var temp2 = [];
	for(var i = 0; i < arr.length; i++){
		var temp = [];
		for(var j = 1; j < arr.length; j++){
			temp.push(arr[j][i])
		}
		temp2.push(temp);
	}
	console.log(temp2)
	
	// Data yang sudah masuk, dihitung jumlah kata 'fun'
	// yang dimiliki oleh tiap=tiap orang.
	// Hasil perhitungan tersebut dikelompokkan kedalam array
	var temp3 = [];
	for(var i = 0; i < temp2.length; i++){
		var count = 0;
		for(var j = 0; j < temp2[i].length; j++){
			if(temp2[i][j] == 'fun'){
				count++;
			}
		}
		temp3.push(count);
	}
	console.log(temp3)

	// Data hasil perhitungan tadi, 
	// dihitung kembali, siapa yang memiliki jumlah kata 'fun'
	// paling banyak
	var temp4 = 0;
	var result = -1;
	for(var i = 0; i < temp3.length; i++){
		if(temp4 < temp3[i]){
			temp4 = temp3[i];
			result = i;
		}
	}
	console.log(result)

	// Lalu direturn sesuai dengan ketentuan
	return result == -1 ? 'mohon maaf tidak ada pemenang' :'pememangnya adalah ' + arr[0][result];
}

// TEST CASE
console.log(warOfFun([
 ['andre', 'toni', 'toti'],
 ['risk', 'fun', 'go'],
 ['humble', 'psyhco', 'strong']
]))
// pemenangnya adalah toni

console.log(warOfFun([
 ['andre', 'toni', 'toti', 'tito'],
 ['fun', 'fun', 'fun'],
 ['fun', 'fun'],
 ['nonfun', 'fun', 'fun', 'fun']
]))
// pemenangnya adalah toni

console.log(warOfFun([
 ['andre', 'toni'],
 ['risk', 'go'],
 ['humble', 'strong']
]))
// mohon maaf tidak ada pemenangnya

console.log(warOfFun([]))
// mohon maaf tidak ada pemenangnya