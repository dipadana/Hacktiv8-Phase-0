function nameFormat(arr){
	var output = '';
	for(var i = 0; i < arr.length; i++){
		if(i == 0){
			output = arr[i].name;
		}
		else if(i == arr.length-1){
			output += ' & ' + arr[i].name
		}
		else output += ', ' + arr[i].name
	}
	return output;
}

console.log(nameFormat([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Dipa'} ])); // Bart, Lisa, & Maggie
console.log(nameFormat([ {name: 'Bart'}, {name: 'Lisa'} ])); // Bart & lisa
console.log(nameFormat([ {name: 'Bart'} ])); // Bart