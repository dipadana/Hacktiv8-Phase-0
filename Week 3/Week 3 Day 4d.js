// Deret Geometri
function tentukanDeretGeometri(arr) {
	var selisih = arr[1] / arr[0];
	var maxNumber = arr[arr.length-1];
	for(var i = 0; i < arr.length-1; i++){
		maxNumber /= selisih;
		if(maxNumber != arr[arr.length-2-i]){
			maxNumber = 'error';
			break;
		}
	}
	if(maxNumber == 'error'){
		return false;
	}
	else{
		return true;
	}
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretGeometri([1, 3, 30, 27, 81])); //false