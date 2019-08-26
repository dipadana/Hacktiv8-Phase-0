var str  = '7899'
var str1 = '88898'

var swap = '';
if(str.length < str1.length){
  swap = str;
  str = str1;
  str1 = swap;
}

console.log(str);
console.log(str1);

if(str1.length != str.length){
  var temp = str1.split('')
  console.log(temp)
  for(var i = 0; i < (Math.abs(str.length - str1.length)); i++){
    temp.unshift('0')
  }
  str1 = (temp.join(''))
}

console.log(str1)
console.log(eval(str + '+' + str1)) //985

while(str1.length == str.length){
  str1 = '0' + str1
}
console.log(str1.split('').length)

var sum = [];
var sumDigit = 0;
var carry = '0';
for(var i = 0; i < str.length; i++){
  eval(str[str.length-i-1] + '+' + str1[str1.length-i-1])
  sumDigit = String(eval(str[str.length-i-1] + '+' + str1[str1.length-i-1] + '+' + carry))
  console.log(sumDigit)
  if(sumDigit.length == 2 && i != str.length-1){
    carry = sumDigit[0]
    sum.push(sumDigit[1]);
  }
  else{
    sum.push(sumDigit);
    carry = '0'
  }
  console.log(carry)
}

console.log(sum.reverse().join(''))