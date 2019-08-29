/*
=================
Score data mining
=================

[INSTRUCTIONS]
Anda adalah seorang Data Scientist yang ditugaskan untuk mengolah data mentah
score ujian murid-murid ke dalam object informasi nilai yang mudah dibaca
berbentuk group-group yang berisi nilai 0-40, 41-80, 81-100, nilai rata-rata dan
murid dengan nilai tertinggi. buatlah <array of object> ke variable <scoreData>
dari table data berikut sebelum diolah.
┌────┬─────────────┬─────────────┬───────┬──────────┬─────┐
│ id │ first_name   │  last_name  │ score │  gender  │ age │
├────┼─────────────┼─────────────┼───────┼──────────┼─────┤
│ 1  │ 'Carrissa'  │  'Murley'   │  53   │ 'Female' │ 18  │
│ 2  │ 'Winifield'  │ 'Frisdick'  │  86   │  'Male'  │ 19  │
│ 3  │  'Romonda'  │  'Verling'  │  95   │ 'Female' │ 20  │
│ 4  │  'Yehudit'  │ 'Isakovic'  │  32   │  'Male'  │ 19  │
│ 5  │  'August'   │ "O' Mahony" │  73   │ 'Female' │ 21  │
│ 6  │   'Scott'   │   'Rubra'   │  51   │  'Male'  │ 18  │
└────┴─────────────┴─────────────┴───────┴──────────┴─────┘

[EXAMPLE]
Hasil yang diharapkan adalah object dengan format sebagai berikut:
{
  '0-40': [
       { id: 4, first_name: 'Yehudit', last_name: 'Isakovic', score: 32 },
       ...
  ],
  '41-80': [
      { ... },
      ...
  ],
  '81-100': [
       { ... },
       ...
  ],
  avg: 65,
  highestScore: {
      id: 3,
      first_name: 'Romonda',
      last_name: 'Verling',
      score: 95
  }
}
note: buang data murid yang tidak relevan di object hasil dari function,
contohnya: gender dan age.

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string &
  array untuk pemecahan masalah.
- Dilarang hardcode, kecuali nama key.
- Dilarang menggunakan regex .match dan lainnya!
*/

function graduationDetail(array) {
  // code anda disini
var obj = {
  "0-40": [],
  "41-80": [],
  "81-100": [],
  avg: 0,
  highestScore: {}
}
var sum = 0;
var highest = 0;

for(var i = 0; i<array.length; i++) {
  sum += array[i].score
}

for (var i= 0; i<array.length; i++) {
  // keys
  if(array[i].score >= 0 && array[i].score <= 40) {
    obj["0-40"].push({
      id: array[i].id,
      first_name: array[i]["first_name"],
      last_name: array[i]["last_name"],
      score: array[i].score
    })}
  if(array[i].score >= 41 && array[i].score <= 80) {
    obj["41-80"].push({
      first_name: array[i]["first_name"],
      last_name: array[i]["last_name"],
      score: array[i].score
    })}
   if(array[i].score >= 81 && array[i].score <= 100) {
    obj["81-100"].push({
      first_name: array[i]["first_name"],
      last_name: array[i]["last_name"],
      score: array[i].score
    })}
    //highest score
    if(array[i].score > highest){
    highest = array[i].score;
    obj.highestScore =  {
      id: array[i].id,
      first_name: array[i]["first_name"],
      last_name: array[i]["last_name"],
      score: array[i].score
    }
  }
}
obj.avg = sum / array.length; //avg
return obj;
}

// silahkan isi data di sini
var scoreData = [
{id: 1,
"first_name": 'Carrissa',
"last_name": 'Murley',
score: 53,
gender: "Female",
age: 18
},
{id: 2,
"first_name": 'Winifield',
"last_name": 'Frisdick',
score: 86,
gender: "Male",
age: 19
},
{id: 3,
"first_name": 'Romonda',
"last_name": 'Verlina',
score: 95,
gender: "Female",
age: 20
},
{id: 4,
"first_name": 'Yehudit',
"last_name": 'Isakovic',
score: 32,
gender: "Male",
age: 19
},
{id: 5,
"first_name": 'August',
"last_name": "O'Mahony",
score: 73,
gender: "Female",
age: 21
},
{id: 6,
"first_name": 'Scott',
"last_name": 'Rubra',
score: 51,
gender: "Male",
age: 18
}

]
console.log(graduationDetail(scoreData));

/*
{
'0-40': [
  { id: 4, first_name: 'Yehudit', last_name: 'Isakovic', score: 32 }
],
'41-80': [
  { id: 1, first_name: 'Carrissa', last_name: 'Murley', score: 53 },
  { id: 5, first_name: 'August', last_name: "O' Mahony", score: 73 },
  { id: 6, first_name: 'Scott', last_name: 'Rubra', score: 51 }
],
'81-100':[
  { id: 2, first_name: 'Winifield', last_name: 'Frisdick', score: 86 },
  { id: 3, first_name: 'Romonda', last_name: 'Verling', score: 95 }
],
avg: 65,
highestScore: { id: 3, first_name: 'Romonda', last_name: 'Verling', score: 95 }
}
*/