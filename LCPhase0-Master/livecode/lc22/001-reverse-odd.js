/**
Reverse Odd
Implementasikan function reverseOdd untuk membalikkan setiap elemen string dengan urutan genap
yang ada di dalamnya.
Contoh:
- input: ['awtian', 'raijin', 'thunderkeg']
  output: ['awtian', 'nijiar', 'thunderkeg']
- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['alisa', 'uyoaix', 'nina', 'ilil']
- input: []
  output: []
Aturan coding:
WAJIB MENYERTAKAN ALGORITHMA ATAU PSEUDOCODE
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()

PSEUDOCODE

STORE str with the value of empty string
STORE result with array
	
	FOR LOOP arr 
		IF arr[i] mod 2 equals to 0 THEN 
			FOR LOOP reverse the string

*/

// function reverseEven (arr) {
// 	var result = [];
// 	if(!arr.length){
// 		return result
// 	}

// 	for (var i = 0; i < arr.length; i++) {
// 		var str = "";
// 		if(i % 2 === 1){
// 			for (var j = arr[i].length - 1; j >= 0; j--) {
// 				str += arr[i][j];
// 			}
// 			result.push(str);
// 		} else {
// 			result.push(arr[i])
// 		}
// 	}
// 	return result;
// }

function reverseEven (arr) {
	var result = [];
	if(arr.length === 0){
		return result
	}else{
		for(var i = 0; i < arr.length; i++){
			var temp = '';
			if(i%2 === 1){
				for(var j = arr[i].length-1; j >= 0; j--){
					temp += arr[i][j]
				}
				result.push(temp)
			}else{
				result.push(arr[i])
			}
		}
	}
	return result
}

console.log(reverseEven(['clinkz', 'jahrakal', 'kael']));
// [ 'clinkz', 'lakarhaj', 'kael' ]

console.log(reverseEven(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));
// // [ 'moonfang', 'edahsthgin', 'lightbringer', 'rywgyrts' ]

console.log(reverseEven([]));
// // []

// 4 minutes 23 sec