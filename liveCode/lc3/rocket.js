/*
============
rankingAsrama
============

rankingAsrama adalah sebuah fungsi yang menerima parameter berupa array of object dengan format:

[
  { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
  { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
  ...
]

Data di atas merupakan campuran seluruh nilai murid dari asrama manapun.

Function akan mengeluarkan output informasi asrama dengan peringkat pertama berdasarkan nilai rata-rata penghuninya.


[EXAMPLE]

* INPUT *
[
  { nama: 'Harry Potter', nilai: 80, asrama: 'Griffindor' },
  { nama: 'Cho Chang', nilai: 60, asrama: 'Ravenclaw' },
  { nama: 'Pansy Parkinson', nilai: 70, asrama: 'Slyterin' },
  { nama: 'Dean Thomas', nilai: 50, asrama: 'Griffindor' },
  { nama: 'Ginny Weasley', nilai: 10, asrama: 'Griffindor' },
  { nama: 'Gregory Goyle', nilai: 10, asrama: 'Slyterin' },
  { nama: 'Penelope Clearwater', nilai: 10, asrama: 'Ravenclaw' },
  { nama: 'Tom Marvolo Riddle', nilai: 90, asrama: 'Slyterin' },
];

* PROCESS *
Setelah menghitung rata-rata dari setiap asrama diperoleh data
- Griffindo memperoleh rata-rata 47
- Ravenclaw memperoleh rata-rata 35
- Slyterin memperoleh rata-rata 57
Jadi asrama dengan rata-rata tertinggi adalah Slyterin

* OUTPUT *
Asrama peringkat pertama adalah Slyterin dengan nilai rata-rata 57


[NOTES]
  - angka rata-rata dibulatkan keatas.
  - Diasumsikan tidak ada asrama dengan rata-rata nilai yang sama.

*/

function dynamicGrouping(arr){
  var output = [];
  arr.sort();
  for(var i = 0; i < arr.length; i++){
    if(arr[i] != arr[i+1]){
      output.push(arr[i])
    }
  }
  return output;
}

function averangeArraySum(arr){
	// Rata-rata keatas
	var output = 0;
	for(var i = 0; i < arr.length; i++){
		output += arr[i];
	}
	return Math.ceil(output/arr.length);
}

function rankingAsrama(arr) {
	var temp = [];
	for(var i = 0; i < arr.length; i++){
		temp.push(arr[i].asrama);
	}
	console.log(temp);
	
	var temp2 = dynamicGrouping(temp);
	console.log(temp2);

	var asrama = [];
	for(var i = 0; i < temp2.length; i++){
		asrama.push({[temp2[i]] : []})
	}
	console.log(asrama)
	console.log(asrama[1]['Ravenclaw'])

	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < temp2.length; j++){
			if(arr[i].asrama == temp2[j]){
				asrama[j][temp2[j]].push(arr[i].nilai);
			}
		}
	}
	console.log(asrama)
	console.log(asrama[1]['Ravenclaw'])

	var max = 0;
	var result = ''
	for(var i = 0; i < asrama.length; i++){
		if(max < averangeArraySum(asrama[i][temp2[i]])){
			max = averangeArraySum(asrama[i][temp2[i]]);
			result = 'Asrama peringkat pertama adalah ' + temp2[i] + ' dengan nilai rata - rata ' + max;
		}
	}
	return result;
}

var data = [
  { nama: 'Harry Potter', nilai: 80, asrama: 'Griffindor' },
  { nama: 'Cho Chang', nilai: 60, asrama: 'Ravenclaw' },
  { nama: 'Pansy Parkinson', nilai: 70, asrama: 'Slyterin' },
  { nama: 'Dean Thomas', nilai: 50, asrama: 'Griffindor' },
  { nama: 'Ginny Weasley', nilai: 10, asrama: 'Griffindor' },
  { nama: 'Gregory Goyle', nilai: 10, asrama: 'Slyterin' },
  { nama: 'Penelope Clearwater', nilai: 10, asrama: 'Ravenclaw' },
	{ nama: 'Tom Marvolo Riddle', nilai: 90, asrama: 'Slyterin' },
	{ nama: 'Dipadana', nilai: 100, asrama: 'Ravenclaw' }
];

console.log(rankingAsrama(data)) // Asrama peringkat pertama adalah Slyterin dengan nilai rata-rata 57