// Competencies: Pseudocode / Algoritma problem solving
/*
==============
Merry Christmas!
==============
Instruksi
=========
Sinterklas akan membagikan banyak hadiah natal tahun ini dengan menempatkan hadiah natal secara acak.
Tugas seorang anak adalah mencari hadiah-hadiah natal yang disembunyikan oleh sinterklas.
Oops, tetapi hal ini diketahui oleh Pit Hitam dan Nenek Penyihir mereka tidak senang dengan hal tersebut
sehingga mereka akan menakut-nakuti anak yang kebetulan lewat di depan mereka.

Tiap anak yang ditakut-takuti oleh Pit Hitam dan Nenek Penyihir sebanyak 3 kali akan berlari pulang karena takut.

Buatlah sebuah function merryChristmas yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - 'Pit Hitam' adalah tempat di mana Pit Hitam berada dan akan menakuti anak-anak
 - 'Nenek Penyihir' adalah tempat di mana Nenek Penyihir berada dan akan menakuti anak-anak
 - 'Hadiah' adalah hadiah natal yang sinterklas berikan
 - '*' adalah jalanan biasa
Dimana function ini akan mengembalikan berapa banyak hadiah natal yang berhasil didapatkan
Contoh
-------
1. inputan: ['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']
   output: Yeaaayyy, you got all presents: 2
2. inputan: ['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir' ,'Hadiah', '*', 'Hadiah',  'Pit Hitam', 'Hadiah']
   output: Be brave, next time! But it's okay, you got 2 present(s)

RULES
-----
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

*/

// STORE and SAVE 'count' with 0
// STORE and SAVE 'gift' with 0
//   LOOPING the Array
//     IF array in certain index equals to 'Nenek Penyihir' or 'Pit Hitam'
//       ADD 'count' by 1
//     ELSE IF array in certain index equals to 'Hadiah'
//       ADD 'gift' by 1

//   IF count is more than equals to 3
//     SHOW and DISPLAY "Be brave, next time! But it's okay, you got (total gift) present(s)'
//   ELSE IF count is less than 3
//     SHOW and DISPLAY 'Yeaaayy, you got all present: (total gift)'


// function merryChristmas(path) {
//   //your code here
//   var life = 3
//   var present = 0
//   for (let i = 0; i < path.length; i++) {
//     if( path[i] ==='Pit Hitam' || path[i] ==='Nenek Penyihir' ){
//       life --
//     }else if ( path[i]=== 'Hadiah' ){
//       present ++
//     }
//   }
//   if (life >=1 && present > 0 ) {
//     return 'Yeaaayyy, you got all presents: ' + present
//   } else if ( life === 0 && present > 0 ) {
//     return 'Be brave, next time! But it\'s okay, you got ' + present + ' present(s)'
//   } else  if( life === 0 &&  present === 0 ) {
//     return 'Wish you merry Christmas, last year you so naughty so you dont got present'
//   }
// }


//OR

function merryChristmas(path) {
  //your code here
  var count = 0;
  var gift = 0;

  for(var i = 0; i < path.length; i++){
    if(path[i] === 'Pit Hitam' || path[i] === 'Nenek Penyihir'){
      count++
    }else if(path[i] === 'Hadiah' && count < 3){
      gift++
    }
  }
  
  if(count < 3){
    return 'Yeaaayy, you got all present:' + gift
  }else{
    return "Be brave, next time! But it's okay, you got " + gift + ' present(s)'
  }
}

console.log(merryChristmas(['*', '*', 'Pit Hitam', '*', 'Hadiah', '*',  'Pit Hitam', 'Hadiah']));
console.log(merryChristmas(['*', '*', 'Pit Hitam', '*', 'Nenek Penyihir' ,'Hadiah', '*', 'Hadiah',  'Pit Hitam', 'Hadiah']));
