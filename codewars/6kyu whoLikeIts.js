function nameFormat(arr){
	var output = '';
	if(!arr.length) output = 'no one likes this';
	else if(arr.length == 1){
		output = arr[0] + ' likes this';
	}
	else if(arr.length == 2){
		output = arr[0] + ' and ' + arr[1] + ' like this';
	}
	else if(arr.length == 3){
		output = arr[0] + ', ' + arr[1] + ' and ' + arr[2] + ' like this';
	}
	else{
		output = arr[0] + ', ' + arr[1] + ' and ' + (arr.length-2) + ' others like this'
	}
	return output;
}

console.log(nameFormat([]));
console.log(nameFormat(["Jacob"]));
console.log(nameFormat(["Jacob", "Alex"])); // Jacob and Alex like This
console.log(nameFormat(["Max", "John", "Mark"])); // Max, John and Mark like this
console.log(nameFormat(["Alex", "Jacob", "Mark", "Max", 'Dipadana'])); // Alex, Jacob, and 2 others like this
// 'Alex, Jacob and 2 others like this'
// 'Alex, Jacob and 2 like this'