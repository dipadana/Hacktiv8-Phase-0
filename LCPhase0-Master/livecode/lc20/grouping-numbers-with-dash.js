
/*
Disediakan sebuah function numberGrouping yang bertugas untuk menerima 
sebuah parameter berupa angka, dan mengembalikan susunan angka baru yang 
merupakan hasil pengelompokan berdasarkan 3 digit angka. Apabila jumlah 
angka yang belum dikelompokan ada 4 maka akan dibagi menjadi 2 x 2 digit 
angka bukan 3 dan 1
Ex: Input: [ 1 , 2 , 3 , 4 , 5 , 6 ]
Output: 123-456
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 1]
Output: 123-456-78-91
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]
Output: 123-456-78
*/

// function numberGrouping(angka) {

// 	var result = String(angka).split(",");
// 	var str = "";
// 	// console.log(result.length)
// 	// console.log(result[result.length-4])
// 	var modif1 = Math.floor(result.length/2);
// 	// console.log(result[mo])
// 	for (var i = 0; i < result.length; i+=3) {
// 		if(result.length === 6){
// 			str += "-" + result[i] + result[i+1] + result[i+2]
// 		} else if(result){
// 			str += result[i] + result[i+1] + result[i+2] + "-";
// 		}
// 	}
// 	return str
// }

function numberGrouping(angka) {
	var result = ''
	var counter = 0;
	for(var i = 0; i < angka.length; i++){
		if(angka.length%3 === 0){
			counter++
			result += angka[i]
			if(counter === 3 && i < angka.length-1){
				result += '-'
				counter = 0
			}
		}else{
			if(i < angka.length-4){
				counter++;
				result += angka[i];
				if(counter === 3){
					result += '-'
					counter = 0;
				}
			}else{
				counter++;
				result += angka[i];
				if(counter === 2){
					result += '-'
				}
			}
		}
	}
	return result
}

console.log(numberGrouping([4,6,7,9,2,9])); //467-929
console.log(numberGrouping([6,3,1,8,4,7,9,3,5,8,9,9,7])); //631-847-935-89-97
console.log(numberGrouping([1,8,4,7,3,7,1])); //184-73-71