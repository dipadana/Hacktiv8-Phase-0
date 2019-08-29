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

function csvToObject (keys, values) {

	var prop = keys.split(",");
	var val = values.split(",");

	var obj = {};

	if(!keys.length && !values.length){
		return obj;
	} else {
		 obj[prop[0]] = val[0]
		 obj[prop[1]] = val[1]

		 if(val.length > 2 && prop.length > 2){
		 	obj[prop[2]] = val[2];
		 	// obj[prop[3]] = val[3];
		 }
	}
	return obj;
	// console.log(prop.length)
}

console.log(csvToObject('name,phoneNumber,', 'Dimitri,+666123654,'));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(csvToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

console.log(csvToObject('', ''));
// { }