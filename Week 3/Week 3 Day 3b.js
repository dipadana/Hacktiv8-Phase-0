
function palindromeGenerator(num){
  var number = num;
  var palindrome = false;
  while(palindrome == false){
    var reverse = number.toString().split('').reverse().join('');
    if(number == reverse){
      palindrome = true;
      return number;
    }
    else{
      number++;
    }
  } 
}

function angkaPalindrome(num) {
  //inisiasi variable
  var number = num;
  var tempNumber = palindromeGenerator(num);
  // jika angka yg masuk angka 0 - 8 maka akan ditambah 1
  if(0 <= number && number <= 8){
    return number + 1;
  }
  // jika angka yg masuk angka 9 maka akan ditambah 2
  else if(number == 9){
    return number + 2;
  }
  //selain 0 - 9, dilakukan pengecekan apakah angka yg masuk itu palindrome
  //jika tidak, angka tersebut akan dicarikan palindrome terdekatnya
  //jika palindrome, angka tersebut akan dicarikan palindrome terdekatnya, juga...
  else if(tempNumber == number){
    return palindromeGenerator(number+1);
  }
  else{
    return palindromeGenerator(number);
  }
  
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(9)); // 11
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(1001)); // 1111
console.log(angkaPalindrome(1111)); // 1221