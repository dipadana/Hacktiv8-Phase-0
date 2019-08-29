/*

Buatlah pola bilangan berikut menggunakan rekursif,
tidak usah buat function

54321
5432
543
54
5


321
32
3

*/

// function pyramidOfNumbers(num){
  
//   var str = String(num)
//   if(str.length === 0){
//     return str
//   } 
  
//   else {
    
//     var strNum = ""
//     for(var i = num; i >= 1; i--){
// //     console.log(i)
//       strNum += i
//     }
//     var min = strNum.substring(0, str.length-1)
//     return strNum 
//   }
  
// }
// console.log(pyramidOfNumbers(5));

function pyramidOfNumbers(num){

  if (typeof num === 'string') {
    if (num.length === 1) {
      return num
    } else {
      return num + "\n" + pyramidOfNumbers(num.slice(0,-1)) 
    }

  } else {

    if(num === 0){
      return '';
    } else {
      var strNum = "";
      for(var i = num; i >= 1; i--){
  //     console.log(i)
        strNum += i;
      }
      // var min = num - 1;
    }
  //   return min
    return strNum + "\n" + pyramidOfNumbers(strNum.slice(0, -1));
  }
}

console.log(pyramidOfNumbers(5));