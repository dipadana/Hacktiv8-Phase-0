var str1 = '00000000000000000000000000000000000000000000000000000000000000000000000000123';
var str2 = '123123';

function removeZeroInFront(str){
  var temp = str.split('')
  var count = 0;
  console.log(temp.length)
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





console.log(removeZeroInFront(str1))