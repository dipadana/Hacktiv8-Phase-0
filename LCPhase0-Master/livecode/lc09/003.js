/**
Above Average Students
----------------------
Implementasikan function aboveAverageStudents untuk mendapatkan list murid yang nilainya di atas
rata-rata. Rumus untuk mencari rata-rata: ( Hasil pertambahan semua nilai / Jumlah murid )
Contoh:
- input: [
    { name: 'Foobar', score: 75 },
    { name: 'Foobaz', score: 60 },
    { name: 'Foo', score: 75 }
  ]
- output: [
    { name: 'Foobar', score: 75 },
    { name: 'Foo', score: 75 }
  ]

RULE:
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
*/

function aboveAverageStudents (students) {
  var nilaiRerata = 0;

  for(var i = 0; i < students.length; i++){
    nilaiRerata += students[i]['score']
  }
  nilaiRerata = nilaiRerata/students.length

  var collect = [];
  for(var i = 0; i < students.length; i++){
    if(students[i]['score'] > nilaiRerata){
      var obj = {
        name: students[i]['name'],
        score: students[i]['score']
      }
      collect.push(obj)
    }
  }
  return collect
}

//OR

function aboveAverageStudents (students) {
  var nilaiRerata = 0;

  for(var i = 0; i < students.length; i++){
    nilaiRerata += students[i]['score']
  }
  nilaiRerata = nilaiRerata/students.length

  var collect = [];
  for(var i = 0; i < students.length; i++){
    if(students[i].score > nilaiRerata){
      collect.push(students[i])
    }
  }
  return collect
}


console.log(aboveAverageStudents([
  { name: 'Dimitri', score: 90 },
  { name: 'Sergei', score: 70 },
  { name: 'Alisa', score: 50 },
  { name: 'Viktor', score: 65 },
  { name: 'Vladimir', score: 40 },
  { name: 'Alexei', score: 70 }
]));

// [ { name: 'Dimitri', score: 90 },
//   { name: 'Sergei', score: 70 },
//   { name: 'Viktor', score: 65 },
//   { name: 'Alexei', score: 70 } ]

console.log(aboveAverageStudents([
  { name: 'Foo', score: 100 },
  { name: 'Bar', score: 100 },
  { name: 'Baz', score: 90 }
]));

// [ { name: 'Foo', score: 100 }, { name: 'Bar', score: 100 } ]

console.log(aboveAverageStudents([]));

// [ ]
