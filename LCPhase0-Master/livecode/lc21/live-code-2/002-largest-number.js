/*
==================================
Array Mastery: Largest Number
==================================

[INSTRUKSI]
Function largestNumber akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999,
dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
largestNumber akan mengembalikan angka yang terbesar dari array tersebut.

[CONTOH]
input: [4, 2, 5, 1]
output: 5

[RULE]
- Wajib menuliskan algoritma. Tidak ada algoritma / algoritma tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
- Dilarang menggunakan built-in function .MAX dan .apply

ALGORITHM :

1. Create a new variable with the value of 0
2. For loop through the given parameter (iterate) if so continue to the next step
3. if numbers index i is larger than max (variable from step 1), then we re-assign numbers index i to variable max
4. display or return the result

*/

// function largestNumber(numbers) {

// 	var max = 0;

// 	for (var i = 0; i < numbers.length; i++) {
// 		// console.log(numbers[i])
// 		if(numbers[i] > max){
// 			max = numbers[i]
// 		}
// 	}
// 	return max
// }


function largestNumber(numbers) {
	var max = 0;

	for(var i = 0; i < numbers.length; i++){
		if(numbers[i] > max){
			max = numbers[i]
		}
	}
	return max
}



// TEST CASES
console.log(largestNumber([5, 2, 1, 4])); // 5
console.log(largestNumber([999, 5, 0, 1, 4, 998])); // 999
console.log(largestNumber([15, 32, 11, 14])); // 32
console.log(largestNumber([5, 4, 3, 2, 1, 0])); // 5
console.log(largestNumber([123, 321, 143, 313])); // 321

// 4 minutes 52 sec
// 2 minutes
