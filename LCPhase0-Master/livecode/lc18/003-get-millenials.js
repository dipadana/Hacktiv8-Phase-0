/**

Divisi marketing akan mencoba mengiklankan perusahaan mereka didalam social media,
mereka memiliki beberapa iklan yang sudah disesuaikan dengan beberapa social media.
Divisi marketing juga memiliki data calon customer yang menjadi target market mereka.
Tetapi mereka kesulitan mengkelompokan calon customer berdasarkan rentang umur dan
social media apa saja yang calon pelanggan miliki.

Diberikan sebuah function getMillenials(data) yang menerima sebuah parameter berupa
array dua dimensi. Dimana output dari function ini adalah array of object yang menampilkan
calon customer yang range umur berada di 20 - 29 tahun

Contoh 1:
- input:
        [
          ['Nama', 'Umur', 'Asal', 'MediaSosial'],
          ['Tobias', 21, 'Jakarta', 'Twitter;Facebook'],
          ['Kevin', 18, 'Bandung', 'Instagram;LinkedIn;Facebook'],
          ['Syldie', 25, 'Malang', 'Google+;Instagram;Twitter'],
          ['Chandra', 31, 'Surabaya', 'Facebook;Instagram;Twitter'],
          ['Fuad', 24, 'Jakarta', 'Path;LinkedIn;Google+']
        ]
- output:
        [ { Nama: 'Tobias',
            Umur: 21,
            Asal: 'Jakarta',
            MediaSosial: [ 'Twitter', 'Facebook' ]
          },
          { Nama: 'Syldie',
            Umur: 25,
            Asal: 'Malang',
            MediaSosial: [ 'Google+', 'Instagram', 'Twitter' ]
          },
          { Nama: 'Fuad',
            Umur: 24,
            Asal: 'Jakarta',
            MediaSosial: [ 'Path', 'LinkedIn', 'Google+' ]
          }
        ]

Contoh 2:
- input:
        [
          ['Nama', 'Umur', 'Asal', 'MediaSosial'],
          ['Awtian', 19, 'Jakarta', 'Twitter;Facebook;LinkedIn'],
          ['Wika', 18, 'Bandung', 'Instagram;LinkedIn;Facebook;Youtube'],
          ['Rama', 23, 'Malang', ''],
          ['Dimas', 31, 'Surabaya', 'Facebook;Instagram;Twitter'],
        ]
- output:
        [ { Nama: 'Rama',
            Umur: 23,
            Asal: 'Malang',
            MediaSosial: NONE
          }
        ]

Contoh 3:
- input: []
- output: []


RULES:
 - DILARANG MENGGUNAKAN built in function .map, .reduce, .filter


**/

function getMillenials(data) {
  var result = []
  for (var i=1; i<data.length; i++) {
    // console.log(data[i][1]);
    if (data[i][1] >=20 && data[i][1] <= 29) {
      // console.log(data[i][1]);
      var obj = {}
      obj[data[0][0]] = data[i][0]
      obj[data[0][1]] = data[i][1]
      obj[data[0][2]] = data[i][2]
      // obj[data[0][3]] = data[i][3]

      var mediaSosial = data[i][3];
      var resultMediaSocial = mediaSosial.split(';')
      console.log(resultMediaSocial);
      
      if (mediaSosial.length === 0) {
        obj[data[0][3]] = 'NONE'
      }
      else {
        obj[data[0][3]] = resultMediaSocial
      }
      

      result.push(obj);
    }
  }
  return result;
}


//OR


function getMillenials(data) {
  var result = [];
  var mediaSocial = []

  for(var i = 1; i < data.length; i++){
    if(data[i][1] >= 20 && data[i][1] <= 29){
      if(data[i][3].length === 0){
        mediaSocial = 'None'
      }else{
        mediaSocial = data[i][3].split(';')
      }
      var obj = {
        'Nama': data[i][0],
        'Umur': data[i][1],
        'Asal': data[i][2],
        'MediaSosial': mediaSocial
      }
      result.push(obj)
    }
  }
  return result
}


/*
20-29 AJA

*/

// console.log(test([
//   ['Nama', 'Umur', 'Asal', 'MediaSosial'],
//   ['Tobias', 21, 'Jakarta', 'Twitter;Facebook'],
//   ['Kevin', 18, 'Bandung', 'Instagram;LinkedIn;Facebook'],
//   ['Syldie', 25, 'Malang', 'Google+;Instagram;Twitter'],
//   ['Chandra', 31, 'Surabaya', 'Facebook;Instagram;Twitter'],
//   ['Fuad', 24, 'Jakarta', 'Path;LinkedIn;Google+']
// ]))


console.log(getMillenials([
  ['Nama', 'Umur', 'Asal', 'MediaSosial'],
  ['Tobias', 21, 'Jakarta', 'Twitter;Facebook'],
  ['Kevin', 18, 'Bandung', 'Instagram;LinkedIn;Facebook'],
  ['Syldie', 25, 'Malang', 'Google+;Instagram;Twitter'],
  ['Chandra', 31, 'Surabaya', 'Facebook;Instagram;Twitter'],
  ['Fuad', 24, 'Jakarta', '']
]));

console.log(getMillenials([
  ['Nama', 'Umur', 'Asal', 'MediaSosial'],
  ['Awtian', 19, 'Jakarta', 'Twitter;Facebook;LinkedIn'],
  ['Wika', 18, 'Bandung', 'Instagram;LinkedIn;Facebook;Youtube'],
  ['Rama', 23, 'Malang', ''],
  ['Dimas', 31, 'Surabaya', 'Facebook;Instagram;Twitter'],
]));

console.log(getMillenials([]));



function getMillenials(data) {
  var hasil = [];
  if (data.length == 0) {
    return data;
  } else {
    for ( var i = 1; i < data.length; i++ ) {
      var nama = data[i][0];
      var umur = data[i][1];
      var asal = data[i][2];
      var sosmed;
      if (data[i][3].length !== 0) 
      { 
        sosmed = data[i][3].split(';');
      } else {
        sosmed = "NONE";
      }
      
      if (umur >= 20 && umur <= 29) {
        var identitas = {
          [data[0][0]]: nama,
          [data[0][1]]: umur,
          [data[0][2]]: asal,
          [data[0][3]]: sosmed 
        };
        hasil.push(identitas);
      } // end if
      
    } // end for i
    return hasil;
  } // end if else
  
}

function test(dt)
{
 return dt[0][0]
}


// 16 mins