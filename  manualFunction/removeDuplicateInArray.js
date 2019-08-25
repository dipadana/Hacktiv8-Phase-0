function mySort(arr){
	var temp = 0;
	for(var i = 0; i < arr.length-1; i++){
		for(var j = i+1; j < arr.length; j++){
				// Rubah tanda '>' menjadi '<' untuk mengurutkan dari besar ke terkecil
			if(arr[i] > arr[j]){
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

function removeDuplicate(array){
	var output = [' '];
	var arr = mySort(array);
	for(var i = 0; i < arr.length; i++){
		if(arr[i] != arr[i+1]){
			output.push(arr[i]);
		}
	}
	output.shift()
	return output;
}

function removeDuplicate2(arr){
  var output = [];
  mySort(arr);
  for(var i = 0; i < arr.length; i++){
    if(arr[i] != arr[i+1]){
      output.push(arr[i])
    }
  }
  return output;
}

console.log(removeDuplicate2([1,2,3,4,4,4,4,4,5,5,5,5,6])); //[1, 2, 3, 4, 5, 6]
console.log(removeDuplicate2(['aku', 'aku', 'aku', 'dia', 'saya'])); // ['aku', 'dia', 'saya']