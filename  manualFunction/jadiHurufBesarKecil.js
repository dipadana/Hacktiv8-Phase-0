function jadiHurufBesar(str){
	var abjadBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var abjadKecil = 'abcdefghijklmnopqrstuvwxyz';
	var output = '';
	for(var i = 0; i < str.length; i++){
		var temp = '';
		for(var j = 0; j < abjadKecil.length; j++){
			if(str[i] == abjadKecil[j]){
				temp = abjadBesar[j];
				break;
			}
			else{
				temp = str[i];
			}
		}
		output += temp;
	}
	return output;
}

function jadiHurufKecil(str){
	var abjadBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var abjadKecil = 'abcdefghijklmnopqrstuvwxyz';
	var output = '';
	for(var i = 0; i < str.length; i++){
		var temp = '';
		for(var j = 0; j < abjadBesar.length; j++){
			if(str[i] == abjadBesar[j]){
				temp = abjadKecil[j];
				break;
			}
			else{
				temp = str[i];
			}
		}
		output += temp;
	}
	return output;
}

console.log(jadiHurufBesar('gila')); // GILA
console.log(jadiHurufKecil('GILA')); // gila