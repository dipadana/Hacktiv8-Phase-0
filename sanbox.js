function removeDuplicate(array){
	var output = [' '];
	var arr = array.sort();
	for(var i = 0; i < arr.length; i++){
	  
		if(arr[i] != arr[i+1]){
		  output.push(arr[i]);
		}
	  
	}
	output.shift()
	return output;
}

console.log(removeDuplicate([1,2,3,4,4,4,4,4,5,5,5,5,6])) //[1, 2, 3, 4, 5, 6]