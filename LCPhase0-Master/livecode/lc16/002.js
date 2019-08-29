/*
=====================
Word Spread Reduction
=====================

[INSTRUCTION]
buatlah program yang dapat melakukan penyebaran (spread) dimulai dari 1 char dalam suatu kata, lalu dapat menyusut lagi
menjadi 1 char, hingga membentuk seperti segitiga.

[EXAMPLE]
var name = "Dimas"

output: 
D
Di
Dim
Dima
Dimas
Dima
Dim
Di
D
*/

var name = "Dimas"
// your code here
var append =''
for(var i = 0; i < name.length-1; i++) {
  append+= name[i]
  console.log(append);
} 

for (var i = 0; i<name.length; i++) {
  var append = '';
  for(var j=0; j<(name.length - i); j++) {
    append+= name[j];
  } console.log(append);
}

