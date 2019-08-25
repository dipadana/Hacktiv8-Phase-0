  
/*
  SELECT OPTION
  Select Option adalah sebuah fungsi untuk mengambil nilai tengah atau median dari
  array hasil kelipatan dari keynya.
  Fungsi akan menerima parameter berupa array dan key yang ingin dicari.
  EXAMPLE

  INPUT: array = [1, 2, 3, 4, 5, 6, 7], key = 2
  PROCESS: [2, 4, 6] adalah array yang merupakan kelipatan 2
  MEDIAN: 4
  OUTPUT: 4 adalah nilai median dari array di process

  INPUT: array = [1, 2, 3, 4, 5, 6], key = 1
  PROCESS: [1, 2, 3, 4, 5, 6] adalah array yang merupakan kelipatan 1
  MEDIAN: (3 + 4)/2
  OUTPUT: 3.5 adalah nilai tengah dari array di process
  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), Math, dan .unshift()
  2. WAJIB menggunakan PSEUDOCODE
*/

// Cari Median
function cariMedian(arr) {
  // Menentukan apakah jumlah element dari array tersebut, ganjil atau genap
  if(arr.length%2 == 0){
      // Jika genap, maka panjang elementnya akan dibagi 2, 
      // hasil perhitungan tersebut akan menghasilkan sebuah indeks array yang ditengah
      var batas = arr.length/2;
      return (arr[batas] + arr[batas-1])/2;
  }
  else{
      // Jika ganjil, maka langsung mencari indeks array yang ada ditengah
      var temp = 0;
      for(var i = 1; i <= arr.length; i++){
          temp += i;
      }
      // Lalu return nilai yang ada di indeks tengah
      return arr[(temp/arr.length)-1];
  }
}

function selectOption(arr, data){
  var temp = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % data == 0){
      temp.push(arr[i]);
    }
  }
  console.log(temp);
  var output = cariMedian(temp);
  console.log(output)
  return temp.length == 0 ? "There's not option" : output;
}

// TEST CASE
console.log(selectOption([1, 2, 3, 4, 5, 6, 7], 2)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 1)) // 3.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 3)) // 4.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 4)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 7)) // There's not option