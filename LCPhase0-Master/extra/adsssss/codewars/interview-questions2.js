
var moveZeros = function (arr) {

	var temp = [];
	var num = [];

	for (var i = 0; i < arr.length; i++) {
		// console.log(arr[i])
		if(arr[i] === 0){
			temp.push(arr[i])
		} else {
			num.push(arr[i])
		}
	}

	for(var j = 0; j < temp.length; j++){
		num.push(temp[j])
	}
	return num
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])); // semua angka 0 ada di belakang
console.log(moveZeros([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]))