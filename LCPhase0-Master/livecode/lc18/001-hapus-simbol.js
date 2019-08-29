/**
  Hapus Simbol

  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z, A-Z dan angka 0-9.

  RULES:
  - WAJIB MENGGUNAKAN algoritma / pseudocode
  - DILARANG menambahkan parameter baru
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
 */


/**
 * Soal Hapus Simbol
 *
 * @param {*} str
 * @returns
 */

// function hapusSimbol(str) {
// 	var abcnum = 'abcdefghijklmnopqrstuvwxyz0123456789';
// 	var hasil = '';
// 	for (var i = 0; i < str.length; i++) {
// 		for (var j = 0; j < abcnum.length; j++) {
// 			if (abcnum[j] == str[i] || abcnum[j] == str[i].toLowerCase()) {
// 				hasil += str[i];
// 			}
// 		}
// 	}
// 	return hasil;
// }


function hapusSimbol(str) {
	var result = '';

	for(var i = 0; i < str.length; i++){
		if(str[i] >= 'a' && str[i] <= 'z' || Number(str[i]) >=0 && str[i] !== ' ' || str[i].toLowerCase() >= 'a' && str[i].toLowerCase() <= 'z'){
			result += str[i]
		}
	}
	return result
}



console.log(hapusSimbol('teEst%$4aa')); // test4aa
console.log(hapusSimbol('dEvel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100


//time: 4 mins
