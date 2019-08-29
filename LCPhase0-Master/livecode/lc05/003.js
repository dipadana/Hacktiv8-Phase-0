/**
  ODD EVEN OPERATION

  Diberikan sebuah function oddEvenOperation dimana function ini menerima sebuah parameter
  bertipe array of number. Function ini akan mengembalikan penjumlahan dan pengurangan dengan
  aturan tertentu.
    - Jika angka yang sedang diakses pada array merupakan bilangan ganjil maka operasi yang
     akan dikenakan adalah pengurangan
    - Jika angka yang sedang diakses pada array merupakan bilangan genap maka operasi yang
     akan dikenakan adalah penambahan

  Contoh:
  input: [ 1, 3, 2, 2, 5 ]
  outuput: -5
  penjelasan:
    - array ke 0 berisi nilai 1, karena 1 adalah bilangan ganjil maka 0 - 1 = -1
    - array ke 1 berisi nilai 3, karena 3 adalah bilangan ganjil maka hasil sebelumnya dikurang 3 (-1 - 3 = -4)
    - array ke 2 berisi nilai 2, karena 2 adalah bilangan genap maka hasil sebelumnya  ditambah 2 (-4 + 2 = -2)
    - array ke 3 berisi nilai 2, karena 2 adalah bilangan genap maka hasil sebelumnya ditambah 2 (-2 + 2 = 0)
    - array ke 4 berisi nilai 5, karena 5 adalah bilangan ganjil maka hasil sebelumnya dikurang 5 (0 - 5 = -5)

  Aturan coding:
  - Dilarang menggunakan built-in function:
      - .map()
      - .filter()
      - .reduce()

**/

function oddEvenOperation(numbers) {
  // your code here
  var result = 0;
  if(numbers.length === 0){
    return 'data kosong'
  }else{
    for(var i = 0; i < numbers.length; i++){
      if(numbers[i]%2 === 1){
        result -= numbers[i]
      }else{
        result += numbers[i]
      }
    }
  }
  return result
}

console.log(oddEvenOperation([1, 3, 2, 2, 5])); //-5
console.log(oddEvenOperation([10, 11, 3, 2, 5, 7, 99, 120])); //7
console.log(oddEvenOperation([])); //'data kosong'
