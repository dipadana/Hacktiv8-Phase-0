function perkalianUnik(arr) {
  var tempNumber = 1;
  var finalArr = [];
  var tempArr = 0;

  for(var i = 0; i < arr.length; i++){
    // simpan dulu nilai urutan array yang akan dihilangkan
    tempArr = arr[i];

    // lalu rubah nilai array tersebut menjadi 1
    //karena apapun yg dikali 1 tidak akan mempengaruhi hasil kali total lainnya (seolah" hilang)
    arr[i]  = 1;

    //proses hitung kali array sisanya, hasilnya dimasukan kedalam array baru sesuai urutan
    for(var j = 0; j < arr.length; j++){
      tempNumber *= arr[j];
    }

    // hasil untuk array sudah didapat, diulang terus sebanyak panjang array
    finalArr[i] = tempNumber;

    // ketika satu putaran hitungan selesai, semua variable temporary di reset
    tempNumber = 1;
    arr[i] = tempArr;
    tempArr = 0;
  }
  return finalArr;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]