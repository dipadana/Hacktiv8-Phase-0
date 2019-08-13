// Makan Terus Rekursif
function makanTerusRekursif(waktu) {
    var makan = 1;
    if(waktu <= 15 && 0 < waktu){
        return makan;
    }
    else if(waktu <= 0){
        return 0;
    }
    else{
        return makan + makanTerusRekursif(waktu - 15)
    }
}

  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0