/*
==================================
Array Mastery: Shortest Word
==================================

Nama:________

[INSTRUCTION]
Disediakan sebuah kalimat. Function shortestWords akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan jumlah huruf paling sedikit dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan jumlah kata yang paling sedikit tersebut.

[EXAMPLE]
input (kalimat): Do you want to become a great coder.
panjang kata paling sedikit dalam kalimat: 1
output: ['a']

input (kalimat): You dont know what you have until you lose it!.
panjang kata paling sedikit dalam kalimat: 3
output: ['you', 'it!']

[CONSTRAINTS]
Dilarang menggunakan function .map/.filter/.reduce!
Diarang menggunakan regex!

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!

function shortestWords(words) {
  // console.log(words)
  var obj = {};
  var array = words.toLowerCase().split(' ');
  // console.log(array);
  var temp = 0;
  for (var i=0; i<array.length; i++) {
    for (var j=0; j<array[i].length; j++) {
      // console.log(array[i][j]);
      temp += 1
    }
    if (obj[temp] === undefined) {
      obj[temp] = [array[i]];
    }
    else if (obj[temp] !== undefined) {
      obj[temp].push(array[i])
    }
    temp = 0;
  }
  // console.log(obj);
  var objKeys = Object.values(obj);
  // console.log(objKeys[0]);
  
  // klo ada yg double:
  var objFinal = {};
  for (var i=0; i<objKeys[0].length; i++) {
    if (objFinal[objKeys[0][i]] === undefined) {
      objFinal[objKeys[0][i]] = 1;
    }
    else {
      objFinal[objKeys[0][i]] += 1;
    }
  }

  // console.log(objFinal);
  
  return Object.keys(objFinal);
}

console.log(shortestWords('Do you want to become a great coder ?')); // ['a', '?']
console.log(shortestWords('You dont know what you have until you lose it!')); // ['you', 'it!']
console.log(shortestWords('I am diligent')); // ['I']


// selsei pas 40 mins

// function shortestWords(words) {
//   var obj = {};
//   var array = words.toLowerCase().split(' ');
//   // console.log(array);
//   var temp = 0;
//   for (var i=0; i<array.length; i++) {
//     for (var j=0; j<array[i].length; j++) {
//       // console.log(array[i][j]);
//       temp += 1
//     }
//     if (obj[temp] === undefined) {
//       obj[temp] = [array[i]];
//     }
//     else if (obj[temp] !== undefined) {
//       obj[temp].push(array[i])
//     }
//     temp = 0;
//   }
//   // console.log(obj);
//   var objKeys = Object.values(obj);
//   // console.log(objKeys[0]);
  
//   // klo ada yg double:
//   var objFinal = {};
//   for (var i=0; i<objKeys[0].length; i++) {
//     if (objFinal[objKeys[0][i]] === undefined) {
//       objFinal[objKeys[0][i]] = 1;
//     }
//     else {
//       objFinal[objKeys[0][i]] += 1;
//     }
//   }

//   // console.log(objFinal);
  
//   return Object.keys(objFinal);