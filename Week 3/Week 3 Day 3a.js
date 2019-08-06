// Palindrome
function palindrome(kata) {
    // Buat sebuah array kosong untuk menyimpan huruf inputan
    var tempKata = [];

    // Secara manual memasukan tiap huruf kedalam array sementara
    // lalu direverse secara manual
    for(var i = 0; i < kata.length; i++){
        tempKata[i] = kata[i];
    }

    // Buat sebuah variabel untuk menampung huruf yand sudah direverse
    var kataFinal = '';
    for(i = kata.length-1; i >= 0; i--){
        kataFinal += tempKata[i];
    }

    // Bandingkan kata dengan kata hasil reverse
    // bila kata palindrome, return true
    // tapi jika tidak palindorom return false
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