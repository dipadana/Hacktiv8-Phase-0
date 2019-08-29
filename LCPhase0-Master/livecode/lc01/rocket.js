/**
Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter
berupa angka yang merupakan ukuran waktu dalam menit.

Function akan me-return string waktu dalam format x jam x menit berdasarkan menit tersebut.

Contoh, jika menit adalah 63, maka function akan me-return "1 jam 3 menit".

**/

function konversiMenit(menit) {
    var jam = Math.floor(menit/60);
    var sisa = menit%60;
    var result = '';

    if(menit% 60 === 0){
        result = jam + ' jam'
    }else if(menit < 60){
        result = sisa + ' menit'
    }else{
        result = jam + ' jam ' + sisa + ' menit'
    }
    return result
  }
  
  // TEST CASES / DRIVER CODE
  console.log(konversiMenit(63)); // 1 jam 3 menit
  console.log(konversiMenit(124)); // 2 jam 4 menit
  console.log(konversiMenit(53)); // 53 menit
  console.log(konversiMenit(88)); // 1 jam 28 menit
  console.log(konversiMenit(120)); // 2 jam
