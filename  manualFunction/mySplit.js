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

function mySplit(str,simbol) {
	var temp = '';
	var data1 = []
	for(var i = 0; i < str.length; i++){
		if(str[i] == simbol[0]){
			data1.push(temp);
			temp = '';
		}
		else if(str[i] != simbol){
			temp += str[i];
		}
	}
	data1.push(temp);
	if(simbol.length == 1){
		return(data1);
	}
	var data2 = myJoin(data1,'');
}

console.log('anjingkamudandia'.split('dan'))

console.log(mySplit('Aku cinta kamu!',' ')); // ['Aku', 'cinta', 'kamu']
console.log(mySplit('Aku-cinta-kamu!','-')); // ['Aku', 'cinta', 'kamu']
console.log(mySplit('Aku?cinta?kamu!','?')); // ['Aku', 'cinta', 'kamu']
console.log(mySplit('Aku&@&cinta&@&kamu!','&&'));

var arr1 = ['dipa','kamu','dia'];
console.log(myJoin(arr1,' f')) // dipa kamu dia
console.log(arr1.join(' f'))