function myJoin(arr, symbol = ','){
	var output = '';
	for(var i = 0; i < arr.length; i++){
		output += arr[i];
		if(i != arr.length-1){
			output += symbol
		}
	}
	return output;
}

var arr1 = ['dipa','kamu','dia'];
console.log(myJoin(arr1,' ')) // dipa kamu dia
console.log(arr1.join(' '))