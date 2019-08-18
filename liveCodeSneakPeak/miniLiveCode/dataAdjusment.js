/*
=================
DATA ADJUSTMENT
=================
dataAdjustment adalah sebuah function yang menerima sebuah parameter berbentuk
array of array, dan yang harus di handle dan diubah bentuk array yang ada di dalam
menjadi sebuah object, serta tahun lahir yang harus di transformasi menjadi umur
Sangat mudah bukan?
*/

function dataAdjustment(arr){
	var output = [];
	for(var i = 0; i < arr.length; i++){
		output.push({
			name : arr[i][0],
			age : 2019 - arr[i][1],
			gender : arr[i][2],
			skill : arr[i][3]
		})
	}
	return output;
}

console.log(dataAdjustment([
	['Wika', 1991, 'Male', 'Water Bender'],
	['Rama', 1991, 'Male', 'Stand up Comedy'],
	['Icha', 1991, 'Male', 'Soul Cleansing'],
	['Hardim', 1991, 'Male', 'Ban Pokemon Go Player'],
	['Isro', 1991, 'Male', 'Making Awtian Creating This Problem']
]))

// [ { name: 'Wika', age: 28, gender: 'Male', skill: 'Water Bender' },
//   { name: 'Rama',
//     age: 28,
//     gender: 'Male',
//     skill: 'Stand up Comedy' },
//   { name: 'Icha', age: 28, gender: 'Male', skill: 'Soul Cleansing' },
//   { name: 'Hardim',
//     age: 28,
//     gender: 'Male',
//     skill: 'Ban Pokemon Go Player' },
//   { name: 'Isro',
//     age: 28,
//     gender: 'Male',
//     skill: 'Making Awtian Creating This Problem' } ]