function houseNumbersSum(inputArray) {
  
  var num = inputArray.slice(0, inputArray.indexOf(0));
  
  if(num.length === 0){
    return []
  } else {
    var count = 0;
    for(var i = 0; i < num.length; i++){
    count += num[i]
    }
    return count
  }
}

console.log( houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2])); //11
console.log( houseNumbersSum([4, 2, 1, 6, 0])); //13
console.log( houseNumbersSum([4, 1, 2, 3, 0, 10, 2])); //10
console.log( houseNumbersSum([0, 1, 2, 3, 4, 5])); //0