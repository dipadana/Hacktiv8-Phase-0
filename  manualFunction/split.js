function mySplit(str,simbol) {
	var temp = '';
	var data1 = []
	for(var i = 0; i < str.length; i++){
		if(str[i] == simbol){
			data1.push(temp);
			temp = '';
		}
		else if(str[i] != ','){
			temp += str[i];
		}
	}
	data1.push(temp);
	return(data1);
}

console.log(mySplit('Aku cinta kamu!',' ')); // ['Aku', 'cinta', 'kamu']
console.log(mySplit('Aku-cinta-kamu!','-')); // ['Aku', 'cinta', 'kamu']
console.log(mySplit('Aku?cinta?kamu!','?')); // ['Aku', 'cinta', 'kamu']
