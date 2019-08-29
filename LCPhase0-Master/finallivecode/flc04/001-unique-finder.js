/*
=============
UNIQUE FINDER
=============

Name :_____________

[INSTRUCTIONS]

uniqueFinder adalah sebuah function yang menerima satu parameter berupa kalimat.
Function akan mereturn array yang berisi setiap kata yang ditemukan dalam kalimat.
Tidak boleh ada kata yang berulang, dan besar kecil dari kata tidak dianggap.
Sehingga, Hello dan HELLO di anggap kata yang sama.

Function harus mereturn string "NO WORD" jika di kalimat tersebut tidak ditemukan kata apapun.

[CONSTRAINTS]
Tidak ada batasan untuk soal ini.


[EXAMPLE]
uniqueFinder('saya dan SAYA suka makan nasi')
kata unik: saya, dan, suka, makan, nasi
output: ['saya', 'dan', 'suka', 'makan', 'nasi']

*/

/* EXPLAIN YOUR LOGIC BELOW! (Required) */
// Tidak harus formal pseudocode, tapi bagaimana step by step logikanya
// Nilai tidak valid (0) jika logic dan code berbeda!
/*

PSEUDOCODE:

STORE "result" with the value of empty Array
STORE "str" with the value of 

*/

function uniqueFinder(sentence) { 

}



console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'black', 'dragon', 'and', 'red']
console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello', 'hlloe']
console.log(uniqueFinder('john is coding and he is coding')); // ['john', 'is', 'coding', 'and', 'he']
console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
console.log(uniqueFinder('')); // 'NO WORDS'




















// function uniqueFinder(sentence) {

//   var result = [];

//   var lowerCase = sentence.toLowerCase()
//   var str = lowerCase.split(" ")
//   // var isEmpty = true;

//   for(var i = 0; i < str.length; i++){
//     // console.log(str[i])
//     var isEmpty = true
//     for(var j = 0; j < result.length; j++){
//       // console.log(result[j])
//       if(str[i] === result[j]){
//         isEmpty = false
//       }
//     }
//     if(isEmpty === true){
//       result.push(str[i])
//     }
//   }
//   return result
// }




// function uniqueFinder(sentence) {
//   var strNoUpperLower = sentence.toLowerCase();
//   // console.log(strNoUpperLower);
//   var array = strNoUpperLower.split(' ')
//   // console.log(array);
  
//   var obj = {};

//   for (var i=0; i<array.length; i++) {
//     // console.log(array[i]);
//     if (obj[array[i]] === undefined) {
//       obj[array[i]] = 1;
//     }
//     else {
//       obj[array[i]] += 1
//     }
//   }
//   // console.log(obj);
//   var result = Object.keys(obj);
//   return result;

// }

/* LOGIKA: 
STORE "obj" with the value of empty Object

  FOR LOOP index 0 to length of array
    IF obj[array[i]] EQUALS to undefined (in this step we will initialize the object)
      obj[array[i]] = 1 (jika tidak bertemu dengan kalimat yang berulang maka akan di hitung 1)
    ELSE 
      obj[array[i]] ADD by 1 (jika bertemu dengan kalimat yang berulang maka akan bertambah 1)
    END IF 
  EXIT LOOP

STORE "result" = in this variable we will change the object to "keys", karena untuk mengabil value yang tidak berulang

DISPLAT "result"
*/

// cara kak rama
// function uniqueFinder(sentence) {

//   var result = [];

//   var lowerCase = sentence.toLowerCase()
//   var str = lowerCase.split(" ")

//   for(var i = 0; i < str.length; i++){
//     // console.log(str[i])
//     var isEmpty = true
//     for(var j = 0; j < result.length; j++){
//       console.log(result[j])
//       if(str[i] === result[j]){
//         isEmpty = false
//       }
//     }
//     // if(isEmpty === true){
//     //   result.push(str[i])
//     // }
//   }
//   // return result
// }

// console.log(uniqueFinder('hello black dragon and hello red dragon')); // ['hello', 'black', 'dragon', 'and', 'red']
// console.log(uniqueFinder('hello HELLo hEllO hlloe')); // ['hello', 'hlloe']
// console.log(uniqueFinder('john is coding and he is coding')); // ['john', 'is', 'coding', 'and', 'he']
// console.log(uniqueFinder('blue blue red blue violet red violet')); // ['blue', 'red', 'violet']
// console.log(uniqueFinder('')); // 'NO WORDS'

