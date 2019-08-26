function removeZeroInFront(str){
  var temp = str.split('')
  var count = 0;
  for(var i = 0; i < temp.length; i++){
    if(temp[i] != '0'){
      break;
    }
    count++;
  }
  for(var i = 0; i < count; i++){
    temp.shift()
  }
  str = temp.join('')
  return str;
}

function bigNumber(strx,stry){
  // Remove any zero number inFrontOf the number
  str = removeZeroInFront(strx);
  str1 = removeZeroInFront(stry)

  // match (cocokan) the number length
  if(str.length != str1.length){
    var swap = '';
    if(str.length < str1.length){
      swap = str;
      str = str1;
      str1 = swap;
    }
    var temp = str1.split('')
    for(var i = 0; i < (Math.abs(str.length - str1.length)); i++){
      temp.unshift('0')
    }
    str1 = (temp.join(''))
  }
  
  // Proses perhitungannya
  var sum = [];
  var sumDigit = 0;
  var carry = '0';
  for(var i = 0; i < str.length; i++){
    eval(str[str.length-i-1] + '+' + str1[str1.length-i-1])
    sumDigit = String(eval(str[str.length-i-1] + '+' + str1[str1.length-i-1] + '+' + carry))
    if(sumDigit.length == 2 && i != str.length-1){
      carry = sumDigit[0]
      sum.push(sumDigit[1]);
    }
    else{
      sum.push(sumDigit);
      carry = '0'
    }
  }
  return (sum.reverse().join(''));
}

var str  = '00000009'
var str1 = '00000000000009'
console.log(bigNumber(str,str1))