function boxNumber(num) {
  result = "";
  if (num%2 !== 0) {
    for (var i=1; i<Math.ceil(num/2); i++) {
      result += String(i);
    } for (var i=Math.ceil(num/2); i>0; i--) {
      result += String(i);
    }
    return result;
  }
  else {
    for (var i=1; i<Math.ceil(num/2)+1; i++) {
      result += String(i);
    } for (var i=Math.ceil(num/2); i>0; i--) {
      result += String(i);
    }
    return result;
  }
}


console.log(boxNumber(5)); // 12321
console.log(boxNumber(8)); // 12344321

// Pseudocode:
// 1. num2 = num bagi 2
// 2. num2 dibuletin
// 3. looping num2 dari awal
// 4. looping num2 dari akhir
