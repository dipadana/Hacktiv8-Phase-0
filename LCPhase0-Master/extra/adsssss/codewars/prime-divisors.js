
function divisors(integer) {
  var arr = [];
  for (var i = 2; i < integer; i++) { if (integer%i === 0) arr.push(i); } 
  return (arr.length === 0) ? integer + ' is prime' : arr;
}

console.log(divisors(12)); //should return [2,3,4,6]
console.log(divisors(25)); //should return [5]
console.log(divisors(13)); //should return "13 is prime"