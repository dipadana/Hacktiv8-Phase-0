function reverseThat(str){
	var arr = str.split(' ');
	var output = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == ' '){
			continue;
		}
		else if(i%2 == 0){
			output.push(arr[i]);
		}
		else{
			output.push(
				arr[i].split('').reverse('').join('')
			)
		}
	}
	return output[0] == '' ? '' : output.join(' ');
}

console.log(reverseThat('             '));
console.log(reverseThat("I really don't like reversing strings!"));
console.log(reverseThat('Reverse this string, please!'));