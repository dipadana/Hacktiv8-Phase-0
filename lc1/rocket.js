/* 

Terdapat 31 hari pada bulan agustus 2019 dengan jumlah minggu sebanyak 5 minggu.
- Tanggal 1 dimulai pada hari kamis, yang juga awal dari minggu pertama di bulan agustus.
- Minggu ke 2 dimulai tanggal 4
- Minggu ke 3 dimulai tanggal 11
- Minggu ke 4 dimulai tanggal 18
- Minggu ke 5 dimulai tanggal 25
Pada bulan agustus ada 2 tanggal merah yaitu tanggal 11 dan 17.
Pada weekdays dan bukan tanggal merah, maka semua karyawan akan masuk bekerja, sedangkan pada weekend dan tanggal merah adalah hari libur.

Buatlah function infoAgustus yang akan menentukan apakah hari pada minggu yang diinput adalah hari libur atau tidak pada bulan agustus ini.

NOTES:
  - Output harus PERSIS sesuai dengan yang dicontohkan.

contoh 1: infoAgustus('Sunday', 3)
INPUT:
  day: 'Sunday'
  week: 3
PROCESS:
  Sunday (Minggu) pada week 3 adalah weekend dan jatuh pada tanggal 11, yang merupakan tanggal merah.
  Jadi hari tersebut adalah hari libur
OUTPUT:
  'Hari Minggu, 11 Agustus 2019 adalah hari libur weekend dan juga tanggal merah '


contoh 2: infoAgustus('Rabu', 4)
INPUT:
  day: 'Rabu'
  week: 4
PROCESS:
  Hari Rabu pada week 4 adalah weekday dan jatuh pada tanggal 21 yang bukan merupakan tanggal merah.
  Jadi hari tersebut bukan hari libur
OUTPUT:
  Hari Rabu, 21 Agustus 2019 bukan hari libur


contoh 3: infoAgustus('Minggu', 5)
INPUT:
  day: 'Minggu'
  week: 5
PROCESS:
  Hari Minggu pada week 5 adalah weekend dan jatuh pada tanggal 25.
  Jadi hari tersebut adalah hari libur
OUTPUT:
  Hari Minggu, 25 Agustus 2019 adalah hari libur weekend


contoh 4: infoAgustus('Sabtu', 3)
INPUT:
  day: 'Sabtu'
  week: 3
PROCESS:
  Hari Sabtu pada week 3 adalah weekend dan jatuh pada tanggal 17 yang juga tanggal merah.
  Jadi hari tersebut adalah hari libur
OUTPUT:
  Hari Sabtu, 17 Agustus 2019 adalah hari libur weekend dan juga tanggal merah


contoh 5: infoAgustus('Senin', 6))
INPUT:
  day: 'Senin'
  week: 6
PROCESS:
  Di bulan agustus hanya ada 5 minggu
OUTPUT:
  Input minggu harus dalam range 1 - 5


contoh 6: infoAgustus('Kliwon', 1)
INPUT:
  day: 'Kliwon'
  week: 1
PROCESS:
  Hari Kliwon tidak ada dalam bahasa Indonesia atau Inggris
OUTPUT:
  Input hari harus dalam bahasa Indonesia atau Inggris yang benar

*/



// Write code here



console.log(infoAgustus('Rabu', 4)) // Hari Rabu, 21 Agustus 2019 bukan hari libur
console.log(infoAgustus('Sunday', 3)) // Hari Minggu, 11 Agustus 2019 adalah hari libur weekend dan juga tanggal merah 
console.log(infoAgustus('Sabtu', 3)) // Hari Sabtu, 17 Agustus 2019 adalah hari libur weekend dan juga tanggal merah 
console.log(infoAgustus('Minggu', 5)) // Hari Minggu, 25 Agustus 2019 adalah hari libur weekend
console.log(infoAgustus('Thursday', 3)) // Hari Kamis, 15 Agustus 2019 bukan hari libur
console.log(infoAgustus('Minggu', 0)) // Input minggu harus dalam range 1 - 5
console.log(infoAgustus('Senin', 6)) // Input minggu harus dalam range 1 - 5
console.log(infoAgustus('Kliwon', 1)) // Input hari harus dalam bahasa Indonesia atau Inggris yang benar