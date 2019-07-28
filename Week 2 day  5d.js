function xo(str) {
    // inisialisasi variable
    let value = [];
    let length = str.length;

    // memecah kata menjadi array" kecil. 
    // jika x = -1 , dan jika o = 1
    for (i = 0; i <=length; i++){
        if(str[i] === 'x'){
            value[i] = 1;
        }
        else{
            value[i] = -1
        }
    }

    // menjumlahkan semua angka yang ada didalam array
    let total = 0;
    for (i = 0; i <=(length-1); i++){
        total += value[i];
    }

    // jika hasil jumlah = 0 maka true, karena banyak x & o sama
    // jika selain 0, maka akan bernilai false, karena x & 0 tidak sama
    if(total === 0){
        return true;
    }
    else{
        return false;
    }
}

  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true