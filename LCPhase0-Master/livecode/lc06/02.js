/**

  pada bulan tanggal 1 pada bulan october 2019 jatuh pada hari senin
  buatlah sebuah program yang menampilkan nama hari berdasarkan input tanggal pada bulan dan tahun yang sama

  contoh 1 (tanggal = 2):
  hari selasa

  contoh (tanggal = 8):
  hari senin

  contoh (tanggal = 17):
  hari rabu


 */

var tanggal = 10;
// Put your code here

var days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
var counter = 0;
var result = '';

for(var i = 0; i < tanggal; i++){
  if(counter === 7){
    counter = 0
  }
  result = days[counter]
  counter++
}
console.log(result)


