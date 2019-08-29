function positiveSum(arr) {

	if(arr.length === 0){
		return 0;
	}

	var num = 0;
	for(var i = 0; i < arr.length; i++){
		// console.log(arr[i])
		if(arr[i] > 0){
			num += arr[i];
		}
	}
	return num;
}
console.log(positiveSum([1,2,3,4,5]));//15
console.log(positiveSum([1,-2,3,4,5])); //13
console.log(positiveSum([])); //0
console.log(positiveSum([-1,-2,-3,-4,-5])); //0
console.log(positiveSum([-1,2,3,4,-5])); //9