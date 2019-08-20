/*
============
rapotAsrama
============
rapotAsrama adalah sebuah fungsi yang menerima parameter berupa array of object.
Function akan menerima sebuah parameter array of object dengan format:

  [
    { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
    { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
    ...
  ]

Data di atas merupakan campuran seluruh nilai murid dari asrama manapun.

Function akan memproses array of object tersebut untuk membuat sebuah rapot dalam bentuk array of object dengan format:

  [
    { asrama: <nama asrama>, lulus: <array berisi nama murid yg lulus>, gagal: <array berisi nama murid yg gagal> },
    { asrama: <nama asrama>, lulus: <array berisi nama murid yg lulus>, gagal: <array berisi nama murid yg gagal> },
    ...
  ]

Data yang diharapkan merupakan akumulasi murid yang lulus dan tidak dari setiap asrama.
Standard kelulusan adalah minimum 70.

*/

// DynamicCode
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

function rapotAsrama(arr) {
  var output = [];
  var asrama = [];
  var temp = [];
  for(var i = 0; i < arr.length; i++){
    asrama.push(arr[i].asrama)
  }

  temp = dynamicGrouping(asrama)

  for(var i = 0; i < temp.length; i++){
    output.push({asrama : temp[i], gagal:[], lulus:[]})
  }
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < output.length; j++){
      if(arr[i].asrama == output[j].asrama){
        if(arr[i].nilai >= 70){
          output[j].lulus.push(arr[i].nama)
        }
        else{
          output[j].gagal.push(arr[i].nama)
        }
      }
    }
  }
  return output;
}

// Hardcode
function rapotAsrama2(arr) {
	var output = [{asrama: 'Griffindor',lulus:[], gagal:[]},{asrama: 'Ravenclaw',lulus:[], gagal:[]},{asrama: 'Slyterin',lulus:[], gagal:[]}];
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < output.length; j++){
            if(arr[i].asrama == output[j].asrama){
                console.log(arr[i].nilai)
                if(arr[i].nilai >= 70){
                    output[j].lulus.push(arr[i].nama)
                }
                else{
                    output[j].gagal.push(arr[i].nama)
                }
            }
        }
	}
	return output;
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
];

console.log(rapotAsrama(data));

/* 
[
  {
    asrama: 'Griffindor',
    gagal: ['Dean Thomas', 'Ginny Weasley'],
    lulus: ['Harry Potter']
  },
  {
    asrama: 'Ravenclaw',
    gagal: ['Cho Chang', 'Penelope Clearwater'],
    lulus: []
  },
  {
    asrama: 'Slyterin',
    gagal: ['Gregory Goyle'],
    lulus: ['Pansy Parkinson', 'Tom Marvolo Riddle']
  }
]
*/