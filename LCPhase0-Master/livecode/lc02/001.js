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
    salaryNett` = `brutoSalary` - (`brutoSalary` * `tax`) - ( (`brutoSalary` - (`brutoSalary` * `tax`)) * `BPJS` ) 
    - `totalBPJS` adalah total BPJS yang telah dibayarkan oleh karyawan
    pada bulan ke (`months`) tertentu. rumusnya : 
    `totalBPJS` = ( (`brutoSalary` - (`brutoSalary` * `tax`)) * `BPJS` ) * `months`


    [INSTRUCTION]
    Diketahui jika : 
    `brutoSalary` => 9000000 keatas , maka : golongan I  
    `brutoSalary` => 6000000 - 8999999,  maka : golongan II 
    `brutoSalary` => 3000000 - 5999999, maka : golongan III 
    `brutoSalary` => 1000000 - 2999999,  maka : golongan IV

    Golongan I
    diwajibkan membayar : 
    - `tax` 4% dari `brutoSalary`
    - `BPJS` 5% dari `brutoSalary` setelah dikurangi `brutoSalary` * `tax` 

    Golongan II
    diwajibkan membayar : 
    - `tax` 3% dari `brutoSalary`
    - `BPJS` 4% dari `brutoSalary` setelah dikurangi `brutoSalary` * `tax`

    Golongan III
    diwajibkan membayar :
    - `tax` 2% dari `brutoSalary` 
    - BPJS 3% dari `brutoSalary` setelah dikurangi `brutoSalary` * `tax`

    Golongan IV 
    diwajibkan membayar : 
    - tidak dikenakan `tax`
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

    [YOUR PSEUDOCODE HERE]


*/

function salaryRangeCalculator(brutoSalary,months) {
    var gol = '';
    
    if(brutoSalary < 1000000){
        return 'Gaji anda dibawah standard perusahaan'
    }else if(brutoSalary >= 9000000){
        gol = 'golongan I'
    }else if(brutoSalary >= 6000000){
        gol = 'golongan II'
    }else if(brutoSalary >= 3000000){
        gol = 'golongan III'
    }else if(brutoSalary >= 1000000){
        gol = 'golongan IV'
    }
    
    if (gol === 'golongan I'){
        var tax = 4/100*brutoSalary;
        var BPJS = 5/100*(brutoSalary-tax)
    }else if (gol === 'golongan II'){
        var tax = 3/100*brutoSalary;
        var BPJS = 4/100*(brutoSalary-tax)
    }else if (gol === 'golongan III'){
        var tax = 2/100*brutoSalary;
        var BPJS = 3/100*(brutoSalary-tax)
    }else if (gol === 'golongan IV'){
        var tax = 0*brutoSalary;
        var BPJS = 2/100*(brutoSalary-tax)
    }

    var salaryNett = brutoSalary - tax - BPJS;
    var totalBPJS = BPJS * months
    
    console.log ("netSalary ", salaryNett, ", totalBPJS yang telah dibayarkan ", totalBPJS);
}

salaryRangeCalculator(5000000,3)
// netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000


