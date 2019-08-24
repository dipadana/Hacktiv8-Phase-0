function anagrams(str, arr){
	var str1 = str.split('').sort().join('')
	var output = [];
	for(var i = 0; i < arr.length; i++){
		if(str1 == arr[i].split('').sort().join('')){
			output.push(arr[i]);
		}
	}
	return output;
}	

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))
console.log(anagrams('kasur', ['rusak', 'abcd', 'bbaa', 'dada']))