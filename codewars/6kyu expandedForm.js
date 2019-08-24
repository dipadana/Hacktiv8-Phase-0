function expandedForm(num){
  var output = [];
  var arr = String(num).split('').reverse();

  for(var  i = 0; i < arr.length; i++){
    if(arr[i] != '0'){
      i == 0 ? output.push(arr[i]) : output.push(String((10**i) * Number(arr[i])));
    }
    
  }

  var result = '';
  output.reverse();
  for(var i = 0; i < output.length; i++){
    i == output.length-1 ? result += output[i] : result += output[i] + ' + ';
  }
  return result;
}

console.log(expandedForm(4203)) // 4000 + 200 + 3