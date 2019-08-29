/**

  Diberikan sebuah function countMe yang menerima sebuah parameter array of string.
  Function ini akan me-return object literal dimana isi dari object tersebut berisi
  jumlah karakter pada array of string

  Contoh:
  input: [ 'dimitri', 'awtian', 'icha' ]
  output:
    {
      d: 1,
      i: 5,
      m: 1,
      t: 2,
      r: 1,
      a: 3,
      w: 1,
      n: 1,
      c: 1,
      h: 1
    }
**/

// function countMe(names) {
//   var joinNames = names.join('');
//   // console.log(joinNames);
  
  
//   // BUAT obj keys 0
//   var obj = {};
//   for (var i=0; i<joinNames.length; i++) {
//     // console.log(joinNames[i]);
//     obj[joinNames[i]] = 0
//   }

//   // MAKE array list keys obj
//   // console.log(obj);
//   var keysObj = Object.keys(obj); // ->> otomatis ga double nama
  
//   // PUSH to ARRAY // klo nested looping dibalik bisa ga?
//     for (var j=0; j<joinNames.length; j++) {
//       // console.log(joinNames[j]);
      
//       for (var k=0; k<keysObj.length; k++) {
//         // console.log('    ', keysObj[k], obj[keysObj[k]]);
        
//         if (joinNames[j] === keysObj[k]) {
//           obj[keysObj[k]] += 1;
//         }
//       }
      
//     }
//     // return obj
// }

//OR

function countMe(names) {
  var result = {};
  var combine = names.join('')                //Menggabungkan semua karakter menjadi 1 untuk diLooping

  for(var i = 0; i < combine.length; i++){
    if(result[combine[i]] === undefined){     //Buat key baru dari tiap karacter (otomatis i jenis karakter 1)
      result[combine[i]] = 1                  //tidak double
    }else{
      result[combine[i]]++                    //Jika key sudah dibuat, menambahkan valuenya pd karakter tsb
    }
  }
  return result
}


console.log(countMe([ 'dimitri', 'awtian', 'icha' ]));
//{
//   d: 1,
//   i: 5,
//   m: 1,
//   t: 2,
//   r: 1,
//   a: 3,
//   w: 1,
//   n: 1,
//   c: 1,
//   h: 1
// }

console.log(countMe([ 'dimas', 'ryan', 'akbar', 'tama']));
// {
//   d: 1,
//   i: 1.
//   m: 2,
//   a: 6,
//   s: 1,
//   r: 2,
//   y: 1,
//   n: 1,
//   k: 1,
//   b: 1,
//   t: 1
// }


// // WOWWWW KE MERGE SENDIRIIII!!!!
// // 1. ubah ke object!
// var coba = ['r','a','t','r'];
// var obj2 = {};
// for (var i=0; i<coba.length; i++) {
//   // console.log(coba[i]);
//   obj2[coba[i]] = 0;
// }
// console.log(obj2);

// // 2. UBAH BALIK KE ARRAY:
// var result = [];
// var obj2Keys = Object.keys(obj2);
// console.log(obj2Keys);
