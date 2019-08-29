/*
=========
Dash Word
=========

[INSTRUCTION]
Buatlah sebuah function yang menerima sebuah parameter berupa string dan number.
function akan memberikan dash (-) jumlah karakter yang ada di number.
functin tidak akan menambahkan dash (-) jika tidak ada karakter yang tersisa.

[EXAMPLE]
input: string: 'classicFox', number: 3
proses: setiap 3 karakter, akan ditambahkan dash
output: cla-ssi-cFo-x

[RULE]
- DILARANG menggunakan built in function .indexOf atau .include
- DILARANG menggunakan REGEX
*/

// function dashWord(string, number) {
//   // your code is here
//   var append = "";
//   var counter = 0;
//   if(string.length < number) return string
//   if(string.length > number) {
//     for (var i =0, len = string.length; i < len; i++) {
//    	  // res.push(string.substr(i, number));
//   	  // if(i < len-number) { res.push('-') }
//       append += string[i];
//       counter += 1;
//       if( counter % number === 0 && counter !== string.length) {
//       append += '-';
//       }       
//     } 
//   }return append;
// }

function dashWord(string, number) {
  var result = '';
  var counter = 0;
  for(var i = 0; i < string.length; i++){
    result += string[i];
    counter++;
    // if(i < string.length-1){
      if(counter%number === 0 && counter !== string.length){
        result += '-';
        // counter = 0;
      }
    // }
  }
  return result
}

console.log(dashWord('Indonesia', 8)) // Indonesi-a
console.log(dashWord('Uzumaki Naruto', 2)) // Uz-um-ak-i -Na-ru-to
console.log(dashWord('081234567890', 4)) // 0812-3456-7890
console.log(dashWord('classicFox', 3)) // cla-ssi-cFo-x
console.log(dashWord('Coding for everyone', 1)) // C-o-d-i-n-g- -f-o-r- -e-v-e-r-y-o-n-e