// 1. memfilter nilai object berdasarkan kondisi tertentu

var latihan = [
  { name: 'ginta', position: 'BF', ability: 'zfat', score: 20 },
  { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
  { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
]

// Release 1 => coba ambil nama-nama yang nilainya diatas 30
/* 
  [ 
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]
*/
// Release 2 => coba ambil nama-nama yang nilainya diantara 70 dan 90
/* 
  [ 
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 }
  ]
*/  

// 2. mensorting array of object berdasarkan value dari objectnya

function sortAsc(arr, key, sort = 'asc'){
  var array = Object.keys(arr[0]);  
  var key = array[key];

  var max = 0;
    for(var i = 0; i < arr.length-1; i++){
        for(var j = i+1; j < arr.length; j++){
          if(sort == 'dsc'){
            if(arr[i][key] < arr[j][key]){
              max = arr[i];
              arr[i] = arr[j];
              arr[j] = max;
            }
          }
          else{
            if(arr[i][key] > arr[j][key]){
              max = arr[i];
              arr[i] = arr[j];
              arr[j] = max;
            }
          }
            

        }
    }
    return arr;
}

// var arr = Object.keys(latihan[0]);
// console.log(arr[2]);

console.log(sortAsc(latihan, 3, 'dsc'));

// Release 1 => sorting isi ascending berdasarkan score
/* 
  [ 
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 },
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100}
  ]
*/

// Descending function
function sortDsc(arr){
  var max = 0;
  for(var i = 0; i < arr.length-1; i++){
      for(var j = i+1; j < arr.length; j++){
        
        // inti utama dari proses sort, melakukan penukaran variable
        // untuk mendapatkan urutan nilai yang diinginkan
          if(arr[i].score < arr[j].score){
              max = arr[i];
              arr[i] = arr[j];
              arr[j] = max;
          }

      }
  }
  return arr;
}

console.log(sortDsc(latihan));
// Release 2 => sorting isi descending
/* 
  [ 
    { name: 'hiruma', position: 'DB', ability: 'manipulation', score: 100},
    { name: 'eyeshield', position: 'RB', ability: 'topSpeed', score: 80 },
    { name: 'ginta', position: 'BF', ability: 'fat', score: 20 }
  ]
*/






