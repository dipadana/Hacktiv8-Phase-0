function palindrome(kata) {
    var tempKata = [];
    for(var i = 0; i < kata.length; i++){
        tempKata[i] = kata[i];
    }
    var kataFinal = '';
    for(i = kata.length-1; i >= 0; i--){
        kataFinal += tempKata[i];
    }

    if(kata === kataFinal){
        return true;
    }
    else{
        return false;
    }
}

  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false