/* 

Buatlah sebuah function `flatten` yang akan menerima parameter object literal yang bentuknya nested.

Fungsi ini akan merubah object tersebut menjadi menjadi bentuk yang flat. Artinya tidak ada lagi nested object pada output.

Caranya adalah jika ditemukan nested object, maka akan dibuat properti baru pada object utama dengan key gabungan dari object utama dan object dibawahnya.
Penggabungannya adalah dengan menggunakan format <keyParent>.<keyChild> (digabungkan dengan tanda titik).

Perhatikan test cases yang diberikan dengan baik untuk memahami bentuk output yang diinginkan!!!


RULES:
  - Dilarang menggunakan built-in function apapun selain Object.keys, Object.values.
  - Diperbolehkan menggunakan operator typeof.


*/



function flatten(object) {
  var output = {}
  var objectKeys = Object.keys(object);
  var objectValues = Object.values(object)

  for(var i = 0; i < objectKeys.length; i++){
    if(typeof objectValues[i] == typeof 'a'){
      output[objectKeys[i]] = object[objectKeys[i]]
    }
    else{
      var objectKeysNested = Object.keys(object[objectKeys[i]]);
      var objectValuesNested = Object.values(object[objectKeys[i]])
      for(var j = 0; j < objectKeysNested.length; j++){
        output[`${objectKeys[i]}.${objectKeysNested[j]}`] = objectValuesNested[j]
      }
    }
  }
  return (output);
}


console.log(flatten({
  name: 'Bagus',
  batch: {
    number: 35,
    name: 'Infinite Fox'
  }
}))

/* 
{
  name: 'Bagus',
  'batch.number': 35,
  'batch.name': 'Infinite Fox'
}
*/


console.log(flatten({
  father: {
    name: 'Suwarno',
    age: 50
  },
  mother: {
    name: 'Suwarni',
    age: 48
  },
}))

/* 
{
  'father.name': 'Suwarno',
  'father.age': 50,
  'mother.name': 'Suwarni',
  'mother.age': 48
}
*/