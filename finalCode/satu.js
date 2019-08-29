/*
******
Cari Student
******


Function studentFinder menerima input berupa string berisi nama-nama student sebuah batch, dipisahkan oleh " " atau ",".
Function ini mengeluarkan output berupa nama student dengan jumlah huruf terpendek.
Apabila ada 2 nama student yang terpendek, maka function akan mengeluarkan nama yang berada di posisi sebelah kiri terlebih dahulu!


[RULES]
  - Dilarang menggunakan built-in function .split

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

function studentFinder(students) {
  var output = '';
  var koma = false;
  var spasi = false;

  for(var i = 0; i < 2; i++){
    for(var j = 0; j < students.length; j++){
      if(students[j] == ' ') {spasi = true;}
      else if(students[j] == ',') {koma = true;}
    }
  }

  if(spasi){
    var arr = mySplit(students,' ') 
  }
  else if(koma){
    var arr = mySplit(students,',')
  }

  var temp = arr[0].length;
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length < temp){
      temp = arr[i].length;
      output = arr[i];
    }
  }
  return (output)
}



console.log(studentFinder('Hanif Ranev Tio Tirta Igor Yusril Tia Titania')); // Tio
console.log(studentFinder('Yogi Hengky Trina An Hamzah')); // An
console.log(studentFinder('Huday,Kay,Trisna,Kinan,Hazman')); // Kay