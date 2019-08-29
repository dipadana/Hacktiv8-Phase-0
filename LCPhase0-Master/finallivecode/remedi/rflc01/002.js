/*
================
Advanced Seating
================

[INSTRUCTION]
trainSeating adalah sebuah function yang menerima parameter berupa array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key berdasarkan jenis gerbong penumpang.
Yang berisi daftar nama penumpang dan tempat duduk penumpang.

*/

function trainSeating (penumpang) {}



console.log(trainSeating([
  { nama: "Sasuke", gerbong: "VVIP", seat: 'A1' },
  { nama: "Naruto", gerbong: "VIP", seat: 'V1' },
  { nama: "Sakura", gerbong: "VVIP", seat: 'A2' },
  { nama: "Ino", gerbong: "Regular", seat: 'R1' },
  { nama: "Kakashi", gerbong: "Regular", seat: 'R3' },
  { nama: "Tsunade", gerbong: "VIP", seat: 'V2' },
  { nama: "Jiraya", gerbong: "VVIP", seat: 'A666' },
  { nama: "Itachi", gerbong: "VIP", seat: 'V6' }
]));
/*
Output :
{ VVIP:
   [ { nama: 'Sasuke', seat: 'A1' },
     { nama: 'Sakura', seat: 'A2' },
     { nama: 'Jiraya', seat: 'A666' } ],
  VIP:
   [ { nama: 'Naruto', seat: 'V1' },
     { nama: 'Tsunade', seat: 'V2' },
     { nama: 'Itachi', seat: 'V6' } ],
  Regular:
   [ { nama: 'Ino', seat: 'R1' }, { nama: 'Kakashi', seat: 'R3' } ] }
*/
