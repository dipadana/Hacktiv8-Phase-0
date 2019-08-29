/*
==================================
Array Mastery: Love Me Not
==================================

Nama:________

[INSTRUKSI]
Seorang perempuan sedang menggalaui apakah seseorang menyukai dia atau tidak. Ketimbang mencabut kelopak bunga untuk menghitung jika dia suka atau tidak, perempuan tersebut membuat sebuah program.

Function loveMeNot akan menerima satu parameter berupa array yang berisikan boolean.
Apabila jumlah true dalam array lebih besar dari jumlah false, maka function akan mereturn "HE LOVES ME!". Jika tidak, maka return "HE DOES NOT LOVE ME :(".
Jika jumlah true dan false sama, maka function akan me-return "GALAU".
Mudah bukan? :)
*/

function loveMeNot(decisions) {
  
  var countTrue = 0;
  var countFalse = 0;

  for (var i = 0; i < decisions.length; i++) {
    if(decisions[i] === true){
      countTrue += 1
    } else if (decisions[i] === false){
      countFalse += 1
    }
  }

  if(countTrue > countFalse){
    return "HE LOVES ME!"
  } else if (countTrue < countFalse){
    return "HE DOES NOT LOVE ME :("
  } else {
    return "GALAU"
  }
}
  
// TEST CASES
console.log(loveMeNot([true, false, false])); // "HE DOES NOT LOVE ME :("
console.log(loveMeNot([true, true, false, false, true])); // "HE LOVES ME!"
console.log(loveMeNot([true, false])); // "GALAU"
console.log(loveMeNot([])); // "GALAU"
console.log(loveMeNot([false])); // "HE DOES NOT LOVE ME :("

// 2 minutes 27 sec

// yang ini mirip - mirip tapi dari codewars

/*
Soal: 

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Instructions: 
Write a function that will take the number of petals of each flower and 
return true if they are in love and false if they aren't.
*/

// function lovefunc(flower1, flower2){

//   return flower1%2 !== flower2%2;
// }

// console.log(lovefunc(1,4)); //true
// console.log(lovefunc(2,2)); //false
// console.log(lovefunc(0,1)); //true
// console.log(lovefunc(0,0)); //false



