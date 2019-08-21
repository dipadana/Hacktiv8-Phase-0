/*
===============
Shortest Word
===============
[INSTRUCTIONS]
shortestWords adalah sebuah function yang menerima satu parameter berupa string,
di mana string tersebut adalah sebuah kalimat dengan rangkaian kata-kata.
function akan mereturn sebuah array yang terdiri dari kata dengan jumlah huruf paling sedikit di kalimat tersebut.
[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan indexOf, match, reduce, map dan regex
[EXAMPLE]
input: Do you want to become a great coder.
proses: panjang kata paling sedikit dalam kalimat tersebut: 1, maka akan mencari kata dengan huruf tersebut
output: ['a']
input (kalimat): You dont know what you have until you lose it!.
proses: panjang kata paling sedikit dalam kalimat tersebut: 3, maka akan mencari kata dengan huruf tersebut
output: ['you', 'it!']
*/

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

function shortestWords(words) {
  var output = [];
  var arr = mySplit(words, ' ');
  console.log(arr)
  
  var minLength = arr[0].length;
  for( var i = 0; i < arr.length; i++){
    if(minLength > arr[i].length){
      minLength = arr[i].length
    }
  }
  console.log(minLength)

  for( var i = 0; i < arr.length; i++){
    if(arr[i].length == minLength){
      output.push(arr[i])
    }
  }

  return removeDuplicate(output);
}

function removeDuplicate(array){
	var output = [' '];
  var arr = array.sort();
  var arr2 = [];
  for(var i = 0; i < arr.length; i++){
    arr2.push(arr[i].toLowerCase());
  }
  arr2.sort()
  console.log(arr2)
	for(var i = 0; i < arr2.length; i++){
		if(arr2[i] != arr2[i+1]){
			output.push(arr2[i]);
		}
	}
	output.shift()
	return output;
}

// TEST CASE
// console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!'] \\ kalo keluarnya ["You"] boleh ga?
// console.log(shortestWords('I am diligent')); // ['I']
// console.log(shortestWords('Apapun hasilnya, kita sudah berusaha, serahkan saja')); // ['kita', 'saja']