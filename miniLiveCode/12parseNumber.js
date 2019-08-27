/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.
  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1
  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(num){
  
  // var arrNum = String(number).split('')
  // console.log(arrNum)
  // if(arrNum[arrNum.length-1] == '0'){
  //   arrNum.pop();
  // }
  // console.log()

  // var num = arrNum.join('');

  if(num === 0){
    return '';
  }
  var arr = String(num)
  var depan = 10**(arr.length-1) * Number(arr[0])
  var belakang = parseNumber(num - depan)
  // var belakang = nextString ? `+${nextString}` : '' 
  return depan + '+' + belakang
}

console.log(parseNumber(3333)) // 3000+300+30+3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3
console.log(parseNumber(50500)) // 5000+50
console.log(parseNumber(55000000000)) // 500000+50000