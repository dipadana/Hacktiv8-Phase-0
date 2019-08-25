
/*
  =======================
  Salary Range Calculator
  =======================
  Buatlah sebuah program sederhana yang menghitung
  `salaryNett` dan `totalBPJS` yang didapatkan setiap karyawan sesuai dengan
  Golongan `brutoSalary` nya masing - masing.

  pengertian :
  - `brutoSalary` adalah gaji kotor

  - `salaryNett` adalah gaji bersih yang didapat karyawan dengan rumus

  salaryNett` = `brutoSalary` - (`brutoSalary` * `Tax`) - 
  ( (`brutoSalary` - (`brutoSalary` * `Tax`)) * `BPJS` )

  - `totalBPJS` adalah total BPJS yang telah dibayarkan oleh karyawan
  pada bulan ke (`months`) tertentu. rumusnya :

  `totalBPJS` = ( (`brutoSalary` - (`brutoSalary` * `Tax`)) * `BPJS` ) * `months`

  [INSTRUCTION]
  Diketahui jika :
  `brutoSalary` => 9000000 keatas , maka : golongan I
  `brutoSalary` => 6000000 - 8999999,  maka : golongan II
  `brutoSalary` => 3000000 - 5999999, maka : golongan III
  `brutoSalary` => 1000000 - 2999999,  maka : golongan IV

  Golongan I
  diwajibkan membayar :
  - `Tax` 4% dari `brutoSalary`
  - `BPJS` 5% dari `brutoSalary` setelah dikurangi `Tax`

  Golongan II
  diwajibkan membayar :
  - `Tax` 3% dari `brutoSalary`
  - `BPJS` 4% dari `brutoSalary` setelah dikurangi `Tax`

  Golongan III
  diwajibkan membayar :
  - `Tax` 2% dari `brutoSalary`
  - BPJS 3% dari `brutoSalary` setelah dikurangi `Tax`

  Golongan IV
  diwajibkan membayar :
  - tidak dikenakan `Tax`
  - BPJS 2% dari `brutoSalary`

  Jika `brutoSalary` dibawah 1000000 maka outputnya
  "Gaji anda dibawah standard perusahaan"

  [EXAMPLE]
  diberikan input :
  brutoSalary = 5000000
  months = 3
  maka outputnya adalah :
  "netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000"

  **WAJIB MENGGUNAKAN PSEUDOCODE**
*/

function salaryRangeCalculator(gaji, bulan){
  // Menyusun data golongan menjadi object
  var golongan = {
    golI : {
      tax : ((4/100)*gaji),
      bpjs : (5/100)*(gaji - ((4/100)*gaji))
    },
    golII : {
      tax : ((3/100)*gaji),
      bpjs : (4/100)*(gaji - ((3/100)*gaji))
    },
    golIII: {
      tax : ((2/100)*gaji),
      bpjs : (3/100)*(gaji - ((2/100)*gaji))
    },
    golIV : {
      tax : 0,
      bpjs : (2/100)*(gaji)
    },
  }

  // Memproses dan mengelompokkan data
  var tax; var bpjs;
  if(1000000 <= gaji && gaji <= 2999999){
    tax = golongan.golIV.tax;
    bpjs = golongan.golIV.bpjs;
  }
  else if(3000000 <= gaji && gaji <= 5999999){
    tax = golongan.golIII.tax;
    bpjs = golongan.golIII.bpjs;
  }
  else if(6000000 <= gaji && gaji <= 8999999){
    tax = golongan.golII.tax;
    bpjs = golongan.golII.bpjs;
  }
  if(9000000 <= gaji){
    tax = golongan.golI.tax;
    bpjs = golongan.golI.bpjs;
  }

  // Melakuakn kalkulasi data untuk output 
  var salaryNett = gaji - tax - bpjs;
  var totalBPJS = bpjs * bulan;

  // Jika gaji tidak memenuhi minimum, maka tidak perlu dihitung
  return gaji < 1000000 ? 'Gaji anda dibawah standard perusahaan' : 'netSalary = ' + salaryNett + 'totalBPJS yang telah dibayarkan = ' + totalBPJS;
}

console.log(salaryRangeCalculator(5000000, 3));
// console.log(salaryRangeCalculator(6000000, 3))
// netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000