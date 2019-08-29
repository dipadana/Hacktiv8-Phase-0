/**
  Diberikan sebuah function vendingMoonbucks yang menerima dua parameter:
  - list pesanan bertipe array
  - uang bertipe number

  Function akan me-return sebuah array of object yang berisi beverages yang berhasil
  terbeli, uang kembalian dan keterangan (lihat test case/driver code untuk lebih detail)

  Pada function tersebut telah disediakan list menu beverages dan harga.
  Asumsi vendingMoonbucks menyediakan uang kembalian dan uang kembalian yang tersedia
  hanya 50000.

**/
function vendingMoonbucks(pesanan, uang) {
  var menu = {
    'dark-mocha': 65000,
    'java-chip': 55000,
    'asian-dolce': 50000
  }
  var uangKembalianTersedia = 50000

  //your code here
}

console.log(vendingMoonbucks(['es teh tawar', 'kopi ukut'], 150000));
// { beverages: [],
//   change: 150000,
//   keterangan: 'beverages tidak tersedia pada vendingMoonbucks' }

console.log(vendingMoonbucks(['java-chip', 'dark-mocha'], 150000));
// { beverages: [ 'java-chip', 'dark-mocha' ],
//   change: 30000,
//   keterangan: '' }

console.log(vendingMoonbucks(['asian-dolce', 'dark-mocha', 'java-chip'], 70000));
// { beverages: [ 'asian-dolce' ],
//   change: 20000,
//   keterangan: 'ada pesanan yang tidak tidak terbeli' }

console.log(vendingMoonbucks(['java-chip', 'dark-mocha'], 200000));
// { beverages: [],
//   change: 200000,
//   keterangan: 'uang kembalian tidak cukup' }
