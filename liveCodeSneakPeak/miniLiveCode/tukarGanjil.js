/*
  /////////////////////
  FUNCTION TUKAR GANJIL
  /////////////////////
  Fungsi Tukar Ganjil akan mengubah besar dan kecil huruf apabila berada di index yang ganjil.
  [PROCESS]
  INPUT:
  'Dana K'
  PROCESS:
  1 => d (karena 1 ganjil)
  2 => a
  3 => N (karena 3 ganjil)
  4 => a
  5 => ' ' (diabaikan)
  6 => K
  OUTPUT:
  daNa K
  [RULES]
  - Dilarang menggunakan built in function apapun
*/

function jadiBesar(str){
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

function jadiKecil(str){
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

function tukarGanjil(str){
  var output = '';
  for(var i = 0; i < str.length; i++){
    if((i+1)%2 != 0){
      if(str[i] == jadiBesar(str[i])){
        output += jadiKecil(str[i]);
      }
      else if(str[i] == jadiKecil(str[i])) {
        output += jadiBesar(str[i]);
      }
      else{
        output += str[i];
      }
    }
    else{
      output += str[i];
    }
  }
  return output;
}

// TEST CASES
console.log(tukarGanjil('Hello World')) // "heLlO woRlD"
console.log(tukarGanjil('I aM aLAY')) // "i AM alAy"
console.log(tukarGanjil('My Name is Bond!!')) // "my NAmE Is BOnD!!"
console.log(tukarGanjil('IT sHOULD bE me')) // "iT shOuLd BE mE"
console.log(tukarGanjil('001-A-3-5TrdYW')) // "001-a-3-5TRdyW"