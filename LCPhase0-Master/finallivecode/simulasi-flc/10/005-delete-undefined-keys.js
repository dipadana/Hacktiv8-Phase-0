/**
Delete Undefined Keys
=====================
Implementasikan function `deleteUndefinedKeys` untuk menghapus
key di dalam object yang memiliki value undefined.
Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data array.
Di dalam array `data` terdapat beberapa object yang memiliki
value undefined. Tugas kamu adalah untuk menghapus key tersebut
# Contoh I/O
Contoh input dan output bisa kamu lihat di test case
# Kondisi khusus
- Jika tidak ada elemen di dalam `data`, maka tampilkan 'No data'
# Constraints
- DILARANG menggunakan built-in function .map, .filter
*/

function deleteUndefinedKeys (data) {}


console.log(deleteUndefinedKeys([
  {
    name: 'Dimitri',
    address: undefined,
    email: 'dimitri@mail.com',
    age: undefined,
    gender: 'male'
  },
  {
    name: 'Alexei',
    address: 'Earth',
    email: undefined,
    age: 18,
    gender: 'male'
  }
]));
/*
  [ { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' },
    { name: 'Alexei', address: 'Earth', age: 18, gender: 'male' } ]
*/

console.log(deleteUndefinedKeys([
  {
    band: 'Ghost',
    formed: 2006,
    members: ['Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth'],
    genre: 'Heavy Metal',
    rating: undefined
  },
  {
    band: 'BABYMETAL',
    formed: undefined,
    members: ['SU-METAL', 'MOAMETAL', 'YUIMETAL'],
    genre: 'Kawaii Metal',
    rating: undefined
  },
  {
    band: 'Avatar',
    formed: 2006,
    members: undefined,
    genre: undefined,
    rating: 5
  }
]));
/*
[ { band: 'Ghost',
    formed: 2006,
    members: [ 'Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth' ],
    genre: 'Heavy Metal' },
  { band: 'BABYMETAL',
    members: [ 'SU-METAL', 'MOAMETAL', 'YUIMETAL' ],
    genre: 'Kawaii Metal' },
  { band: 'Avatar', formed: 2006, rating: 5 } ]
*/

// console.log(deleteUndefinedKeys([]));
// No data





















// function deleteUndefinedKeys (data) {

//   for(var i = 0; i < data.length; i++){
//     // console.log(data[i])
//     var keys = Object.keys(data[i]);
//     // console.log(keys)
//     var value = Object.values(data[i]);
//     // console.log(value)
//     for(var j = 0; j < value.length; j++){
//       // console.log(value[j])
//       if(value[j] === undefined){
//         delete data[i][keys[j]]
//       }
//     }
//   }
//   return data
// }