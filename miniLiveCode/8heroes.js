/*
  HEROES
  Heroes adalah sebuah fungsi untuk menentukkan karakter apa saja yang disukai
  orang sehingga yang duplikat tidak perlu dicatat.
  Fungsi akan menerima parameter berupa string
  EXAMPLE
  INPUT: "saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"
  OUTPUT: [saitama, naruto, nobita, sasuke]
  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), .unshift()
*/
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
		if(str[i] == simbol){
			data1.push(temp);
			temp = '';
		}
		else if(str[i] != ' '){
			temp += str[i];
		}
	}
	data1.push(temp);
	
	console.log(data1)
  
  return(data1);
	if(simbol.length == 1){
	}

	// console.log(data1)
	// var data2 = myJoin(data1,'');

	// console.log(data2)
}

function Heroes(str){
  var temp = mySplit(str,'&')
  var temp2 = [];
  for(var i = 0; i < temp.length; i++){
    if(temp[i] != '')
    temp2.push(temp[i])
  }
  console.log(temp)
  return(removeDuplicate2(temp2))
}

// TEST CASE
console.log(Heroes('saitama&&naruto&&nobita&&nobita&&saitama&&sasuke'))
// [ 'saitama', 'naruto', 'nobita', 'sasuke' ]
console.log(Heroes('doraemon&&sakura&&inuyasha&&saitama&&shoji&&ikan indosiar'))
// [ 'doraemon', 'sakura', 'inuyasha', 'saitama', 'shoji', 'ikan indosiar' ]
// console.log`(Heroes(''))
// There's no heroes