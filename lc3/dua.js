"use strict"
/*
============
dataSiswa
============

[INSTRUCTIONS]
dataSiswa adalah sebuah fungsi yang menerima parameter berupa string.
String tersebut memiliki format `studentID-nama-nilai`.

Function akan membaca data siswa dari input dan mengubahnya menjadi array of objects.


[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan hasil tes hari ini"
2. Diasumsikan tidak ada siswa yang memperoleh nilai yang sama

[RULES]
2. Dilarang menggunakan built-in split

*/

// Karena tidak boleh pake built-in split,
// jadi saya buat fungsi split sendiri :D
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

function dataSiswa(str){
	var data1 = mySplit(str,',')
	
	var data2 = [];
	for(var i = 0; i < data1.length; i++){
		data2.push(mySplit(data1[i],'-'));
	}
	console.log(data2)
	var output = [];
	for(var i = 0; i < data1.length; i++){
		output.push({
			id : data2[i][0],
			name : data2[i][1],
			score : data2[i][2]
		})
	}
	return str == '' ? 'tidak ada catatan hasil tes hari ini' : output;
}


console.log(dataSiswa("001-Radith-88,002-Putra-100,003-Levy-83"))
/* 
[
  { id: '001', name: 'Radith', score: 88 },
  { id: '002', name: 'Putra', score: 100 },
  { id: '003', name: 'Levy', score: 83 }
]
 */

console.log(dataSiswa("001-Radith-5,002-Putra-92,003-Levy-100"))
/* 
[
  { id: '001', name: 'Radith', score: 5 },
  { id: '002', name: 'Putra', score: 92 },
  { id: '003', name: 'Levy', score: 100 }
]
 */

console.log(dataSiswa("001-Radith-88,002-Putra-70,003-Levy-65,004-Radinka-88,005-Bagas-90"))
/* 
[
  { id: '001', name: 'Radith', score: 88 },
  { id: '002', name: 'Putra', score: 70 },
  { id: '003', name: 'Levy', score: 65 },
  { id: '004', name: 'Radinka', score: 88 },
  { id: '005', name: 'Bagas', score: 90 }
]
 */

console.log(dataSiswa("")) // tidak ada catatan hasil tes hari ini