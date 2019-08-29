/*
======================
Highest Global Minimum
======================

[INSTRUCTIONS]

highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter,
kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.

[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])
firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]

nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8

karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.
*/

/*
Pseducode/ algoritma anda di sini
Algoritma:
1. Dicari nilai minimum pada 2 array, disini dilakukan dengan menggunakan fungsi tambahan.
2. Fungsi tambahan (getMin) menerima array sebagai parameter dan memiliki variabel penampung untuk nilai minimum sementara.
3. Fungsi tambahan melakukan loop pada parameter array untuk memeriksa tiap elemenya.
4. Jika elemennya lebih kecil dari nilai yang ada pada variabel penampung currentMin, maka currentMin akan diberikan nilai yang ada pada elemen di index  pada perulangan tersebut.
5. Fungsi tambahan akan mengembalikan nilai yang ada didalam variabel penampung.
6. Kembali ke fungsi utama (highestGlobalMinimum), dibuat 2 variabel untuk masing-masing array masukan (firstMin dan secondMin).
7. Didalam variabel firstMin dipanggil fungsi tambahan (getMin) dengan input array pertama (firstArr) sebagai parameternya. Diperoleh nilai minimum untuk input 1.
8. Didalam variabel secondMin dipanggil fungsi tambahan (getMin) dengan input array kedua (secondArr) sebagai parameternya. Diperoleh nilai minimum untuk input 2.
9. Nilai dari firstMin dan secondMin dibandingkan dan nilai terbesar dari kedua variabel tersebut dikembalikan oleh fungsi.
*/

// function highestGlobalMinimum(firstArr, secondArr) {
//   // code anda disini
//   var firstMin = firstArr[0] ? firstArr[0] : 0;
//   var secondMin = secondArr[0] ? secondArr[0] : 0;

//   firstMin = getMin(firstArr);
//   secondMin = getMin(secondArr);

//   return firstMin > secondMin ? firstMin : secondMin;
// }

// function getMin (array){
//   var currentMin = array[0] ? array[0] : 0
//   for(var i = 0; i<array.length; i++) {
//     if(array[i] < currentMin) {
//       currentMin = array[i];
//     }
//   } return currentMin;
// }

function highestGlobalMinimum(firstArr, secondArr) {
  // code anda disini
  var firstMin = firstArr[0]
  for(var i = 0; i < firstArr.length; i++){
    if(firstArr[i] < firstMin){
      firstMin = firstArr[i]
    }
  }

  var secondMin = secondArr[0]
  for(var i = 0; i < secondArr.length; i++){
    if(secondArr[i] < secondMin){
      secondMin = secondArr[i]
    }
  }

  if(firstMin > secondMin){
    return firstMin
  }else{
    return secondMin
  }
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5