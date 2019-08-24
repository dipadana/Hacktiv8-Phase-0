function stringTransformer(str) {
	var arr = str.split('')
	var output = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == arr[i].toUpperCase()){
			output.push(arr[i].toLowerCase());
		}
		else if(arr[i] == arr[i].toLowerCase()){
			output.push(arr[i].toUpperCase());
		}
		else{
			output.push(arr[i]);
		}
	}
	return output.join('').split(' ').reverse().join(' ');
}

console.log(stringTransformer('Example String')) // sTRING eXAMPLE