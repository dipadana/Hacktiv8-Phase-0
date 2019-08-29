/**
CSV to Object
==============
Implementasikan function `csvToObject` untuk merubah string yang
diberikan menjadi sebuah object baru.
`csvToObject` menerima 2 parameter yaitu `keys` dan `values`
yang merupakan sebuah CSV (Comma Separated Values)
Keys & values di dalam object baru nantinya akan diambil dari kedua
parameter yang diberikan.
Contoh:
- Input: 'name,age', 'Aang,112'
  Output: { name: 'Aang', age: '112' }
- Input: 'title,description,content', 'Foobar,Foo and Bar,Foobar content'
  Output: { title: 'Foobar', description: 'Foo and Bar', content: 'Foobar Content' }
- Input: '', ''
  Output: { }
*/

// function csvToObject (keys, values) {
//   var keysArr = keys.split(',');
//   var valuesArr = values.split(',');
//   var obj = {};
//   if (keys.length === 0 && values.length === 0) {
//     return obj;
//   }
//   else {
//     for (var i=0; i<keysArr.length; i++) {
//       obj[keysArr[i]] = valuesArr[i];
//     }
//     return obj;
//   }

// }

// console.log(csvToObject('name,phoneNumber', 'Dimitri,+666123654'));
// // { name: 'Dimitri', phoneNumber: '+666123654' }

// console.log(csvToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
// // { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

// console.log(csvToObject('', ''));
// // { }

function csvToObject (keys, values) {
  var output = {};

  if(keys.length === 0 || values.length === 0){
    return output
  }

  var proName = keys.split(',')
  var proVal = values.split(',')
  
  for(var i = 0; i < proName.length; i++){
    output[proName[i]] = proVal[i]
  }
  return output
}

console.log(csvToObject('name,phoneNumber', 'Dimitri,+666123654'));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(csvToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

console.log(csvToObject('', ''));
// { }

// 6 minutes 23 sec