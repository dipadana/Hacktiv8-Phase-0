/**
  Vowels Counter Recursive

  Diberikan sebuah function consonantCounterRecursive(sentences) yang menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.

- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX

*/

function consonantCounterRecursive(sentences) {}


console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //13
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3

// 














// function consonantCounterRecursive(sentences) {

//   if(sentences.length === 0){
//     return 0
//   } else {
//     // var consonant = "bcdfghjklmnpqrstuvwxyz";
//     var vowels = "aiueo";
//     var check = sentences[0].toLowerCase();
//     var count = 0;

//     if(vowels.indexOf(check) !== -1){
//       count++
//     }
//     return count + consonantCounterRecursive(sentences.slice(1))

//   }
  
// }




// if (sentences.length === 0) {
  //   return 0;
  // }
  // else {
  //   var lowCase = sentences.toLowerCase();
  //   // console.log(lowCase);
  //   var firstWord = lowCase[0]; 
  //   // console.log(firstWord);
    
  //   var modifSentences = lowCase.substring(1);
  //   // console.log(modifSentences);
    
  //   var consonant = 'bcdfghjklmnpqrstvwxyz'; 
  //   for (var i=0; i<consonant.length; i++) {  // KENAPAA GA BISA di LOOP???
  //     // console.log(consonant[i], i);
      
  //     if (firstWord !== consonant[i]) {
  //       // console.log(consonant[i]);
        
  //       return 1 + consonantCounterRecursive(modifSentences);
  //     }
  //     else {
  //       return 0 + consonantCounterRecursive(modifSentences); // kenapa return 0 ga bisa??
  //     }
  //   }  
  
  
  
  
  