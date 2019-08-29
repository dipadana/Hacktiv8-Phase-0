/*
Title Givers
==============
Name :_____________

[INSTRUCTIONS]
Title givers akan menerima dua parameter dimana parameter pertama merupakan array yang berisi nama.
Dan pada bagian kedua, adalah title yang akan di berikan kepada pemilik nama di array yang di berikan.
Jika title yang di berikan di mulai dengan koma `,` maka title akan di tuliskan.
Jika tidak, maka title akan di tuliskan di depan dan dipisahkan dengan spasi ` `.
Contoh ada pada test case.

[RULE]
- Wajib menyertakan pseudocode atau algorithma!
- Dilarang menggunakan sintaks .map()! 
*/

// function titleGivers (targetArr, title) {
//     var result = [];
//     for (var i=0; i<targetArr.length; i++) {
//       // console.log(targetArr[i]);
//       if (title[0] === ',') {
//         result.push(targetArr[i] + title);
//       }
//       else {
//         result.push(title + ' ' + targetArr[i])
//       }
//     }
//     return result;
// }



function titleGivers (targetArr, title) {
  var result = [];

  for(var i = 0; i < targetArr.length; i++){
    if(title[0] !== ','){
      result.push(title + ' ' + targetArr[i])
    }else{
      result.push(targetArr[i] + title)
    }
  }
  return result
}



console.log(titleGivers (['Awtian Akbar', 'Kobayakawa Sena', 'Yoichi Hiruma'], 'Mr.')); 
// Output
// [ 'Mr. Awtian Akbar',
//   'Mr. Kobayakawa Sena',
//   'Mr. Yoichi Hiruma' ]
console.log(titleGivers (['Dre', 'Brock', 'Leorio'], 'Dr.'));
// Output
// [ 'Dr. Dre', 'Dr. Brock', 'Dr. Leorio' ]
console.log(titleGivers (['Boush', 'Squee', 'Spleen' , 'Spoon'], ', ST'));
// Output
// [ 'Boush, ST', 'Squee, ST', 'Spleen, ST', 'Spoon, ST' ]



//time: 7.5 mins