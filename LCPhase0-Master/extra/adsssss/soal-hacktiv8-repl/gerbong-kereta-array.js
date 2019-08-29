/*
========================
The Alphabetical Express
========================

Name :_____________

[INSTRUCTIONS]

formTrainSeating adalah sebuah function yang menerima satu parameter berupa string.
Ini adalah sebuah simulasi penempatan penumpang di dalam gerbong kereta.

Gerbong terdiri dari 5, yaitu gerbong A, gerbong B, C, D, dan E.

Function akan membentuk kereta dalam bentuk multidimension array.
Kereta direpresentasikan sebagai sebuah array yang berisi gerbong.
Gerbong adalah sebuah array yang berisi huruf tiap penumpang.

Setiap gerbong hanya boleh menampung penumpang dengan nama yang sesuai dengan nama gerbong.
Setiap penumpang direpresentasikan dengan satu huruf, antara A, B, C, D, atau E.

Bentuk Kereta:

[ GERBONG A, GERBONG B, GERBONG C, GERBONG D, GERBONG E ]

Bentuk Gerbong:

Contoh bentuk gerbong A
[ 'A', 'A' ]

Contoh bentuk gerbong B
[ 'B', 'B' ]

Kumpulan penumpang direpresentasikan dalam string.

Contoh:

input: 'ABCA'

maka, ada penumpang A, B, C, dan A.

Kita masukkan setiap penumpang ke masing-masing gerbong.

output: [ ['A', 'A'], ['B'], ['C'], [], []]

gerbong A berisi dua A,
gerbong B berisi satu B,
gerbong C berisi satu C,
gerbong D kosong,
dan gerbong E kosong.

Function akan me-return array kereta yang telah dibentuk.


[CONSTRAINTS]
Dilarang menggunakan sintaks .split()!
*/

function formTrainSeating(str){

  var result = [[], [], [], [], []];

  for (var i = 0; i < str.length; i++) {
    // console.log(str[i])
    if(str[i] === "A"){
      result[0].push(str[i])
    } else if(str[i] === "B"){
      result[1].push(str[i])
    } else if (str[i] === "C"){
      result[2].push(str[i])
    } else if (str[i] === "D"){
      result[3].push(str[i])
    } else if (str[i] === "E"){
      result[4].push(str[i])
    }
  }
  return result
}
console.log(formTrainSeating('ABDCCCEHLNG')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]

//OKAY SO BRUH DONT PANICK I THINK ITS PRETTY EASY BUT A BIT BRAIN TWISTING SO WHAT YOU HAVE TO IS TO SORT THE FREAKIN STRING FIRST THEN COUNT EACH OF THE ALPHABET
//honestly I know it's sounds so tiring but it's for the greeater of your future, good luck sis

// 3 minutes 13 sec